import { __decorate, __metadata } from "tslib";
import { css, customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './label.styles';
import standardTemplate from './label.template';
let Label = class Label extends Base {
    constructor() {
        super(...arguments);
        this.grey = false;
        this.red = false;
        this.orange = false;
        this.yellow = false;
        this.seafoam = false;
        this.green = false;
        this.active = false;
        this.inactive = false;
        this.small = false;
        this.large = false;
        this.label = '';
    }
    render() {
        return standardTemplate.call(this);
    }
};
Label.componentStyles = [labelStyles, css `.spectrum-Label { color: var(--color); }`];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "grey", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "red", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "orange", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "yellow", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "seafoam", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "green", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "active", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "inactive", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "small", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Label.prototype, "large", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Label.prototype, "label", void 0);
Label = __decorate([
    customElement('sp-label')
], Label);
export { Label };
//# sourceMappingURL=label.component.js.map