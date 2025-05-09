import Card from "./Card";
import data from '../data/sections.json'

const CardGrid = () => {

  return (
    <div className="bg-amber-50 p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {data.sections.map((section, index) => (
          <Card key={index} item={section}/>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
