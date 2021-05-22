import React from 'react'
import {
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  CustomInput,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from 'reactstrap'

const FeedBack = (props) => (
  <FormFeedback className={props.isValid ? '' : 'd-block'}>
    {props.errorText}
  </FormFeedback>
)

const InputCell = (props) => {
  const isValid = !!props.isValid
  const { isDirty } = props
  const classNames = ['', props.className].join(' ')
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
  )
}

const InputGroupCell = (props) => {
  const isValid = !!props.isValid
  const { isDirty } = props
  const classNames = ['', props.className].join(' ')

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <i className={props.iconClass} />
        </InputGroupText>
      </InputGroupAddon>
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
    </InputGroup>
  )
}

export { InputCell, InputGroupCell }
