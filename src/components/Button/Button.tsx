import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

const StyledButton = styled.button<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || '#007bff'};
  color: white;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? 1 : 0.85)};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Button = ({
  label,
  backgroundColor,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      $backgroundColor={backgroundColor}
      $disabled={disabled}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
