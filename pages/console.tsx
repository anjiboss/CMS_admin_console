import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../src/Components/Utils/Navbar";
import Viewer from "../src/Components/Utils/Viewer";
import { Mode } from "../src/types/types";

const Console: React.FC = ({}) => {
  const [isLogged, _] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/login");
    }
  }, [router, isLogged]);

  useEffect(() => {});

  return (
    <>
      <main>
        <Navbar />
        <Viewer mode={router.query.mode as Mode} />
      </main>
    </>
  );
};
export default Console;
