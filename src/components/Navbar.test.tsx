import { render, screen } from "@testing-library/react"

import Navbar from "./Navbar"

describe("Home", () => {
  it("renders a heading", () => {
    render(<Navbar />)

    const authorName = screen.getByRole("link", {
      name: /Zakaria Magdy/i,
    })

    expect(authorName).toBeInTheDocument()
  })
})
