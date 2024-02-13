import React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/avatar.jpg";
import styles from "./navbar.module.css";

const Navbar: React.FunctionComponent = (): JSX.Element => {
  return (
    <header className="sticky top-0 flex justify-between items-center p-3">
      <Image src={Logo} alt="Logo" width={50} height={50} />

      <nav
        className={`flex gap-10 font-medium text-lg navLinks ${styles.navLinks}`}
      >
        <ul className="flex gap-10 font-medium text-lg navLinks">
          <li>Home</li>
          <li>Posts</li>
          <li>Query</li>
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Suggestions</DropdownMenuItem>
            <DropdownMenuItem>Leaderboard</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>About Us</DropdownMenuItem>
            <DropdownMenuItem>Contact</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shad" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">User Name</h4>
              <p className="text-sm">
                Hello Buddy, I am using this application for fun. And currently
                this application is in active development
              </p>
              <div className="flex items-center pt-2">
                <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                <span className="text-xs text-muted-foreground">
                  Joined December 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </header>
  );
};

export default Navbar;
