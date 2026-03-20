import styled from 'styled-components'
import type { DropdownProps } from './Dropdown.types'

const StyledSelect = styled.select<{
  $backgroundColor?: string
  $disabled?: boolean
}>`
  padding: 10px 20px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || '#ffffff'};

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 1 : 0.9)};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

const Dropdown = ({
  options,
  value,
  backgroundColor,
  disabled = false,
  onChange,
}: DropdownProps) => {
  return (
    <StyledSelect
      value={value}
      disabled={disabled}
      aria-disabled={disabled}
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      onChange={(e) => onChange?.(e.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Dropdown