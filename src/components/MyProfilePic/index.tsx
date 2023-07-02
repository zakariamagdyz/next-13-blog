import Image from "next/image"
import React from "react"

function MyProfilePic() {
  return (
    <section className="mx-auto w-full">
      <Image
        priority
        src="/images/zakaria.jpeg"
        alt="Zakaria Magdy"
        width={200}
        height={200}
        className="mx-auto mt-8 rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500"
      />
    </section>
  )
}

export default MyProfilePic
