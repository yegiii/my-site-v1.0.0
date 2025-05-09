import Window from "./components/Window";

function App() {
  return (
    <div className="w-full bg-white h-[100svh] flex justify-center items-center">
      <Window title="Window" className="!w-1/2">
      <div className="w-full px-8 py-4">
        <h1 className="font-semibold text-4xl mt-8">Hi ! I'm Yeganeh ...</h1>
        <p className=" font-medium text-xl mt-4">Front-end developer &lt;/&gt;</p>
      </div>
      </Window>
    </div>
  );
}

export default App;
