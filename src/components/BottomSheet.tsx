type BottomSheetProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const BottomSheet: React.FC<BottomSheetProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        open ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Bottom Sheet */}
      <div
        className={`absolute bottom-0 left-0 w-full max-h-[92vh]
          rounded-t-[28px] overflow-hidden
          transition-transform duration-500 ease-out
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
      >
        {/* Drag handle */}
        <div className="absolute top-3 left-1/2 z-20 -translate-x-1/2">
          <div className="h-1.5 w-12 rounded-full bg-white/30" />
        </div>

        {children}
      </div>
    </div>
  );
};

export default BottomSheet;