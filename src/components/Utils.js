export const toUpper = (str) => {
    const array = str.split(' ')
    let upperCase = []
    for (let i = 0; i < array.length; i++) {
        let firstLetter = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        upperCase.push(firstLetter)
    }
    return upperCase.join(' ')
}

export const windDir = (num) => {
    if(num >= 316 && num <= 360 || num === 0 && num <= 22) { return "N" } 
    if(num >= 23 && num <= 67) { return "NE"}
    if(num >= 68 && num <= 112) {return "E"}
    if(num >= 113 && num <= 157) {return "SE"}
    if(num >= 158 && num <= 202) {return "S"}
    if(num >= 203 && num <= 247) {return "SW"}
    if (num >= 248 && num <= 292) {return "W"}
    if(num >= 293 && num <= 338) {return "NE"}
}
