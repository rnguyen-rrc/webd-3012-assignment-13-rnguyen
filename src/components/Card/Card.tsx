import styled from 'styled-components'
import type { CardProps } from './Card.types'

const StyledCard = styled.div<{
  $backgroundColor?: string
  $textColor?: string
  $disabled?: boolean
}>`
  padding: 35px 60px 35px 60px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled ? '#ccc' : $backgroundColor || '#fafafa'};

  color: ${({ $textColor, $disabled }) =>
    $disabled ? '#666' : $textColor || '#000'};

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};

  transition: all 0.2s ease-in-out;
`

const Title = styled.h3`
  margin: 0 0 10px 0;
`

const Content = styled.p`
  margin: 0;
`

const Card = ({
  title,
  content,
  backgroundColor,
  textColor,
  disabled = false,
}: CardProps) => {
  return (
    <StyledCard
      data-testid="card-wrapper"
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      $disabled={disabled}
    >
      <Title>{title}</Title>
      <Content>{content}</Content>
    </StyledCard>
  )
}

export default Card