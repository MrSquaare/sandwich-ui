import { consume, createContext, provide } from "@lit/context";
import * as tooltip from "@zag-js/tooltip";
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { AnyProps } from "../types/props";
import { normalizeProps } from "../utilities/zag/normalize-props";
import { spreadProps } from "../utilities/zag/spread-props";

export type TooltipMachine = ReturnType<typeof tooltip.machine>;

class TooltipContext {
  constructor(
    public machine: TooltipMachine,
    public api: tooltip.Api,
  ) {}
}

const tooltipContextKey = Symbol("tooltipContext");
const tooltipContext = createContext<TooltipContext | undefined>(
  tooltipContextKey,
);

@customElement("sw-tooltip")
export class Tooltip extends LitElement {
  protected createRenderRoot = () => this;

  @property({ type: String })
  id!: string;

  @provide({ context: tooltipContext })
  context?: TooltipContext;

  connectedCallback(): void {
    super.connectedCallback();

    const machine = tooltip.machine({ id: this.id, open: true });
    const api = tooltip.connect(machine.state, machine.send, normalizeProps);

    this.context = new TooltipContext(machine, api);
    this.context.machine.start();
    this.context.machine.subscribe(() => {
      if (!this.context) return;

      this.context.api = tooltip.connect(
        this.context.machine.state,
        this.context.machine.send,
        normalizeProps,
      );
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.context?.machine.stop();
    this.context = undefined;
  }

  render() {
    return html`<slot></slot>`;
  }
}

@customElement("sw-tooltip-trigger")
export class TooltipTrigger extends LitElement {
  protected createRenderRoot = () => this;

  #previousProps?: AnyProps;

  @consume({ context: tooltipContext })
  context?: TooltipContext;

  connectedCallback(): void {
    super.connectedCallback();

    if (!this.context) return;

    this.context.machine.subscribe(() => {
      if (!this.context) return;

      const props = this.context.api.getTriggerProps();

      spreadProps(this, props, this.#previousProps);

      this.#previousProps = props;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    spreadProps(this, undefined, this.#previousProps);
  }

  render() {
    console.log("sw-tooltip-trigger render()", this.context);

    return html`<div><slot></slot></div>`;
  }
}

@customElement("sw-tooltip-positioner")
export class TooltipPositioner extends LitElement {
  protected createRenderRoot = () => this;

  #previousProps?: AnyProps;

  @consume({ context: tooltipContext })
  context?: TooltipContext;

  connectedCallback(): void {
    super.connectedCallback();

    if (!this.context) return;

    this.context.machine.subscribe(() => {
      if (!this.context) return;

      const props = this.context.api.getPositionerProps();

      spreadProps(this, props, this.#previousProps);

      this.#previousProps = props;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    spreadProps(this, undefined, this.#previousProps);
  }

  render() {
    return html`<div>
      <slot></slot>
    </div>`;
  }
}

@customElement("sw-tooltip-content")
export class TooltipContent extends LitElement {
  protected createRenderRoot = () => this;

  #previousProps?: AnyProps;

  @consume({ context: tooltipContext })
  context?: TooltipContext;

  connectedCallback(): void {
    super.connectedCallback();

    if (!this.context) return;

    this.context.machine.subscribe(() => {
      if (!this.context) return;

      const props = this.context.api.getContentProps();

      spreadProps(this, props, this.#previousProps);

      this.#previousProps = props;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    spreadProps(this, undefined, this.#previousProps);
  }

  render() {
    return html`<div>
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sw-tooltip": TooltipTrigger;
    "sw-tooltip-trigger": TooltipTrigger;
    "sw-tooltip-positioner": TooltipPositioner;
    "sw-tooltip-content": TooltipContent;
  }
}
