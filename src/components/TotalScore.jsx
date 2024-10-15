const TotalScore = ({score}) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center max-w-[200px]">
                <h2 className="text-[100px] leading-0 font-medium">{score}</h2>
                <p className="text-[24px] font-medium">Total score</p>
            </div>
        </div>
    )
}
export default TotalScore;