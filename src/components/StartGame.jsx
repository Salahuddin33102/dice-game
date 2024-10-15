const StartGame = ({toggle}) => {
    return (
        <div className="mx-auto h-screen w-[70%] flex items-center gap-10">
            <div className="w-[50%]">
                <img src="public/image/dices 1.png" alt="" />
            </div>
            <div className="w-[50%]">
                <h2 className="font-bold text-[90px]">DICE GAME</h2>
                <div className="flex justify-end">
                    <button className="py-2 px-11 rounded-md border bg-black text-white" onClick={toggle}>Play Now</button>
                </div>
            </div>

        </div>
    )
}
export default StartGame;