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
import { DemoLabel } from './demo-label.component';

import '@spectrum/sp-label';
import '@spectrum/sp-container';


export default function template(this: DemoLabel) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
  <sp-demo width="200">
    <pre><sp-Label grey label="Grey Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label Red label="Red Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label Orange label="Orange Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label Yellow label="Yellow Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label Seafoam label="Seafoam Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label Green label="Green Label"></sp-Label></pre>
  </sp-demo>
  <sp-rule medium label="Activity labels"></sp-rule>
  <sp-demo width="200">
    <pre><sp-Label active label="Active"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label inactive label="Inactive"></sp-Label></pre>
  </sp-demo>
  <sp-rule medium label="Small"></sp-rule>
  <sp-demo width="200">
    <pre><sp-Label small grey label="Grey Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label small Red label="Red Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label small Orange label="Orange Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label small Yellow label="Yellow Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label small Seafoam label="Seafoam Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label small Green label="Green Label"></sp-Label></pre>
  </sp-demo>
  <sp-rule medium label="Large"></sp-rule>
  <sp-demo width="200">
    <pre><sp-Label large grey label="Grey Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label large Red label="Red Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label large Orange label="Orange Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label large Yellow label="Yellow Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label large Seafoam label="Seafoam Label"></sp-Label></pre>
  </sp-demo>
  <sp-demo width="200">
    <pre><sp-Label large Green label="Green Label"></sp-Label></pre>
  </sp-demo>
  </sp-container>
  `;
  
}
