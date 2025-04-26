import { render } from '@testing-library/react';
import { alertMessages } from '../../data';
import Alert from '.';

const successProps = {
  success: true,
  display: 'true'
}

const errorProps = {
  success: false,
  display: 'true'
}

describe('Alert Component', () => {

  it('should render success message', () => {
    const { getByText } = render(<Alert {...successProps} />)
    const message = getByText(alertMessages.success)

    expect(message).toBeInTheDocument()
  })

  it('should render error message', () => {
    const { getByText } = render(<Alert {...errorProps} />)
    const message = getByText(alertMessages.error)

    expect(message).toBeInTheDocument()
  })
})