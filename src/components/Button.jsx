const Button = ({ text, bgColor = "", borderColor = "" }) => {
  return (
    <button
      className={`w-fit cursor-pointer rounded-md bg-amber-50 px-4 py-3 uppercase sm:px-6 sm:py-4 sm:font-medium ${bgColor} ${borderColor} border`}
    >
      {text}
    </button>
  );
};

export default Button;
