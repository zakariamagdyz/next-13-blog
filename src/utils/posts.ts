import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { remark } from "remark"
import html from "remark-html"

import { BlogPost } from "@/types"

const postsDirectory = path.join(process.cwd(), "src/blogposts")

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get id
    const id = fileName.replace(/\.mdx?$/, "")

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents)

    // Combine the data with the id

    const blogPost: BlogPost = {
      id,
      title: data.title,
      date: data.date,
    }

    return blogPost
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)

  const processedContent = remark().use(html).processSync(content)
  const contentHtml = processedContent.toString()

  const blogPostWithHTML: BlogPost & { contentHtml: string } = {
    id,
    title: data.title,
    date: data.date,
    contentHtml,
  }

  return blogPostWithHTML
}
