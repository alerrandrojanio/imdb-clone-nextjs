import Link from "next/link"

interface MenuItemProps {
  title: string
  address: string
  Icon: Function
  description: string
}

export function MenuItem({ title, address, Icon, description }: MenuItemProps) {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600 ">
        <Icon className="text-2xl sm:hidden mx-3" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  )
}
