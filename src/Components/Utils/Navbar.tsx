import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { Mode } from "../../types/types";

const nav: Mode[] = [
  "dashboard",
  "categories",
  "products",
  "reviews",
  "post",
  "pages",
  "menu",
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const navigate = useCallback(
    (navRoute: Mode) => {
      router.push(
        {
          query: {
            mode: navRoute,
          },
        },
        undefined,
        {
          shallow: true,
        }
      );
    },
    [router]
  );
  return (
    <>
      <ul className="main-nav">
        <h1>
          <Link href="/console">Logo</Link>
        </h1>
        {nav.map((navi) => {
          return (
            <li className="nav" key={navi}>
              <a onClick={() => navigate(navi)}>{navi}</a>
            </li>
          );
        })}
        <hr style={{ width: "80%", borderColor: "#646464" }} />
        <li className="nav">
          <a onClick={() => navigate("settings")}>Settings</a>
        </li>
        <li className="nav">
          <a onClick={() => navigate("users")}>Users</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
