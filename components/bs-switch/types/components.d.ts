/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface RfSwitch {
    }
}
declare global {
    interface HTMLRfSwitchElement extends Components.RfSwitch, HTMLStencilElement {
    }
    var HTMLRfSwitchElement: {
        prototype: HTMLRfSwitchElement;
        new (): HTMLRfSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "rf-switch": HTMLRfSwitchElement;
    }
}
declare namespace LocalJSX {
    interface RfSwitch {
    }
    interface IntrinsicElements {
        "rf-switch": RfSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "rf-switch": LocalJSX.RfSwitch & JSXBase.HTMLAttributes<HTMLRfSwitchElement>;
        }
    }
}
