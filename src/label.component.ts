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

import { css, customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './label.styles';
import standardTemplate from './label.template';

@customElement('sp-label')
export class Label extends Base {
  public static componentStyles = [ labelStyles , css`.spectrum-Label { color: var(--color); }` ];

  @property({ type: Boolean }) public grey: boolean = false;
  @property({ type: Boolean }) public red: boolean = false;
  @property({ type: Boolean }) public orange: boolean = false;
  @property({ type: Boolean }) public yellow: boolean = false;
  @property({ type: Boolean }) public seafoam: boolean = false;
  @property({ type: Boolean }) public green: boolean = false;
  @property({ type: Boolean }) public active: boolean = false;
  @property({ type: Boolean }) public inactive: boolean = false;
  @property({ type: Boolean }) public small: boolean = false;
  @property({ type: Boolean }) public large: boolean = false;
  @property({ type: String })  public label: string = '';
 

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-label': Label;
  }
}
