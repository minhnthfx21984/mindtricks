import { SessionProvider } from "next-auth/react";
import { useSession, signIn, signOut } from "next-auth/react";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoutModal from "@/components/Modal/LogoutModal";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <SessionProvider session={session}>
        <header>
          <Navbar useSession={useSession} signIn={signIn} signOut={signOut} />
        </header>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        {/* MODEL */}
        <LogoutModal signOut={signOut} />
      </SessionProvider>
    </>
  );
}
