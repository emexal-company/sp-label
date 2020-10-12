import { Base } from '@spectrum/sp-base';
export declare class Label extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    grey: boolean;
    red: boolean;
    orange: boolean;
    yellow: boolean;
    seafoam: boolean;
    green: boolean;
    active: boolean;
    inactive: boolean;
    small: boolean;
    large: boolean;
    label: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-label': Label;
    }
}
