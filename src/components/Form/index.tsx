import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { usePostForm } from '../../hooks';
import Alert from '../Alert';
import { emailRegex, nameRegex } from '../../utils';
import { socialData } from '../../data';
import Input from '../Input';

export type FormDataProps = {
  name: string,
  email: string,
  message: string
};

const ContactForm = () => {
  const [displayAlert, setDisplayAlert] = useState(false)
  const { postState, postForm } = usePostForm()
  const { error, success, loading } = postState

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<FormDataProps>({
    mode: 'onBlur'
  });

  const onSubmit = async (data: FormDataProps) => {
    postForm(data)
  };

  useEffect(() => {
    if (success) {
      reset()
      setDisplayAlert(true)
    }
    else if (error) {
      setDisplayAlert(true)
    }
    setTimeout(() => {
      setDisplayAlert(false)
    }, 5000)

  }, [success, error]);

  return (
    <Container>
      <Alerts>
        <Alert success={success} display={displayAlert.toString()} />
        {loading && <Loading src='/icons/loading.svg' />}
      </Alerts>
      <form>
        <Input name='Name' error={errors.name?.message} setValue={setValue} pattern={nameRegex} register={register} />
        <Input name='Email' error={errors.email?.message} setValue={setValue} pattern={emailRegex} register={register} />
        <Input name='Message' error={errors.message?.message} isTextArea register={register} />
        <ActionContainer>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>Send message</Button>
          <Links>
            {socialData.map(({ image, link }) => (
              <a key={link} href={link}>
                <img width={40} height={40} alt='image' src={image} />
              </a>
            ))}
          </Links>
        </ActionContainer>
      </form>
    </Container>
  )
}

const Container = styled.div`
  width: 500px;
  max-width: 95%;
  margin: 0 auto;
  form{
    width: 100%;
  }
`

const Alerts = styled.div`
  max-width: 95%;
  min-height: 60px;
`

const Loading = styled.img`
  width: 80px;
  left: 0; 
  right: 0; 
  margin-inline: auto;
  position: absolute;
`

const ActionContainer = styled.div`
  width: 100%;
  display: flex;
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
    &:hover{
      background: ${props => props.theme.hover};
    }
`
export default ContactForm