import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'

import Weather from './Weather'
import Temperature from './Temperature'
// mock fetch and return the mock response json
import mockResponse from './__mocks__/openweathermap-response.json'

beforeEach(() =>
jest.spyOn(global, 'fetch').mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
}))

test("shows weather", async () => {
  render(<Weather />)

  const element = await waitForElement(() => screen.getByText("I AM A TEST RESPONSE"))

  expect(element).toBeInTheDocument()
})

test("shows temperature", async () => {
  render(<Temperature />)

  const element = await waitForElement(() => screen.getByText("I AM A TEST TEMPERATURE"))

  expect(element).toBeInTheDocument()
})
