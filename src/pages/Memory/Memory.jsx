import {useEffect, useRef, useState} from "react";
import Utility from "../../services/utility";
import "./memory.scss";
import icons from "./icons";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// const icons = [
//   "https://cdn.icon-icons.com/icons2/1715/PNG/96/2730388-character-choper-cute-fun-inkcontober-shy-smile_112682.png",
//   "https://cdn.icon-icons.com/icons2/1715/PNG/96/2730369-blue-character-inkcontober-run-sonic_112686.png",
//   "https://cdn.icon-icons.com/icons2/1715/PNG/96/2730368-animal-character-inkcontober-psyduck-screech-yellow_112683.png",
//   "https://cdn.icon-icons.com/icons2/1715/PNG/96/2730372-character-dota2-game-inkcontober-juggernaut-mask_112705.png",
//   "https://cdn.icon-icons.com/icons2/1715/PNG/96/2730380-animal-character-filthy-fox-inkcontober_112681.png",
//   "https://cdn.icon-icons.com/icons2/1715/PNG/96/2730377-character-game-gigantic-inkcontober-pakko_112701.png",
//   "https://cdn.icon-icons.com/icons2/1715/PNG/96/2730381-character-cute-fierce-inkcontober-wolf_112706.png",
//   "https://cdn.icon-icons.com/icons2/1715/PNG/96/2730386-character-cloud-inkcontober-rain_112687.png",
// ];


function Memory() {
	const [combination, setCombination] = useState([]);
	const [chooseBox, setChooseBox] = useState([]);
	const [chooseIcon, setChooseIcon] = useState([]);
	const [styleBoard, setStyleBoard] = useState({})
	const boxRef = useRef([]);
	useEffect(() => {
		setCombination(Utility.randomize([...icons, ...icons]));
		setStyleBoard({
			gridTemplateColumns: `repeat(${icons.length / 2},1fr)`,
			gridTemplateRows: `repeat(${icons.length / 2},1fr)`,
		})
	}, []);

	useEffect(() => {
		let timer = null;
		if (chooseBox.length === 2) {
			if (chooseIcon[0] === chooseIcon[1]) {
				stayOpened()
				toast("Correct")
				setChooseBox([]);
				setChooseIcon([]);
			} else {
				timer = setTimeout(() => {
					chooseBox.forEach((el) => {
						el.classList.remove("flipped");
						setChooseBox([]);
						setChooseIcon([]);
					});
				}, 1000);
			}
		}
		return () => {
			clearTimeout(timer);
		};
	}, [chooseBox, chooseIcon]);

	const stayOpened = () => {
		chooseBox[0].classList.add("found")
		chooseBox[1].classList.add("found")
	}


	const onclickHandler = (e, icon, index) => {
		let currentBox = e.currentTarget;
		if (chooseBox.length < 2 && chooseBox.indexOf(currentBox)) {
			currentBox.classList.add("flipped");
			setChooseIcon([...chooseIcon, icon]);
			setChooseBox([...chooseBox, currentBox]);
		}
	};

	const renderBoxes = () => {
		return combination.map((el, index) => {
			return (
			  <div
				ref={(el) => (boxRef.current[index] = el)}
				className="box"
				key={index}
				onClick={(e) => onclickHandler(e, el, index)}
			  >
				  <div className="front">&copy;</div>
				  <div className="back">
					  <img src={el} alt=""/>
				  </div>
			  </div>
			);
		});
	};

	return (
	  <section className="memory">
		  <div className="memory-board" style={styleBoard}>{renderBoxes()}</div>
		  <ToastContainer position={"top-center"} autoClose={1000}/>
	  </section>
	);
}

export default Memory;
