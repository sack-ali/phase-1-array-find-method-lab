function superbowlWin(arr) {
    const win = arr.find(obj => obj.result === "W");
    return win ? win.year : undefined;
  }
console.log(superbowlWin())  