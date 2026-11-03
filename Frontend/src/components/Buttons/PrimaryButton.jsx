const PrimaryButton = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-gradient-to-r from-blue-400 to-green-400 px-4 py-2 font-medium text-white transition duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;