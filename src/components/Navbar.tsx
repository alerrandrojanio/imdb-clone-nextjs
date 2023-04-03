import { NavbarItem } from "./NavbarItem"

export function Navbar() {
  return (
    <div className="flex justify-center p-4 bg-amber-100 dark:bg-gray-600 lg:text-lg">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
