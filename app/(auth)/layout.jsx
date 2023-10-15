import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }
  return (
    <>
      <nav>
        <h1>Wema Helpdesk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login"> Log in</Link>
      </nav>
      {children}
    </>
  );
}
