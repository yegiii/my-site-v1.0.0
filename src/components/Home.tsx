import WindowTab from "./WindowTab";
import CardGrid from "./CardGrid";
import Typewriter from "./TypeWritter";

const Home = () => {
  return (
    <WindowTab title="Home" className="!w-2/3 lg:!w-1/2" showClose={false}>
      <div className="w-full p-6">
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 mb-6 bg-gray-900 p-6 sm:p-8 rounded-lg border-l-4 border-amber-500 shadow-xl">
          {/* Typewriter Header - Responsive text sizing */}
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2">
            <span className="text-amber-400">$ </span>
            <Typewriter
              text="Hi, I'm Yeganeh..."
              cursorStyle="_"
              textStyle="text-gray-100"
              speed={80}
            />
          </h1>

          {/* Developer Tag - Stack on small screens */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
            <p className="font-mono text-base sm:text-lg md:text-xl text-gray-300 bg-gray-800/50 px-3 sm:px-4 py-1 sm:py-2 rounded-md border border-gray-700 w-fit">
              <span className="text-amber-400">&lt;</span>
              <span className="mx-1 text-white">FrontEndDeveloper</span>
              <span className="text-amber-400">/&gt;</span>
            </p>

            {/* Version badge - Right-aligned on larger screens */}
            <span className="sm:ml-3 font-mono text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded w-fit">
              v2.4.1
            </span>
          </div>

          {/* Status bar - Always centered */}
          <div className="mt-3 sm:mt-4 flex justify-center sm:justify-start items-center text-xs text-gray-400 font-mono">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            <span>Available for work</span>
          </div>
        </div>

        <CardGrid />
      </div>
    </WindowTab>
  );
};

export default Home;
