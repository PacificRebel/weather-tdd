import React from 'react'
import { render, screen, within, waitForElement } from '@testing-library/react'

import Weather from './Weather'
import Temperature from './Temperature'
import Humidity from './Humidity'
// mock fetch and return the mock response json
import mockResponse from './__mocks__/openweathermap-response.json'

beforeEach(() =>
jest.spyOn(global, 'fetch').mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
}))

console.log(mockResponse)

test("shows weather", async () => {
  render(<Weather />)

  const element = await waitForElement(() => screen.getByText("I AM A TEST RESPONSE"))

  expect(element).toBeInTheDocument()
})

test("shows temperature", async () => {
  render(<Temperature />)

  const element = await waitForElement(() => screen.getByText(2021))

  expect(element).toBeInTheDocument()
})

screen.debug()

test("shows humidity", async () => {
  render(<Humidity />)

  const element = await waitForElement(() => screen.getByText("HUMIDITY"))

  expect(element).toBeInTheDocument()
})
