import Posts from "@/components/Posts"

export const revalidate = 60 // revalidate this page every 60 seconds

export default function Home() {
  return (
    <main className="mx-auto px-6">
      <h1 className="my-12 text-center text-3xl dark:text-white">
        Hello and Welcome 👋&nbsp;{" "}
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Zakaria</span>
        </span>
      </h1>
      <Posts />
    </main>
  )
}
