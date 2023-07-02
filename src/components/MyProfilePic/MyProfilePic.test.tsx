import { render, screen } from "@testing-library/react"

import MyProfilePic from "."

describe("MyProfilePic", () => {
  it("should render my profile pic", () => {
    render(<MyProfilePic />)

    const myProfilePic = screen.getByAltText(/Zakaria Magdy/i)

    expect(myProfilePic).toBeInTheDocument()
  })
})
