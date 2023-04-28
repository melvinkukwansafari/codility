function solution(riddle) {
    if (!riddle.includes("?")) {
      return riddle;
    }
    let sb = "";
    let prev = "";
    for (let i = 0; i < riddle.length; i++) {
      let current = riddle[i];
      if (current === "?") {
        let next = "";
        if (i !== riddle.length - 1) {
          next = riddle[i + 1];
        }
        current =
          prev !== "a" && next !== "a"
            ? "a"
            : prev !== "b" && next !== "b"
            ? "b"
            : "c";
      }
      sb += current;
      prev = current;
    }
    return sb;
  }