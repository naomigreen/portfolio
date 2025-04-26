import { render } from '@testing-library/react';
import ContentCard from '.';

const props = {
  title: 'Test Title',
  link: 'test.com',
  text: 'test text'
}

describe('Content Card Component', () => {

  it('should render content message', () => {
    const { getByText } = render(<ContentCard {...props} />)
    const title = getByText('Test Title')
    const text = getByText('test text')

    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})