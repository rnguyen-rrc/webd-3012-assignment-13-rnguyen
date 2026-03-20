import styled from 'styled-components'
import type { LabelProps } from './Label.types'

const StyledLabel = styled.label<{
  $backgroundColor?: string
  $color?: string
  $fontSize?: string
  $disabled?: boolean
}>`
  padding: 10px 20px;
  border-radius: 6px;
  display: inline-block;

  font-size: ${({ $fontSize }) => $fontSize || '16px'};

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || 'transparent'};

  color: ${({ $color, $disabled }) =>
    $disabled ? '#666' : $color || '#000'};

  transition: all 0.2s ease-in-out;

  @media (max-width: 600px) {
    width: 100%;
  }
`

const Label = ({
  text,
  color,
  backgroundColor,
  fontSize,
  disabled = false,
  htmlFor,
}: LabelProps) => {
  return (
    <StyledLabel
      htmlFor={htmlFor}
      aria-disabled={disabled}
      $backgroundColor={backgroundColor}
      $color={color}
      $fontSize={fontSize}
      $disabled={disabled}
    >
      {text}
    </StyledLabel>
  )
}

export default Label