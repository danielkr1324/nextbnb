import Link from "next/link"
import { GiHouse } from "react-icons/gi";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <GiHouse className="w-6 h-6" />
      </Link>
    </Button>
  )
}

export default Logo