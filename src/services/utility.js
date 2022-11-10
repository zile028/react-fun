class Utility {
  static randomize = (arr) => {
    let copyArr = [].concat(arr);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let rnd = Math.floor(Math.random() * copyArr.length);
      result.push(copyArr[rnd]);
      copyArr.splice(rnd, 1);
    }
    return result;
  };
}

export default Utility;
