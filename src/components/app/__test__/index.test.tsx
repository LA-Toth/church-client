import React from 'react'
import { mount } from 'enzyme'
import App from '../index'

describe('App', () => {
  it('renders learn react link', () => {
    const tree = mount(<App />)
    expect(tree.findWhere(n => n.text() === 'Learn React').filter('a')).toHaveLength(1)
  })
})
