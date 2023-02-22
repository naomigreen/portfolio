import styled from 'styled-components';

type VideoProps = {
  src: string,
}

const Video = ({ src }: VideoProps) => (
  <VideoContainer
    controls
    loop
    playsInline
    preload="auto"
    src={src} />
)

const VideoContainer = styled.video`
  display: block;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
`

export default Video;