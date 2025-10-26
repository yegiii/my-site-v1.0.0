import { CgCloseR } from "react-icons/cg";
import { useTabContext } from "../hooks/useTabContext";

type WindowProps = {
  title?: string;
  className?: string;
  showClose?: boolean;
  children?: React.ReactNode;
  tabId?: number;
};

const WindowTab: React.FC<WindowProps> = ({
  title,
  className,
  showClose = true,
  children,
  tabId,
}) => {
  const { onClose } = useTabContext();

  return (
    <section
      className={`
        w-full rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        border border-white/20 backdrop-blur-xl
        bg-gradient-to-br from-white/30 via-white/20 to-white/10
        dark:from-zinc-800/40 dark:via-zinc-800/20 dark:to-zinc-900/10
        transition-all duration-500 ${className}
      `}
    >
      {/* Header */}
      <div
        className="
          flex justify-between items-center px-4 py-3 rounded-t-2xl
          bg-gradient-to-br from-white/40 to-white/10 dark:from-zinc-800/40 dark:to-zinc-900/20
          backdrop-blur-2xl border-b border-white/20 dark:border-zinc-700/30
          text-stone-800 dark:text-zinc-100 font-medium
        "
      >
        <h3 className="select-none">{title}</h3>

        {showClose && (
          <button
            onClick={() => onClose(tabId || 0)}
            className="flex items-center justify-center size-8 rounded-full
                       hover:bg-white/30 dark:hover:bg-zinc-700/40
                       active:scale-90 transition-all duration-200"
          >
            <CgCloseR
              className="size-5 text-zinc-800 dark:text-zinc-100
                         hover:text-rose-500 transition-colors"
            />
          </button>
        )}
      </div>

      {/* Body */}
      <div className="p-4 text-zinc-900 dark:text-zinc-100">{children}</div>
    </section>
  );
};

export default WindowTab;
