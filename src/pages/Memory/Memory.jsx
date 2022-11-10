import { useEffect, useRef, useState } from "react";
import Utility from "../../services/utility";
import "./memory.scss";
import icons from "./icons";

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
  const [choosenBox, setChoosenBox] = useState([]);
  const [choosenIcon, setChoosenIcon] = useState([]);
  const boxRef = useRef([]);

  useEffect(() => {
    setCombination(Utility.randomize([...icons, ...icons]));
  }, []);

  useEffect(() => {
    let timer = null;
    if (choosenBox.length === 2) {
      if (choosenIcon[0] === choosenIcon[1]) {
        console.log("Correct");
      }

      timer = setTimeout(() => {
        choosenBox.forEach((el) => {
          el.classList.remove("flipped");
          setChoosenBox([]);
          setChoosenIcon([]);
        });
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [choosenBox, choosenIcon]);

  const onclickHandler = (e, icon, index) => {
    console.log(boxRef[index].current);
    let currentBox = e.currentTarget;
    if (choosenBox.length < 2 && choosenBox.indexOf(currentBox)) {
      currentBox.classList.add("flipped");
      setChoosenIcon([...choosenIcon, icon]);
      setChoosenBox([...choosenBox, currentBox]);
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
            <img src={el} alt="" />
          </div>
        </div>
      );
    });
  };

  return (
    <section className="memory">
      <div className="memory-board">{renderBoxes()}</div>
    </section>
  );
}

export default Memory;
