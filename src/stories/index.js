import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from '../components/button/Button';
import ButtonFlow from '../components/buttonFlow/ButtonFlow';
import App from '../App';
import './storybook.scss';
storiesOf('app', module).add('Default', () => <App />);

storiesOf('Button', module)
.add('Simple', () => 
  <div className="storybook-btn">
    <h2>Primary:</h2>
    <Button theme="primary" label="primary" />
    <Button theme="primary" label="primary" shadow={true} />
    <h2>Secondary:</h2>
    <Button theme="secondary" label="secondary" />
    <Button theme="secondary" label="secondary" shadow={true} />
    <h2>Success:</h2>
    <Button theme="success" label="success" />
    <Button theme="success" label="success" shadow={true} />
    <h2>Warning:</h2>
    <Button theme="warning" label="warning" />
    <Button theme="warning" label="warning" shadow={true} />
    <h2>Info:</h2>
    <Button theme="info" label="info" />
    <Button theme="info" label="info" shadow={true} />
    <h2>Light:</h2>
    <Button theme="light" label="light" />
    <Button theme="light" label="light" shadow={true} />
    <h2>Dark:</h2>
    <Button theme="dark" label="dark" />
    <Button theme="dark" label="dark" shadow={true} />
    <h2>Link:</h2>
    <Button theme="link" label="link" />
    <Button theme="link" label="link" shadow={true} />
  </div>
)
.add('flow', () => 
  <div className="storybook-btn">
    <h2>Primary:</h2>
    <ButtonFlow theme='primary' label="primary" />
    <ButtonFlow theme='primary' label="primary" shadow={true} />
    <h2>Secondary:</h2>
    <ButtonFlow theme='secondary' label="secondary" />
    <ButtonFlow theme='secondary' label="secondary" shadow={true} />
    <h2>Success:</h2>
    <ButtonFlow theme='success' label="success" />
    <ButtonFlow theme='success' label="success" shadow={true} />
    <h2>Warning:</h2>
    <ButtonFlow theme='warning' label="warning" />
    <ButtonFlow theme='warning' label="warning" shadow={true} />
    <h2>Info:</h2>
    <ButtonFlow theme='info' label="info" />
    <ButtonFlow theme='info' label="info" shadow={true} />
    <h2>Light:</h2>
    <ButtonFlow theme='light' label="light" />
    <ButtonFlow theme='light' label="light" shadow={true} />
    <h2>Dark:</h2>
    <ButtonFlow theme='dark' label="dark" />
    <ButtonFlow theme='dark' label="dark" shadow={true} />
    <h2>Link:</h2>
    <ButtonFlow theme='link' label="link" />
    <ButtonFlow theme='link' label="link" shadow={true} />
  </div>
)
.add('loading', () => 
  <div className="storybook-btn">
    <h2>Primary:</h2>
    <Button status="loading" theme="primary" label="primary" />
    <Button status="loading" theme="primary" label="primary" shadow={true} />
    <h2>Secondary:</h2>
    <Button status="loading" theme="secondary" label="secondary" />
    <Button status="loading" theme="secondary" label="secondary" shadow={true} />
    <h2>Success:</h2>
    <Button status="loading" theme="success" label="success" />
    <Button status="loading" theme="success" label="success" shadow={true} />
    <h2>Warning:</h2>
    <Button status="loading" theme="warning" label="warning" />
    <Button status="loading" theme="warning" label="warning" shadow={true} />
    <h2>Info:</h2>
    <Button status="loading" theme="info" label="info" />
    <Button status="loading" theme="info" label="info" shadow={true} />
    <h2>Light:</h2>
    <Button status="loading" theme="light" label="light" />
    <Button status="loading" theme="light" label="light" shadow={true} />
    <h2>Dark:</h2>
    <Button status="loading" theme="dark" label="dark" />
    <Button status="loading" theme="dark" label="dark" shadow={true} />
    <h2>Link:</h2>
    <Button status="loading" theme="link" label="link" />
    <Button status="loading" theme="link" label="link" shadow={true} />
  </div>
)
.add('success', () => 
<div className="storybook-btn">
<h2>Primary:</h2>
<Button status="success" theme="primary" label="primary" />
<Button status="success" theme="primary" label="primary" shadow={true} />
<h2>Secondary:</h2>
<Button status="success" theme="secondary" label="secondary" />
<Button status="success" theme="secondary" label="secondary" shadow={true} />
<h2>Success:</h2>
<Button status="success" theme="success" label="success" />
<Button status="success" theme="success" label="success" shadow={true} />
<h2>Warning:</h2>
<Button status="success" theme="warning" label="warning" />
<Button status="success" theme="warning" label="warning" shadow={true} />
<h2>Info:</h2>
<Button status="success" theme="info" label="info" />
<Button status="success" theme="info" label="info" shadow={true} />
<h2>Light:</h2>
<Button status="success" theme="light" label="light" />
<Button status="success" theme="light" label="light" shadow={true} />
<h2>Dark:</h2>
<Button status="success" theme="dark" label="dark" />
<Button status="success" theme="dark" label="dark" shadow={true} />
<h2>Link:</h2>
<Button status="success" theme="link" label="link" />
<Button status="success" theme="link" label="link" shadow={true} />
</div>
)
.add('error', () => 
<div className="storybook-btn">
<h2>Primary:</h2>
<Button status="error" theme="primary" label="primary" />
<Button status="error" theme="primary" label="primary" shadow={true} />
<h2>Secondary:</h2>
<Button status="error" theme="secondary" label="secondary" />
<Button status="error" theme="secondary" label="secondary" shadow={true} />
<h2>Success:</h2>
<Button status="error" theme="success" label="success" />
<Button status="error" theme="success" label="success" shadow={true} />
<h2>Warning:</h2>
<Button status="error" theme="warning" label="warning" />
<Button status="error" theme="warning" label="warning" shadow={true} />
<h2>Info:</h2>
<Button status="error" theme="info" label="info" />
<Button status="error" theme="info" label="info" shadow={true} />
<h2>Light:</h2>
<Button status="error" theme="light" label="light" />
<Button status="error" theme="light" label="light" shadow={true} />
<h2>Dark:</h2>
<Button status="error" theme="dark" label="dark" />
<Button status="error" theme="dark" label="dark" shadow={true} />
<h2>Link:</h2>
<Button status="error" theme="link" label="link" />
<Button status="error" theme="link" label="link" shadow={true} />
</div>
)