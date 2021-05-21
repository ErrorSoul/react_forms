import React from "react";
import {
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  CustomInput,
} from "reactstrap";

const FeedBack = (props) => (
  <FormFeedback className={props.isValid ? "" : "d-block"}>
    {props.errorText}
  </FormFeedback>
);

const InputCell = (props) => {
  const isValid = !!props.isValid;
  const { isDirty } = props;
  const classNames = [
    "border-top-0 border-right-0 border-left-0 my-input-border",
    props.className,
  ].join(" ");
  return (
    <FormGroup className={props.formGroupClassName}>
      <FeedBack isValid={isValid} errorText={props.errors} />
      <Input
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={classNames}
        value={props.value}
        valid={isValid}
        invalid={!isValid && isDirty}
        type={props.type}
        maxLength={props.maxlength}
        minLength={props.minlength}
        readOnly={props.readonly}
        min={props.min}
        max={props.max}
      />
    </FormGroup>
  );
};

export { InputCell };
