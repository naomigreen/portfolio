import { render } from '@testing-library/react';
import Input from '.';

const inputProps = {
  name: 'foo',
  register: jest.fn(),
  isTextArea: false
}

const textAreaProps = {
  name: 'bar',
  register: jest.fn(),
  isTextArea: true,
  error: 'is required'
}

describe('Alert Component', () => {

  it('should render input field without errors', () => {
    const { getByPlaceholderText, queryByText } = render(<Input {...inputProps} />)
    const input = getByPlaceholderText('foo')
    const errorMessage = queryByText('foo is required')

    expect(input).toBeInTheDocument()
    expect(errorMessage).not.toBeInTheDocument()

  })

  it('should render error message', () => {
    const { getByPlaceholderText, getByText } = render(<Input {...textAreaProps} />)
    const textArea = getByPlaceholderText('bar')
    const errorMessage = getByText('bar is required')

    expect(textArea).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
  })

})