import { render, screen, within } from "@testing-library/react"

import Navbar from "."

describe("Navbar", () => {
  it("should render author name", () => {
    render(<Navbar />)

    const authorName = screen.getByRole("link", {
      name: /Zakaria Magdy/i,
    })

    expect(authorName).toBeInTheDocument()
  })

  it("should render author social links", () => {
    render(<Navbar />)

    const socialLinksWrapper = screen.getByTestId("social-links")
    const socialLinks = within(socialLinksWrapper).getAllByRole("link")

    expect(socialLinks).toHaveLength(4)
  })
})
