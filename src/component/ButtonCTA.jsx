const ButtonCTA = ({ onClickFuncktion }) => {
  return (
    <button
      onClick={{ onClickFuncktion }}
      className="text-white py-2 px-6 rounded-full bg-slate-700 hover:bg-white hover:text-slate-700  hover:outline-slate-700 hover:outline"
    >
      Count!
    </button>
  );
};

export default ButtonCTA;
