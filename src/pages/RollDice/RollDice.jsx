import "./rolldice.scss"

const [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix] = [
	"https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
	"https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
	"https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
	"https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
	"https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
	"https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg",
]


function RollDice() {
	return (
	  <section className="rolldice">
		  <div className="board"></div>
		  <div className="diceWrapper">

			  <div className="dice">
				  <div className="dice-1">
					  <img src={diceOne} alt=""/>
				  </div>
				  <div className="dice-2">
					  <img src={diceTwo} alt=""/>
				  </div>
				  <div className="dice-3">
					  <img src={diceThree} alt=""/>
				  </div>

				  <div className="dice-4">
					  <img src={diceFour} alt=""/>
				  </div>

				  <div className="dice-5">
					  <img src={diceFive} alt=""/>
				  </div>

				  <div className="dice-6">
					  <img src={diceSix} alt=""/>
				  </div>
			  </div>


		  </div>
		  <div className="board"></div>
	  </section>
	)
}

export default RollDice