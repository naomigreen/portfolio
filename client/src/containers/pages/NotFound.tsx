import { Link } from 'react-router-dom';
import Content from '../../components/content/Content';
import Image from '../../components/image/Image';

import styled from 'styled-components';
import genie from '../../assets/images/genie.gif';

const NotFound = () => (
  <Content>
    <Image image={genie} width='800px' maxWidth='100%' />
    <ErrorText>Oh no, page not found! Please return to the <Link to='/'>home page</Link></ErrorText>
  </Content>
)

const ErrorText = styled.h2`
text-align: center;
`

export default NotFound