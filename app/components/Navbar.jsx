import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";
import { Space_Mono } from "next/font/google";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <Image
        src={Logo}
        alt="WemaStores Helpdesk logo"
        width={100}
        quality={100}
        placeholder="blur"
      />
      {/* <h1>Wema Helpdesk</h1> */}
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
