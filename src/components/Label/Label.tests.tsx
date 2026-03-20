import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Label from './Label'

describe('Label Component', () => {
  test('renders label with text', () => {
    render(<Label text="Test Label" />)
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
  })

  test('changes background color when disabled', () => {
    render(<Label text="Disabled Label" disabled />)
    const label = screen.getByText('Disabled Label')
    expect(label).toHaveStyle('background-color: #ccc')
  })
})