import styled from 'styled-components'
import type { ImgProps } from './Img.types'

const StyledWrapper = styled.div<{
  $backgroundColor?: string
  $disabled?: boolean
}>`
  display: inline-block;
  padding: 4px;
  border-radius: 6px;

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || 'transparent'};

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    width: 100%;
  }
`

const StyledImg = styled.img<{
  $width?: string
  $height?: string
}>`
  display: block;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || 'auto'};
  border-radius: 6px;
`

const Img = ({
  src,
  alt,
  width,
  height,
  backgroundColor,
  disabled = false,
}: ImgProps) => {
  return (
    <StyledWrapper
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      <StyledImg
        src={src}
        alt={alt}
        $width={width}
        $height={height}
      />
    </StyledWrapper>
  )
}

export default Img