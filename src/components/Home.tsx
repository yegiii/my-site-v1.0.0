import WindowTab from "./WindowTab";
import CardGrid from "./CardGrid";

const Home = () => {
  return (
    <WindowTab title="Home" className="!w-1/2" showClose={false}>
      <div className="w-full p-10">
        <div className="px-16 mb-6">
          <h1 className="font-semibold text-4xl">Hi ! I'm Yeganeh ...</h1>
          <p className=" font-medium text-xl mt-6">
            Front-end developer &lt;/&gt;
          </p>
        </div>

        <CardGrid/>
      </div>
    </WindowTab>
  );
};

export default Home;
