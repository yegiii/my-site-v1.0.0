import { CgCloseR } from "react-icons/cg";
import { useTabContext } from "../hooks/useTabContext";

type windowProps = {
  title?: string;
  className?: string;
  showClose?: boolean;
  children?: React.ReactNode;
  tabId?: number;
};

const WindowTab: React.FC<windowProps> = ({
  title,
  className,
  showClose = true,
  children,
  tabId,
}) => {
  const { onClose } = useTabContext();
  return (
    <section
      className={` w-full bg-amber-50 rounded-xl shadow-lg border
      border-stone-700 ${className}`}
    >
      <div className="bg-stone-700 text-stone-200 px-4 py-3 rounded-t-lg flex justify-between items-center">
        <h3>{title}</h3>
        {showClose && (
          <div
            className="flex items-center justify-center size-8"
            onClick={() => onClose(tabId || 0)}
          >
            <CgCloseR
              className=" size-6 hover:scale-120 active:scale-60 transition-all duration-300 
          cursor-pointer ease-in-out"
            />
          </div>
        )}
      </div>
      <div className="text-zinc-800">{children}</div>
    </section>
  );
};

export default WindowTab;
