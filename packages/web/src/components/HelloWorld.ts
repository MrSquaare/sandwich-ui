import { css } from "@sandwich-ui/core/css";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("sw-hello-world")
export class HelloWorld extends LitElement {
  protected createRenderRoot = () => this;

  render() {
    return html`
      <div class="${css({ p: 4 })}">
        <h1 class="${css({ fontSize: "2xl", fontWeight: "bold" })}">
          Hello, World!
        </h1>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sw-hello-world": HelloWorld;
  }
}
