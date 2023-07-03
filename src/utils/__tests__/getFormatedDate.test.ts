import getFormattedDate from "../getFormatedDate" // Replace 'your-module' with the actual module path

describe("getFormattedDate", () => {
  test("returns formatted date for valid date string", () => {
    const dateString = "2022-07-01"
    const expectedFormattedDate = "July 1, 2022"

    const formattedDate = getFormattedDate(dateString)

    expect(formattedDate).toBe(expectedFormattedDate)
  })

  test('returns "Invalid Date" for invalid date string', () => {
    const dateString = "2022-13-01" // Invalid month

    expect(() => getFormattedDate(dateString)).toThrow()
  })
})
