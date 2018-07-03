import React from 'react'
import renderer from 'react-test-renderer'
import TodoTextInput from '../TodoTextInput'

/*test('snapshot TodoTextInput', () => {
    const component = renderer.create(<TodoTextInput editing onSave={() => { }} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})*/
//add editing prop will do an error since snapshot is built without it
test('snapshot TodoTextInput', () => {
    const component = renderer.create(<TodoTextInput editing onSave={() => { }} />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})