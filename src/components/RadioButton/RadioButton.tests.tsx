import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import RadioButton from './RadioButton'

describe('RadioButton Component', () => {
  test('renders radio button with label', () => {
    render(
      <RadioButton
        label="Option A"
        name="group"
        value="A"
      />
    )
    const radio = screen.getByLabelText('Option A')
    expect(radio).toBeInTheDocument()
  })

  test('changes background color when disabled', () => {
    render(
      <RadioButton
        label="Disabled Option"
        name="group"
        value="B"
        disabled
      />
    )

    const radio = screen.getByLabelText('Disabled Option')
    const wrapper = radio.closest('label')
    expect(wrapper).toHaveStyle('background-color: #ccc')
  })
})