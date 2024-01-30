export const Button = ({
  label,
  iconUrl,
  backgroundColor = "bg-coral-red",
  textColor = "text-white",
  borderColor = "border-coral-red",
  fullWidth = false
}) => {
  return (
    <button
      className={`flex justify-center items-center
        gap-2 px-7 py-4 border font-montserrat text-lg 
        leading-none ${backgroundColor} rounded-full ${textColor} ${borderColor}
        ${fullWidth && 'w-full'}
        `}
    >
      {label}

      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};
