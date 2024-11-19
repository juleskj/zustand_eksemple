"use client";
import useCountStore from "@/store/useCountStore";

const kontakt = () => {
  const { count, setCount } = useCountStore();
  return (
    <div className=" flex flex-col items-start gap-2 p-20 ">
      <p className=" relative bg-cyan-700 text-white rounded-full text-center py-2 px-2 ">
        messages
        <span className="absolute top-[-10%] right-[-10%] bg-red-500 text-white text-xs outline outline-white rounded-full p-1 grid place-content-center w-5 h-5">
          {count}
        </span>
      </p>

      <button
        onClick={setCount}
        className="bg-slate-500 text-white rounded-full py-2 px-4"
      >
        send message
      </button>
    </div>
  );
};

export default kontakt;
