"use client";

import useCountStore from "../store/useCountStore";

const Counter = () => {
  const { count, setCount } = useCountStore();

  return (
    <div className="flex flex-col items-center gap-2 ">
      <section className="cursor-pointer  my-auto border-2 border-black rounded-full py-2 px-10">
        count: {count}
      </section>
      <button
        className="text-white py-2 px-6 rounded-full bg-slate-700 hover:bg-white hover:text-slate-700  hover:outline-slate-700 hover:outline"
        onClick={() => setCount()}
      >
        Count!
      </button>
    </div>
  );
};

export default Counter;
