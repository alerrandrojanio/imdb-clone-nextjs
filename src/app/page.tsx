import Image from "next/image"
import Head from "next/head"
import { Inter } from "next/font/google"
import { Header } from "@/components/Header"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>asasa</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="This is the IMDb Clone" />
        <link rel="icon" href="../../public/vercel.svg" />
      </Head>

      <main className="min-h-screen text-gray-700 select-none dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300 ">
        <Header />
      </main>
    </>
  )
}
