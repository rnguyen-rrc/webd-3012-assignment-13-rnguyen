import styled from 'styled-components';
import type { TextProps } from './Text.types';

const StyledText = styled.p<{
  $backgroundColor?: string;
  $color?: string;
  $fontSize?: string;
  $disabled?: boolean;
}>`
  margin: 0;

  font-size: ${({ $fontSize }) => $fontSize || '16px'};

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || 'transparent'};

  color: ${({ $color, $disabled }) => ($disabled ? '#666' : $color || '#000')};

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Text = ({
  text,
  color,
  backgroundColor,
  fontSize,
  disabled = false,
}: TextProps) => {
  return (
    <StyledText
      aria-disabled={disabled}
      $backgroundColor={backgroundColor}
      $color={color}
      $fontSize={fontSize}
      $disabled={disabled}
    >
      {text}
    </StyledText>
  );
};

export default Text;
