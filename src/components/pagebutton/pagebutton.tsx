"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Rabbit } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function PageButton() {
  const router = useRouter()
  const [position, setPosition] = React.useState("bottom")

  const handleNavigation = (value: string) => {
    setPosition(value)
    switch (value) {
      case "leetcode":
        router.push("/leetcode")
        break
      case "codeforces":
        router.push("/codeforces")
        break
      case "codechef":
        router.push("/codechef")
        break
      default:
        break
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Rabbit className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Platform</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={handleNavigation}>
          <DropdownMenuRadioItem value="leetcode">Leetcode</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="codeforces">Codeforces</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="codechef">Codechef</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
