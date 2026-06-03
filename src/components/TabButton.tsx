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
    relative overflow-hidden

    flex flex-col items-center justify-center gap-2

    px-5 py-5
    rounded-[28px]

    backdrop-blur-3xl

    bg-white/[0.06]

    border border-white/[0.12]

    shadow-[0_8px_30px_rgba(0,0,0,0.35)]

    transition-all duration-300
    hover:bg-white/[0.08]
    hover:border-white/[0.18]
    hover:scale-[1.03]
  "
>
  {/* top highlight */}
  <div
    className="
      absolute inset-x-0 top-0
      h-[40%]
      pointer-events-none

      bg-gradient-to-b
      from-white/[0.15]
      to-transparent
    "
  />

  {/* edge lighting */}
  <div
    className="
      absolute inset-0
      rounded-[28px]
      pointer-events-none

      shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
    "
  />

  {/* glass blob */}
  <div
    className="
      absolute
      -top-8 -right-8

      w-24 h-24
      rounded-full

      bg-white/[0.08]
      blur-2xl

      pointer-events-none
    "
  />

  {!!IconComponent && (
    <IconComponent
      size="lg"
      className="relative z-10 text-white/90"
    />
  )}

  <p className="relative z-10 text-sm font-medium text-white/90">
    {item.title}
  </p>
</div>
    </div>
  );
};

export default TabButton;
