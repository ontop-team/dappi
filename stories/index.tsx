import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import { Button } from "@dappi/components/button";
import { Input, InputWithHelper } from "@dappi/components/input";
import { ButtonWeb3, ButtonWeb3WithIcon } from "@dappi/components/buttonWeb3";
import { Label } from "@dappi/components/label";
import { Counter } from "@dappi/components/counter";
import { Modal } from "@dappi/components/modal";
import { WidgetContainer } from "@dappi/components/widgetContainer";
import { Icon } from "@dappi/components/icon";
import { Alert } from "@dappi/components/alert";
import {
  Field,
  FieldConfigurable,
  FieldConfigured
} from "@dappi/components/field";

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("ButtonWeb3", module)
  .add("primary", () => (
    <ButtonWeb3 primary onClick={action("clicked")}>
      Send
    </ButtonWeb3>
  ))
  .add("disabled", () => (
    <ButtonWeb3 disabled onClick={action("clicked")}>
      Unlock Metamask
    </ButtonWeb3>
  ))
  .add("notdetected", () => (
    <ButtonWeb3 notdetected onClick={action("clicked")}>
      Create a wallet
    </ButtonWeb3>
  ))
  .add("loading", () => (
    <ButtonWeb3 loading onClick={action("clicked")}>
      Processing
    </ButtonWeb3>
  ))
  .add("confirming", () => (
    <ButtonWeb3 confirming onClick={action("clicked")}>
      Confirm in Metamask
    </ButtonWeb3>
  ))
  .add("onchain", () => (
    <ButtonWeb3 onchain onClick={action("clicked")}>
      Confirming transaction
    </ButtonWeb3>
  ))
  .add("slow", () => (
    <ButtonWeb3 slow onClick={action("clicked")}>
      It takes too long
    </ButtonWeb3>
  ))
  .add("aborted", () => (
    <ButtonWeb3 aborted onClick={action("clicked")}>
      Transaction aborted
    </ButtonWeb3>
  ))
  .add("confirmed", () => (
    <ButtonWeb3 confirmed onClick={action("clicked")}>
      Success!
    </ButtonWeb3>
  ));



storiesOf("ButtonWeb3WithIcon", module)
  .add("primary", () => (
    <ButtonWeb3WithIcon primary onClick={action("clicked")}>
      Send<Icon send></Icon>
    </ButtonWeb3WithIcon>
  ))
  .add("disabled", () => (
    <ButtonWeb3WithIcon disabled onClick={action("clicked")}>
      Unlock Metamask<Icon alert></Icon>
    </ButtonWeb3WithIcon>
  ))
  .add("notdetected", () => (
    <ButtonWeb3WithIcon notdetected onClick={action("clicked")}>
      Create a wallet<Icon alert></Icon>
    </ButtonWeb3WithIcon>
  ))
  .add("loading", () => (
    <ButtonWeb3WithIcon loading onClick={action("clicked")}>
      Processing<Icon loading></Icon>
    </ButtonWeb3WithIcon>
  ))
  .add("confirming", () => (
    <ButtonWeb3WithIcon confirming onClick={action("clicked")}>
      Confirm in Metamask
    </ButtonWeb3WithIcon>
  ))
  .add("onchain", () => (
    <ButtonWeb3WithIcon onchain onClick={action("clicked")}>
      Confirming transaction<Icon loading></Icon>
    </ButtonWeb3WithIcon>
  ))
  .add("slow", () => (
    <ButtonWeb3WithIcon slow onClick={action("clicked")}>
      It takes too long<Icon alert></Icon>
    </ButtonWeb3WithIcon>
  ))
  .add("aborted", () => (
    <ButtonWeb3WithIcon aborted onClick={action("clicked")}>
      Transaction aborted<Icon importantAlert></Icon>
    </ButtonWeb3WithIcon>
  ))
  .add("confirmed", () => (
    <ButtonWeb3 confirmed onClick={action("clicked")}>
      Success!<Icon success></Icon>
    </ButtonWeb3>
  ));

storiesOf("Label", module).add("Default", () => <Label>Address</Label>);

storiesOf("Input", module)
  .add("Default", () => <Input />)
  .add("Warning", () => <Input warning />)
  .add("Error", () => <Input error />);

storiesOf("InputWithHelper", module).add("Default", () => (
  <InputWithHelper>Paste</InputWithHelper>
));

storiesOf("Field", module).add("Default", () => (
  <Field>Name of smart contract</Field>
));

storiesOf("Field", module).add("Active", () => (
  <Field active activeText>
    Name of smart contract
  </Field>
));

storiesOf("FieldConfigurable", module)
  .add("Disabled", () => (
    <FieldConfigurable>Name of smart contract</FieldConfigurable>
  ))

  .add("Active", () => (
    <FieldConfigurable active activeText>
      Name of smart contract
    </FieldConfigurable>
  ))

  .add("Loading", () => (
    <FieldConfigurable loading>
      Name of smart contract
    </FieldConfigurable>
  ))


  .add("Configured", () => (
    <FieldConfigured active activeText>
      Name of smart contract
    </FieldConfigured>
  ));

storiesOf("counter", module)
  .add("Default", () => <Counter>5</Counter>)
  .add("Active", () => <Counter configured>5</Counter>);


storiesOf("icon", module)
  .add("Alert", () => <Icon alert></Icon>)
  .add("Important Alert", () => <Icon importantAlert></Icon>)
  .add("Loading", () => <Icon loading></Icon>)
  .add("Success", () => <Icon success></Icon>)
  .add("Send", () => <Icon send></Icon>);


storiesOf("widgetContainer", module)
  .add("loading", () => <WidgetContainer loading></WidgetContainer>)
  .add("default", () => <WidgetContainer></WidgetContainer>)
  .add("error", () => <WidgetContainer error></WidgetContainer>)
  .add("warning", () => <WidgetContainer warning></WidgetContainer>);



storiesOf("modal", module)
  .add("Default", () => (
    <Modal secondaryLink={'Do not sign'} headline={'Do you want to authentice the widget?'} buttonText={'Authenticate it'}>It will be easy for your user to see that this widget comes from you, so they stay safe from scams.
    </Modal>))
  .add("Appear", () => (
    <Modal appear secondaryLink={'Do not sign'} headline={'Do you want to authentice the widget?'} buttonText={'Authenticate it'}>It will be easy for your user to see that this widget comes from you, so they stay safe from scams.
    </Modal>));



storiesOf("Alert", module)
  .add("primary", () => (
    <Alert primary onClick={action("clicked")}>
      Send<Icon send></Icon>
    </Alert>
  ))
  .add("disabled", () => (
    <Alert disabled onClick={action("clicked")}>
      Unlock Metamask<Icon alert></Icon>
    </Alert>
  ));