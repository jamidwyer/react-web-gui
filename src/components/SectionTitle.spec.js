import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import SectionTitle from './SectionTitle'
import ItemTextInput from '../components/ItemTextInput'

const setup = () => {
  const props = {
    addItem: jest.fn()
  }

  const renderer = createRenderer();
  renderer.render(<SectionTitle {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('SectionTitle', () => {
    it('should render correctly', () => {
      const { output } = setup()
      expect(output.type).toBe('header')
      expect(output.props.className).toBe('header')

      const [ h1, input ] = output.props.children
      expect(h1.type).toBe('h1')
      expect(h1.props.children).toBe('items')
      expect(input.type).toBe(ItemTextInput)
      expect(input.props.newItem).toBe(true)
      expect(input.props.placeholder).toBe('What needs to be done?')
    })

    it('should call addItem if length of text is greater than 0', () => {
      const { output, props } = setup()
      const input = output.props.children[1]
      input.props.onSave('')
      expect(props.addItem).not.toBeCalled()
      input.props.onSave('Use Redux')
      expect(props.addItem).toBeCalled()
    })
  })
})
