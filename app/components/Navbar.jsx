import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="WemaStores Helpdesk logo"
        width={100}
        quality={100}
        placeholder="blur"
      />
      <h1>Wema Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets"> Tickets </Link>
    </nav>
  );
}
