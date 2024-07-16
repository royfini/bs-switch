import { h } from "@stencil/core/internal";
import bootstrapCss from "../../assets/bootstrap.min.css";
export class Switch {
    constructor() {
        this.label = 'on';
    }
    componentDidLoad() {
        const shadowRoot = this.element.shadowRoot;
        if (shadowRoot) {
            const style = document.createElement('style');
            style.textContent = bootstrapCss;
            shadowRoot.appendChild(style);
        }
    }
    switchToggle() {
        if (this.inputEl.checked) {
            this.label = 'on';
        }
        else {
            this.label = 'off';
        }
    }
    render() {
        return (h("div", { key: '6ac0e9eb66dca829b9641e20bfa11031fa4d92b4', class: "container" }, h("div", { key: '63fa1ed0529974f5612dc795cc89257d24f2efd3', class: "form-check form-switch" }, h("input", { key: '145a5af34902270b8ba46eb3b620b1914b335ad6', class: "form-check-input", type: "checkbox", role: "switch", id: "flexSwitchCheckDefault", checked: true, ref: el => (this.inputEl = el), onChange: this.switchToggle.bind(this) }), h("label", { key: 'cd102f90df900b95c2a69d6d6c2aef25a7c75bef', class: "form-check-label" }, this.label))));
    }
    static get is() { return "rf-switch"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "label": {}
        };
    }
    static get elementRef() { return "element"; }
}
//# sourceMappingURL=switch.js.map
