 function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        console.log('d')
        if (!disabled) {
            console.log('e')
            handleChoice(card)
        }
    }

    return (
        <div className="card" data-aos="fade-right" data-aos-duration="2000">
            <div className={flipped ? "flipped" : ""}>
                <img className="front h-full w-full" src={card.src} alt="card front" />
                <img className="back" src="./images/i_me_myself.webp" onClick={handleClick} alt="cover" />
            </div>
        </div>
    )
}

export default SingleCard;