import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [isLogged, setIsLogged] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      router.push("/console");
    } else {
      router.push("/login");
    }
  }, [isLogged, router]);

  return <></>;
};

export default Home;
