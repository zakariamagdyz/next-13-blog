import Link from "next/link"
import React from "react"

import { BlogPost } from "@/types"
import getFormatedDate from "@/utils/getFormatedDate"

type Props = {
  post: BlogPost
}

function ListItem({ post: { id, title, date } }: Props) {
  const formatedDate = getFormatedDate(date)
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        href={`/posts/${id}`}
        className="underline hover:text-black/70 dark:hover:text-white"
      >
        {title}
      </Link>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {formatedDate}
      </p>
    </li>
  )
}

export default ListItem
