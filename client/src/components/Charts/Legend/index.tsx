import styled from 'styled-components';
import { MAX_MOBILE } from '../../../utils';

type LegendProps = {
  labels: string[]
  colors: any
}
const Legend = ({ labels, colors }: LegendProps) => {
  return (
    <Container>
      {labels.map((label) => (
        <Row key={label}>
          <Marker style={{ backgroundColor: colors(label) }} />
          <Label>{label}</Label>
        </Row>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const Row = styled.div`
  display: flex;
  margin: 4px 16px;
  @media (max-width: ${MAX_MOBILE}){
    font-size: 10px;
    margin: 4px 2px;
  }
`
const Marker = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 30px;

@media (max-width: ${MAX_MOBILE}){
  height: 10px;
  width: 10px;
  margin-top: 0;
}
`

const Label = styled.span`
  margin: 0 4px;
`

export default Legend
