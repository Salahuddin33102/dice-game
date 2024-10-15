import { useState } from "react";

const NumberSelector = ({error ,select,setSelect}) => {

  const Number = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex gap-3  justify-center flex-col">
   <p className="text-red-600">{error}</p>

      <div className="flex gap-3 items-center">
        {Number.map((value, i) => (
          <div key={i}>
            <div className={`border border-black h-[72px] w-[72px] grid place-items-center  text-[24px] font-bold  cursor-pointer ${value === select ? 'bg-black text-white' : "bg-white"}`} onClick={() => setSelect(value)}>{value}</div>
          </div>
        ))}
      
      </div>
      <div className="flex items-end justify-end">
          <p className="text-[24px] font-bold">Select Number</p>
        </div>
    </div>
  )
}
export default NumberSelector;