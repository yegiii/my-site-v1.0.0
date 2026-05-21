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

const TabButton: React.FC<propType> = ({ item }) => {
  const IconComponent = iconComponents[item.icon];

  return (
    <div className="w-full h-full group">
      <div
        className="
        relative flex flex-col items-center justify-center gap-2
        px-5 py-5 rounded-2xl
        
        backdrop-blur-xl
        bg-black/[0.06]
        border border-white/[0.12]
        
        shadow-[0_10px_30px_rgba(0,0,0,0.45)]
        
        transition-all duration-300
        cursor-pointer
        
        hover:bg-white/[0.10]
        hover:border-white/[0.20]
        hover:shadow-[0_14px_40px_rgba(0,0,0,0.55)]
        hover:scale-[1.04]
        
        active:scale-[0.97]
        "
      >
        {/* top glass reflection */}
        <div
          className="
          pointer-events-none absolute inset-0 rounded-2xl
          bg-gradient-to-b
          from-white/[0.25]
          via-white/[0.06]
          to-transparent
          opacity-30
        "
        />

        {/* subtle inner edge */}
        <div
          className="
          pointer-events-none absolute inset-[1px] rounded-2xl
          border border-white/[0.06]
        "
        />

        {!!IconComponent && (
          <IconComponent
            size="lg"
            className="text-white/90 drop-shadow-sm"
          />
        )}

        <p className="text-sm font-medium text-white/90 text-center">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default TabButton;
