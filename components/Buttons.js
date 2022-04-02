import { useRouter } from "next/router";

function Buttons() {
  const router = useRouter();

  return (
    <>
      <button
        className={`text-[14px] font-semibold lg:text-black text-white hover:scale-110 duration-200 ease-in-out`}
        onClick={() => router.push("/")}
      >
        Home
      </button>
      <button
        className={`text-[14px] font-semibold lg:text-black text-white hover:scale-110 duration-200 ease-in-out`}
        onClick={() => router.push("/projects")}
      >
        Projects
      </button>
      <button
        className={`text-[14px] font-semibold lg:text-black text-white hover:scale-110 duration-200 ease-in-out`}
        onClick={() => window.open("https://linktr.ee/devvano")}
      >
        Socials
      </button>
      <button
        className={`text-[14px] font-semibold lg:text-black text-white hover:scale-110 duration-200 ease-in-out`}
        onClick={() => window.open("https://github.com/vuenno")}
      >
        Github
      </button>
    </>
  );
}

export default Buttons;
