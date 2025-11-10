"use client";
import { useRouter } from "next/navigation";

export const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/about");
  };
  return (
    <div>
      <h1>Home</h1>
      <p data-testid="desc">This is the home page</p>
      <button onClick={handleClick} className="underline hover:cursor-pointer">
        Go to About
      </button>
    </div>
  );
};
