import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
export default function standardTemplate() {
    const classes = {
        'spectrum-Label--grey': this.grey,
        'spectrum-Label--red': this.red,
        'spectrum-Label--orange': this.orange,
        'spectrum-Label--yellow': this.yellow,
        'spectrum-Label--seafoam': this.seafoam,
        'spectrum-Label--green': this.green,
        'spectrum-Label--active': this.active,
        'spectrum-Label--inactive': this.inactive,
        'spectrum-Label--small': this.small,
        'spectrum-Label--large': this.large,
    };
    return html `
    <span class="spectrum-Label ${classMap(classes)}">${this.label}</span>`;
}
//# sourceMappingURL=label.template.js.map