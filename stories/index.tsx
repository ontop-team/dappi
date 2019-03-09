import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Welcome } from "@storybook/react/demo";

import { Button } from "@dappi/components/button";
import { Input, InputWithHelper } from "@dappi/components/input";
import { ButtonWeb3 } from "@dappi/components/buttonWeb3";
import { Label } from "@dappi/components/label";
import { Counter } from "@dappi/components/counter";
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

  .add("Configured", () => (
    <FieldConfigured active activeText>
      Name of smart contract
    </FieldConfigured>
  ));

storiesOf("counter", module)
  .add("Default", () => <Counter>5</Counter>)
  .add("Active", () => <Counter configured>5</Counter>);
