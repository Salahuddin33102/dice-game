import { useState } from "react";


const RoleDice = ({toggle,resetscore,currentDice,roleDice}) =>{



    return(
        <div className="mt-[48px] flex flex-col justify-center items-center cursor-pointer">
            <img src={`public/image/dice_${currentDice}.png`} alt="" onClick={roleDice} className="" />
            <div className="flex flex-col gap-5 items-center">
                <p>Click on Dice to roll</p>
                <button className="px-10 border py-2 text-black hover:bg-black hover:text-white" onClick={resetscore} >Reset Score</button>
                <button className="px-10 border py-2 text-white bg-black hover:bg-white hover:text-black" onClick={toggle}> Show Rules</button>
            </div>
     
        </div>
    )

}
export default RoleDice;