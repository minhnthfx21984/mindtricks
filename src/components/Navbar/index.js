import Link from "next/link";
import LogoutModal from "../Modal/LogoutModal";

export default function Navbar({ useSession, signIn, signOut }) {
  const { data: session } = useSession();

  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            MindTricks
          </Link>
        </div>

        <div className="navbar-end">
          {session ? (
            <>
              <Link href="/create-post">
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="arcs"
                    >
                      <path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6" />
                      <path d="M14 3v5h5M18 21v-6M15 18h6" />
                    </svg>
                  </div>
                </button>
              </Link>

              <label
                htmlFor="logout_modal"
                className="btn btn-ghost btn-circle"
                // onClick={() => signOut()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="arcs"
                >
                  <path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3" />
                </svg>
              </label>
            </>
          ) : (
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => signIn("github")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="arcs"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
