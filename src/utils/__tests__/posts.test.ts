import mock from "mock-fs"
import path from "path"

import { getPostData, getSortedPostsData } from "../posts"

mock({
  [`${process.cwd()}/src/blogposts`]: {
    "ssg-ssr.md": mock.load(
      path.resolve(process.cwd(), "src/blogposts/ssg-ssr.md")
    ),
    "pre-rendering.md": mock.load(
      path.resolve((process.cwd(), "src/blogposts/pre-rendering.md"))
    ),
  },
})

describe("posts", () => {
  afterEach(() => {
    mock.restore()
  })
  describe("getSortedPostsData", () => {
    it("should get sorted posts latest one first", () => {
      const sortedPosts = getSortedPostsData()

      expect(sortedPosts).toEqual([
        {
          date: "2023-03-17",
          id: "ssg-ssr",
          title: "When to Use Static Generation vs. Server-side Rendering",
        },
        {
          date: "2023-03-14",
          id: "pre-rendering",
          title: "Two Forms of Pre-rendering",
        },
      ])
    })
  })
  describe("getPostData", () => {
    it("should get post data", () => {
      const postData = getPostData("ssg-ssr")

      console.log(postData)

      expect(postData).toEqual({
        id: "ssg-ssr",
        title: "When to Use Static Generation vs. Server-side Rendering",
        date: "2023-03-17",
        contentHtml: expect.stringContaining("<ul>"),
      })
    })
  })
})
