import { render, fireEvent } from '@testing-library/react';
import ContactForm from '.';

describe('Form Component', () => {

  const props = {
    errors: {},
    register: jest.fn(),
    setValue: jest.fn(),
    onSubmit: jest.fn()
  }

  const errorProps = {
    errors: {
      name: { type: 'required', message: 'is required' },
      email: { type: 'required', message: 'is required' },
      message: { type: 'required', message: 'is required' },
    },
    register: jest.fn(),
    setValue: jest.fn(),
    onSubmit: jest.fn()
  }

  it('should render empty input fields', () => {
    const { getByPlaceholderText } = render(<ContactForm {...props} />)

    const name = getByPlaceholderText('Name');
    const email = getByPlaceholderText('Email')
    const message = getByPlaceholderText('Message')

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(message).toBeInTheDocument()
  })

  it('should update input field and call submit function', () => {
    const { getByPlaceholderText, getByText } = render(<ContactForm {...props} />)

    const name = getByPlaceholderText('Name');
    const email = getByPlaceholderText('Email')
    const message = getByPlaceholderText('Message')
    const submitButton = getByText('Send message')

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    fireEvent.change(name, { target: { value: 'Bar Foo' } });
    fireEvent.change(email, { target: { value: 'test@gmail.com' } });
    fireEvent.change(message, { target: { value: 'hi fluffy muffin' } });
    fireEvent.submit(submitButton);

    expect(props.onSubmit).toHaveBeenCalled()
  })

  it('should display error and not call submit function', () => {
    const { getByText, } = render(<ContactForm {...errorProps} />)

    const nameErrorMessage = getByText('Name is required')
    const emailErrorMessage = getByText('Email is required')
    const messageErrorMessage = getByText('Message is required')
    const submitButton = getByText('Send message')

    expect(submitButton).toBeInTheDocument()

    fireEvent.submit(submitButton);

    expect(nameErrorMessage).toBeInTheDocument()
    expect(emailErrorMessage).toBeInTheDocument()
    expect(messageErrorMessage).toBeInTheDocument()
    expect(props.onSubmit).not.toHaveBeenCalled()
  })
})

