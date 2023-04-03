import { Metadata } from "next"
import Head from "next/head"
import { Inter } from "next/font/google"
import { requests } from "../util/requests"
import { Movie } from "../../typings"
import { Results } from "@/components/Results"

const inter = Inter({ subsets: ["latin"] })

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const metadata: Metadata = {
  title: "IMDb",
  description: "IMDb Clone",
}

interface HomeProps {
  searchParams: any
}

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "fetchTrending"

  console.log(typeof searchParams)

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch data") // this will be caught by the error page and passed to the page as props
  }

  const data = await res.json()

  const results = data.results

  return (
    <div>
      <Results results={results} />
    </div>
  )
}
