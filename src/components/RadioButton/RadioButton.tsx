import styled from 'styled-components'
import type { RadioButtonProps } from './RadioButton.types'

const StyledWrapper = styled.label<{
  $backgroundColor?: string
  $disabled?: boolean
}>`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 6px;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || '#ffffff'};

  transition: all 0.2s ease-in-out;

  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};

  @media (max-width: 600px) {
    width: 100%;
  }
`

const StyledInput = styled.input`
  cursor: inherit;
`

const RadioButton = ({
  label,
  name,
  value,
  checked = false,
  disabled = false,
  backgroundColor,
  onChange,
}: RadioButtonProps) => {
  return (
    <StyledWrapper
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      aria-disabled={disabled}
    >
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
      />
      {label}
    </StyledWrapper>
  )
}

export default RadioButton