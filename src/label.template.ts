/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Label } from './label.component';

export default function standardTemplate(this: Label) {
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
 
    return html`
    <span class="spectrum-Label ${classMap(classes)}">${this.label}</span>`;
}
