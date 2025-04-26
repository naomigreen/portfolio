import styled from 'styled-components';
import { emailRegex, nameRegex } from '../../utils';
import { socialData } from '../../data';
import Input from '../Input';

type Props = {
  onSubmit: () => void
  errors: any
  setValue: any
  register: any
}
const ContactForm = ({ onSubmit, errors, setValue, register }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <Input name='Name' error={errors.name?.message} setValue={setValue} pattern={nameRegex} register={register} />
      <Input name='Email' error={errors.email?.message} setValue={setValue} pattern={emailRegex} register={register} />
      <Input name='Message' error={errors.message?.message} isTextArea register={register} />
      <ActionContainer>
        <Button type='submit'>Send message</Button>
        <Links>
          {socialData.map(({ image, link }) => (
            <a key={link} href={link}>
              <img width={40} height={40} alt='social media icon' src={image} />
            </a>
          ))}
        </Links>
      </ActionContainer>
    </form>
  )
}

const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
`

const Links = styled.div`
  display: inline-block;

  img {
    margin: 0px 5px;
    background: ${props => props.theme.buttons};
    border: 1px solid ${props => props.theme.border};
    border-radius: 100%;
    display: inline;
    cursor: pointer;
    width: 40px;
    padding: 4px;
    &:hover{
      background: ${props => props.theme.hover};
    }
  }
`;

const Button = styled.button`
    padding: 10px 10px;
    display: block;
    cursor: pointer;
    color: ${props => props.theme.text};
    background: ${props => props.theme.buttons};
    border: 1px solid ${props => props.theme.border};
    border-radius: 4px;
    color: #000;
    font-weight: 600;
    &:hover{
      background: ${props => props.theme.hover};
    }
`
export default ContactForm