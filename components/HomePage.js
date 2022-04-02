function HomePage() {
  return (
    <>
      <div className="w-full h-[600px] flex-col flex items-center justify-center mt-[5%]">
        <h1 className="text-[90px] font-mono font-bold tracking-widest drop-shadow-lg ml-8 bg-gradient-to-r bg-clip-text text-transparent from-[#243B55]/95 to-slate-500 opacity-90 lg:text-[100px]">
          VUENNO
        </h1>
        <p className="font-mono text-[16px] w-[350px] text-center font-semibold text-[#171717]/70 tracking-tighter">
          A Front-End Developer, Gym Enthusiast and a fan of various TV Shows as
          well as music.
          <br />
          <br />
          You either catch me working out, writing code or hanging outside as
          well as a bit of gaming.
          <br />
          <br />I currently specialize in:
        </p>
        <div className="w-[350px] h-[50px] border-b-[2px] border-b-[#171717] flex justify-evenly items-center p-2 mt-0.5">
          <img
            src="/html.png"
            className="max-w-[30px] max-h-[30px]"
            alt="html_logo"
          />
          <img
            src="/css.png"
            className="max-w-[30px] max-h-[30px]"
            alt="css_logo"
          />
          <img
            src="/js.png"
            className="max-w-[30px] max-h-[30px]"
            alt="js_logo"
          />
          <img
            src="/react.png"
            className="max-w-[30px] max-h-[30px]"
            alt="react_logo"
          />
          <img
            src="/next.png"
            className="max-w-[30px] max-h-[30px]"
            alt="next_logo"
          />
          <img
            src="/py.png"
            className="max-w-[30px] max-h-[30px]"
            alt="python_logo"
          />
          <img
            src="/git.png"
            className="max-w-[30px] max-h-[30px]"
            alt="git_logo"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
