import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import HeroImage from './HeroImage'

describe('HeroImage Component', () => {
  test('renders hero title', () => {
    render(
      <HeroImage
        imageUrl="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*"
        title="Hero Title"
        subtitle="Test subtitle"
      />
    )

    const title = screen.getByText('Hero Title')
    expect(title).toBeInTheDocument()
  })

  test('changes background color when disabled', () => {
    render(
      <HeroImage
        imageUrl="https://hips.hearstapps.com/wdy.h-cdn.co/assets/17/39/1600x1066/gallery-1506709524-cola-0247.jpg?resize=1800:*"
        title="Disabled Hero"
        subtitle="Test subtitle"
        disabled
      />
    )

    const hero = screen.getByTestId('hero-wrapper')
    expect(hero).toHaveStyle('opacity: 0.7')
  })
})