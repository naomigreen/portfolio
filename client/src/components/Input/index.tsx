import styled from 'styled-components';

type InputProps = {
  name: string
  setValue?: (name: string, event: any) => void
  pattern?: RegExp
  register: any
  isTextArea?: boolean
  error?: string | boolean
}

const Input = ({ name, pattern, isTextArea, setValue, error, register }: InputProps) => {

  // Overriding default behaviour for inputs to handle browser autofill.
  return (
    <>
      {!isTextArea && <InputField {
        ...register(name.toLocaleLowerCase(),
          { required: 'is required', validate: { pattern: (value: string) => pattern?.test(value) || ' looks incorrect' } })}
        placeholder={name}
        onChange={(e) => {
          setValue && setValue(name.toLocaleLowerCase(), e.target.value);
        }} />}
      {isTextArea && <TextArea  {...register(name.toLocaleLowerCase(), { required: 'is required', })} placeholder={name} />}
      <Error error={error ? 1 : 0}> {name} {error}</Error>
    </>
  )
}

type styleProps = {
  error: number
}

const InputField = styled.input`
  width: calc(100% - 22px);
  padding: 7px 10px;
  margin: 5px 0;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  outline: none;
  color: ${props => props.theme.text};
  background: ${props => props.theme.input};
  font-size: 16px;
  &:-webkit-autofill:focus,
  &:-webkit-autofill:hover,
  &:-webkit-autofill {
    -webkit-text-fill-color: ${props => props.theme.text};
    -webkit-box-shadow: 0 0 0 50px ${props => props.theme.input} inset;
  }

  &::placeholder {
    color: ${props => props.theme.placeholder};
  }

`

const Error = styled.span<styleProps>`
  color: ${props => props.theme.error};
  opacity: ${props => props.error};
  font-size: 14px;
`

const TextArea = styled.textarea`
  width: calc(100% - 22px);
  padding: 7px 10px;
  margin: 5px 0;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  outline: none;
  color: ${props => props.theme.text};
  background: ${props => props.theme.input};
  font-size: 16px;
  min-height: 200px;
  font-family: Helvetica, monospace;
  &::placeholder {
    color: ${props => props.theme.placeholder};
  }
`
export default Input