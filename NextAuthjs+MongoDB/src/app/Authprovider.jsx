"use client";

import { SessionProvider } from "next-auth/react";

export default function Authprovider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
