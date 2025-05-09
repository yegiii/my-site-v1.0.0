import { CgCloseR } from "react-icons/cg";

type windowProps = {
  title?: string;
  className?: string;
  showClose?: boolean;
  children?: React.ReactNode;
};

const WindowTab: React.FC<windowProps> = ({ title, className, showClose=true, children }) => {
  return (
    <section className={`w-full bg-amber-50 rounded-xl shadow-[4px_6px_0px_0px_rgba(0,_0,_0,_0.3)] border
      border-stone-700 ${className}`}>
      <div className=" bg-stone-700 text-stone-200 px-4 py-3 rounded-t-lg flex justify-between items-center">
        <h3>{title}</h3>
       { showClose && <div className="flex items-center justify-center size-8">
          <CgCloseR className=" size-6 hover:scale-120 active:scale-60 transition-all duration-300 
          cursor-pointer ease-in-out" />
        </div>}
      </div>
      <div className="text-zinc-800">{children}</div>
    </section>
  );
};

export default WindowTab;
