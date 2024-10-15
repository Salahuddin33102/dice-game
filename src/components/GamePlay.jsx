import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice"
import { useState } from "react";
import DiceRoll from "./DiceRole";

const GamePlay = () => {
    const [score, setScore] = useState("0");
    const [select, setSelect] = useState("");
    const [error, setError] = useState("");
    const [currentDice, setCurrentDice] = useState(1);
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((prev) => !prev)
    }

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min)
    }
    const roleDice = () => {
        if (!select) {
            setError("You have not selected any number");
            return;
        } else {
            setError("")
        }
        const randomNumber = generateRandomNumber(1, 7)
        setCurrentDice((prev) => randomNumber)

        if (select === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 1)
        }
        setSelect(undefined)

    }
    const resetscore = () => {
        setScore(0)
    }

    // const


    return (
        <div>
            <main className="flex justify-between mx-auto w-[80%]">
                <TotalScore score={score} />
                <NumberSelector error={error} select={select} setSelect={setSelect} />
            </main>
            <RoleDice currentDice={currentDice} toggle={toggle} roleDice={roleDice} resetscore={resetscore} />
            {show ? <DiceRoll /> : ""}

        </div>

    )
}
export default GamePlay;