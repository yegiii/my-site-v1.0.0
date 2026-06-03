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
      relative
  
      w-full rounded-[28px]
  
      bg-white/[0.05]
  
      border border-white/[0.10]
  
      backdrop-blur-[5rem]
      backdrop-saturate-150
  
      shadow-[0_10px_40px_rgba(0,0,0,0.35)]
  
      transition-all duration-500
  
      ${className}
    `}
  >
    {/* glass reflection */}
    <div
      className="
        pointer-events-none absolute
        inset-x-0 top-0
        h-24
        rounded-[28px]
  
        bg-gradient-to-b
        from-white/[0.12]
        via-white/[0.04]
        to-transparent
      "
    />
  
    {/* subtle liquid blob */}
    <div
      className="
        pointer-events-none absolute
  
        -top-12 -right-12
        h-32 w-32
  
        rounded-full
        bg-white/[0.05]
  
        blur-3xl
      "
    />
  
    {/* edge lighting */}
    <div
      className="
        pointer-events-none absolute
        inset-0
  
        rounded-[28px]
  
        shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
      "
    />
  
    {/* Header */}
    <div
      className="
        relative z-10
  
        flex items-center justify-between
  
        px-5 py-4
        rounded-[28px]
  
        border-b border-white/[0.08]
  
        bg-white/[0.03]
  
        text-white/90
      "
    >
      <h3 className="select-none font-medium">
        {title}
      </h3>
  
      {showClose && (
        <button
          onClick={() => onClose(tabId || 0)}
          className="
           close-btn
            flex items-center justify-center
  
            size-8 rounded-full
  
            bg-white/[0.04]
  
            border border-white/[0.08]
  
            transition-all duration-300
  
            hover:bg-white/[0.08]
            hover:border-white/[0.14]
  
            active:scale-95
          "
        >
          <CgCloseR
            className="
              size-4
  
              text-white/80
  
              transition-colors
              hover:text-rose-400
            "
          />
        </button>
      )}
    </div>
  
    {/* Body */}
    <div
      className="
        relative z-10
  
        p-5
  
        text-white/85
      "
    >
      {children}
    </div>
  </section>
  );
};

export default WindowTab;
