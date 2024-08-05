"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return null; // Optionally, you can return a loading indicator here
};

export default Home;
