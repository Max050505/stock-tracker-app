import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import DropDownMenu from "./DropDownMenu"
import { searchStocks } from "@/lib/actions/finnhub.action"

const Header = async ({user}: {user: any}) => {
  const initialStock = await searchStocks()
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href='/'>
        <Image src='/assets/icons/logo.svg' alt="Signalist logo" width={140} height={32} className="h-8 w-auto cursor-pointer"/>
        </Link>
        <nav className="hidden sm:block">
        <NavItems initialStocks={initialStock}/>
        </nav>
        <DropDownMenu user={user} initialStocks={initialStock}/>
      </div>
    </header>
  )
}

export default Header