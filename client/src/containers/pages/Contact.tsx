import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import ContactForm from '../../components/Form'
import Loading from '../../components/Loading'
import Alert from '../../components/Alert'
import { usePostForm } from '../../hooks'
import { FormDataProps } from '../../types'

const Contact = () => {
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
        {loading && <Loading />}
      </Alerts>
      <ContactForm errors={errors} register={register} setValue={setValue} onSubmit={handleSubmit(onSubmit)} />
    </Container>
  )
}

export default Contact

const Alerts = styled.div`
  max-width: 95%;
  min-height: 60px;
`

const Container = styled.div`
  width: 500px;
  max-width: 95%;
  margin: 0 auto;
  form{
    width: 100%;
  }
`