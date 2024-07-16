import type { Components, JSX } from "../types/components";

interface RfSwitch extends Components.RfSwitch, HTMLElement {}
export const RfSwitch: {
    prototype: RfSwitch;
    new (): RfSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
