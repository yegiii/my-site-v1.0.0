import TabButton from "./TabButton";
import data from "../data/sections.json";
import { useTabContext } from "../hooks/useTabContext";

const CardGrid: React.FC = () => {
  const { handleTabClick } = useTabContext();
  return (
    <div className="bg-amber-50 p-4 md:p-8">
      <ul className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {data.sections.map((tab, index) => (
          <li
            key={index}
            onClick={(e) => handleTabClick(tab, { x: e.clientX, y: e.clientY })}
          >
            <TabButton key={index} item={tab} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardGrid;
