import { consume, createContext, provide } from "@lit/context";
import * as tooltip from "@zag-js/tooltip";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { AnyProps } from "../types/props";
import { normalizeProps } from "../utilities/zag/normalize-props";
import { spreadProps } from "../utilities/zag/spread-props";

const tooltipServiceContextKey = Symbol("tooltipServiceContext");
const tooltipServiceContext = createContext<tooltip.Service | undefined>(
  tooltipServiceContextKey,
);
const tooltipApiContextKey = Symbol("tooltipApiContext");
const tooltipApiContext = createContext<tooltip.Api | undefined>(
  tooltipApiContextKey,
);

@customElement("sw-tooltip")
export class Tooltip extends LitElement {
  protected createRenderRoot = () => this;

  @property({ type: String })
  id!: string;

  @provide({ context: tooltipServiceContext })
  service?: tooltip.Service;

  @provide({ context: tooltipApiContext })
  api?: tooltip.Api;

  connectedCallback(): void {
    super.connectedCallback();

    const service = this.#initService({ id: this.id });
    const api = this.#initApi(service);

    service.subscribe(() => {
      this.api = this.#initApi(service);
    });

    this.service = service;
    this.api = api;

    service.start();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.service?.stop();

    this.api = undefined;
    this.service = undefined;
  }

  render() {
    return html`<slot></slot>`;
  }

  #initService = (context: tooltip.Context) => {
    return tooltip.machine(context);
  };

  #initApi = (service: tooltip.Service) => {
    return tooltip.connect(service.state, service.send, normalizeProps);
  };
}

@customElement("sw-tooltip-trigger")
export class TooltipTrigger extends LitElement {
  protected createRenderRoot = () => this;

  #previousProps?: AnyProps;

  @consume({ context: tooltipApiContext, subscribe: true })
  api?: tooltip.Api;

  render() {
    this.#updateProps();

    return html`<div><slot></slot></div>`;
  }

  #updateProps = () => {
    if (!this.api) return;

    const props = this.api.getTriggerProps();

    spreadProps(this, props, this.#previousProps);

    this.#previousProps = props;
  };
}

@customElement("sw-tooltip-positioner")
export class TooltipPositioner extends LitElement {
  protected createRenderRoot = () => this;

  #previousProps?: AnyProps;

  @consume({ context: tooltipApiContext, subscribe: true })
  api?: tooltip.Api;

  render() {
    this.#updateProps();

    return html`<slot></slot>`;
  }

  #updateProps = () => {
    if (!this.api) return;

    const props = this.api.getPositionerProps();

    spreadProps(this, props, this.#previousProps);

    this.#previousProps = props;
  };
}

@customElement("sw-tooltip-content")
export class TooltipContent extends LitElement {
  protected createRenderRoot = () => this;

  #previousProps?: AnyProps;

  @consume({ context: tooltipApiContext, subscribe: true })
  api?: tooltip.Api;

  render() {
    this.#updateProps();

    return html`<slot></slot>`;
  }

  #updateProps = () => {
    if (!this.api) return;

    const props = this.api.getContentProps();

    console.log(props);

    spreadProps(this, props, this.#previousProps);

    this.#previousProps = props;
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "sw-tooltip": TooltipTrigger;
    "sw-tooltip-trigger": TooltipTrigger;
    "sw-tooltip-positioner": TooltipPositioner;
    "sw-tooltip-content": TooltipContent;
  }
}
