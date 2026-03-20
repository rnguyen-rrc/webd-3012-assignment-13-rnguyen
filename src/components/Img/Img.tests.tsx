import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Img from './Img';

describe('Img Component', () => {
  test('renders image with alt text', () => {
    render(
      <Img
        src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*"
        alt="Test Image"
      />,
    );

    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
  });

  test('changes background color when disabled', () => {
    render(
      <Img
        src="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*"
        alt="Disabled Image"
        disabled
      />,
    );

    const image = screen.getByAltText('Disabled Image');
    const wrapper = image.parentElement;

    expect(wrapper).toHaveStyle('background-color: #ccc');
  });
});
