import { consume, createContext, provide } from "@lit/context";
import { TooltipContentRecipe } from "@sandwich-ui/core/recipes";
import { StateFrom } from "@zag-js/core";
import * as presence from "@zag-js/presence";
import * as tooltip from "@zag-js/tooltip";
import { LitElement, PropertyValues, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import { globalStyle } from "../style";
import { AnyProps } from "../types/props";
import { normalizeProps } from "../utilities/zag/normalize-props";
import { spreadProps } from "../utilities/zag/spread-props";

type TooltipState = StateFrom<tooltip.Service>;

const tooltipServiceContextKey = Symbol("tooltipServiceContext");
const tooltipServiceContext = createContext<tooltip.Service | undefined>(
  tooltipServiceContextKey,
);
const tooltipStateContextKey = Symbol("tooltipStateContext");
const tooltipStateContext = createContext<TooltipState | undefined>(
  tooltipStateContextKey,
);

@customElement("sw-tooltip")
export class Tooltip extends LitElement {
  @property({ type: String })
  id!: string;

  @provide({ context: tooltipServiceContext })
  service?: tooltip.Service;

  @provide({ context: tooltipStateContext })
  state?: TooltipState;

  connectedCallback(): void {
    super.connectedCallback();

    this.service = this.#initService({ id: this.id });
    this.state = this.service.getState() as TooltipState;

    this.service.subscribe((state) => {
      this.state = state as TooltipState;
    });

    this.service.start();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.service?.stop();

    this.state = undefined;
    this.service = undefined;
  }

  render() {
    return html`<slot></slot>`;
  }

  #initService = (context: tooltip.Context) => {
    return tooltip.machine({
      ...context,
    });
  };
}

export class TooltipConsumer extends LitElement {
  @consume({ context: tooltipServiceContext, subscribe: true })
  service?: tooltip.Service;

  @consume({ context: tooltipStateContext, subscribe: true })
  @state()
  state?: TooltipState;

  api?: tooltip.Api;

  protected firstUpdated(): void {
    this.api = this.initApi();
  }

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (_changedProperties.has("state")) {
      this.api = this.initApi();
    }
  }

  protected initApi = () => {
    if (!this.service || !this.state) return;

    return tooltip.connect(this.state, this.service.send, normalizeProps);
  };
}

@customElement("sw-tooltip-trigger")
export class TooltipTrigger extends TooltipConsumer {
  #previousProps?: AnyProps;

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    this.#updateProps();
  }

  render() {
    return html`<slot></slot>`;
  }

  #updateProps = () => {
    if (!this.api || !this.shadowRoot?.host) return;

    const props = this.api.getTriggerProps();

    spreadProps(this.shadowRoot.host, props, this.#previousProps);

    this.#previousProps = props;
  };
}

@customElement("sw-tooltip-positioner")
export class TooltipPositioner extends TooltipConsumer {
  #previousProps?: AnyProps;

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    this.#updateProps();
  }

  render() {
    return html`<slot></slot>`;
  }

  #updateProps = () => {
    if (!this.api || !this.shadowRoot?.host) return;

    const props = this.api.getPositionerProps();

    spreadProps(this.shadowRoot.host, props, this.#previousProps);

    this.#previousProps = props;
  };
}

@customElement("sw-tooltip-content")
export class TooltipContent extends TooltipConsumer {
  static styles = globalStyle;

  #previousProps?: AnyProps;

  @state()
  isHidden = true;

  protected updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (this.api?.open) {
      this.isHidden = false;
    }

    this.#updateProps();
  }

  render() {
    return html`<div class=${TooltipContentRecipe()}><slot></slot></div>`;
  }

  #updateProps = () => {
    if (!this.api || !this.shadowRoot?.firstElementChild) return;

    const props = this.api.getContentProps();
    const additionalProps = {
      hidden: this.isHidden,
      onAnimationEnd: this.#trackAnimationEnd,
    };
    const mergedProps = { ...props, ...additionalProps };

    spreadProps(
      this.shadowRoot.firstElementChild,
      mergedProps,
      this.#previousProps,
    );

    this.#previousProps = mergedProps;
  };

  #trackAnimationEnd = (event: AnimationEvent) => {
    if (event.animationName === "popoverOut") {
      this.isHidden = true;
    }
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
