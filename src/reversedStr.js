export function reversedStr(string) {
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("")
    return joinArray;
}

