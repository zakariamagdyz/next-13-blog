import Link from "next/link"
import { notFound } from "next/navigation"
import React from "react"

import getFormatedDate from "@/utils/getFormatedDate"
import { getPostData, getSortedPostsData } from "@/utils/posts"

export function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map(({ id }) => ({ postId: id }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const { postId } = params

  const posts = getSortedPostsData()
  const post = posts.find((posts) => posts.id === postId)

  if (!post) return { title: "Post Not Found" }

  return { title: post.title }
}

export default function Post({ params }: { params: { postId: string } }) {
  const { postId } = params
  const posts = getSortedPostsData()
  // If the post doesn't exist, return a 404 page
  if (!posts.find((posts) => posts.id === postId)) return notFound()

  const { title, date, contentHtml } = getPostData(postId)
  const pubDate = getFormatedDate(date)
  return (
    <section className="prose prose-xl prose-slate mx-auto px-6 dark:prose-invert">
      <h1 className="mb-0 mt-4 text-3xl">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/"> &lt;- Back to home</Link>
        </p>
      </article>
    </section>
  )
}
