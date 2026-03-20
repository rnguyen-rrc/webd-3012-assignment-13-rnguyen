import styled from 'styled-components';
import type { HeroImageProps } from './HeroImage.types';

const StyledHero = styled.div<{
  $imageUrl: string;
  $disabled?: boolean;
  $height?: string;
}>`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height || '400px'};

  background-image: url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;

  border-radius: 12px;
  overflow: hidden;

  opacity: ${({ $disabled }) => ($disabled ? 0.7 : 1)};
`;

const Overlay = styled.div<{
  $backgroundColor?: string;
  $disabled?: boolean;
}>`
  position: absolute;
  inset: 0;

  background-color: ${({ $backgroundColor, $disabled }) =>
    $disabled
      ? 'rgba(200, 200, 200, 0.6)'
      : $backgroundColor || 'rgba(0, 0, 0, 0.4)'};
`;

const Content = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 18px;
`;

const HeroImage = ({
  imageUrl,
  title,
  subtitle,
  backgroundColor,
  height,
  disabled = false,
}: HeroImageProps) => {
  return (
    <StyledHero
      data-testid="hero-wrapper"
      $imageUrl={imageUrl}
      $height={height}
      $disabled={disabled}
    >
      <Overlay $backgroundColor={backgroundColor} $disabled={disabled} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </StyledHero>
  );
};

export default HeroImage;
