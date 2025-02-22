import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { FormDataProps } from './components/Form'

export const usePostForm = () => {
  const [postState, setPostState] = useState({
    success: false,
    error: false,
    loading: false
  })

  const PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY as string;
  const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID as string;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID as string;

  const postForm = async ({ name, email, message }: FormDataProps) => {
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };

    setPostState({ loading: true, success: false, error: false })

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY }).then(
      (response) => {
        setPostState({ ...postState, loading: false, success: true })
        console.log('SUCCESS!', response.status, response.text);
      },
      (err) => {
        console.log('error ');

        setPostState({ ...postState, loading: false, error: true })
        console.log('FAILED...', err);
      },
    );
  }

  return { postState, postForm }
}