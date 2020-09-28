import React from "react"
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from '..'

afterEach(cleanup)

describe("Nav component", function() {
    test('renders', () => {
        render(<Nav />)
    })
    test("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<Nav />)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe("emoji is visible", function() {
    test('inserts emojie into the h2', () => {
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})


