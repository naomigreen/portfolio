import styled from 'styled-components';
import { socialData } from '../../data/data';
import { tickIcon } from '../../assets/images';
import Image from '../image/Image';
import InputField from '../inputField/InputField';

type FormProps = {
  register: any
  onSubmit: () => void
  sending: boolean
  errors: any
}

const Form = ({ register, onSubmit, sending, errors }: FormProps) => {
  return (
    <Layout>
      <Img src={tickIcon} width='40px' opacity={sending ? '0.6' : '0'} />
      <form onSubmit={onSubmit}>
        <InputField placeholder='Name' type='text' error={errors.name} ref={{ ...register('name', { required: true }) }} />
        <InputField placeholder='Email' type='email' error={errors.email} errorMessage='This field is required and must be an email.' ref={{ ...register("email", { pattern: /[^@\s]+@[^@\s]+/i, required: true }) }} />
        <InputField placeholder='Message' type='text' isTextArea error={errors.message} ref={{ ...register("message", { required: true }) }} />
        <ButtonContainer>
          <Button type='submit'>
            Send message
          </Button>
          <Links>
            {socialData.map((data) => (
              <Image key={data.link} link={data.link} image={data.image} width='23px' maxWidth='calc(33% - 10px)' />
            ))}
          </Links>
        </ButtonContainer>
      </form>
    </Layout>
  )
}
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  transition: all 0.6s ease;
  padding: 10px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  color: ${props => props.theme.text};
  font-weight: 900;
  background: ${props => props.theme.input};
  font-size: 14px;
  :hover {
    background: ${props => props.theme.buttons};
    color: ${props => props.theme.hoverText};
  }
`;

const Img = styled.img<{ opacity: string }>`
	transition: all 0.9s ease;
	width: 35px;
	max-width: 33%;
	opacity: ${(props) => props.opacity};
	padding: 0 0 10px;
	display: block;
	margin: 0 auto;
`;

const Links = styled.div`
  display: inline-block;
  img{
    display: inline;
    margin: 0px 5px;
    background: ${props => props.theme.buttons};
    border-radius: 100%;
    padding: 6px;
  }
`;

const Layout = styled.div`
  width: 500px;
  max-width: 95%;
  margin: 0 auto;
`;
export default Form