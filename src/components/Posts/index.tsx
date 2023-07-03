import React from "react"

import { getSortedPostsData } from "@/utils/posts"

import ListItem from "../ListItem"

function Posts() {
  const posts = getSortedPostsData()
  return (
    <section className="mx-auto mt-6 max-w-3xl">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}

export default Posts
