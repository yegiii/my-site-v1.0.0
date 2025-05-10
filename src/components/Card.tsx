import AboutMe from "./icon/AboutMe";
import Chain from "./icon/Chain";
import Email from "./icon/Email";
import Monitor from "./icon/Monitor";
import Work from "./icon/Work";

const iconComponents: { [key: string]: React.FC } = {
  AboutMe: AboutMe,
  Chain: Chain,
  Work: Work,
  Monitor: Monitor,
  Email: Email,
};

type propType = {
  item: {
    icon: string;
    title: string;
  };
};

const Card: React.FC<propType> = ({ item }) => {
  const IconComponent = iconComponents[item.icon];

  return (
    <div className="w-full h-full p-1 group">
      <div
        className="flex flex-col justify-center items-center content-between gap-2 cursor-pointer transition-all duration-300 ease-in-out filter drop-shadow-[2px_3px_0px_rgba(0,0,0,0.2)] 
                    group-hover:drop-shadow-[3px_4px_0px_rgba(0,0,0,0.2)] group-hover:scale-105 group-active:scale-95"
      >
        {!!IconComponent && <IconComponent size="lg" className="" />}
        <p className="text-lg font-bold text-center">{item.title}</p>
      </div>
    </div>
  );
};

export default Card;
