import sun from './assets/sun.svg'
import moon from './assets/moon.svg'
import fewclouds_d from './assets/fewclouds_d.svg'
import fewclouds_n from './assets/fewclouds_n.svg'
import cloud from './assets/cloud.svg'
import scattered_d from './assets/scattered_d.svg'
import scattered_n from './assets/scattered_n.svg'
import rain from './assets/rain.svg'
import snow from './assets/snow.svg'
import thunder from './assets/thunder.svg'
import mist from './assets/mist.svg'

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

// export const smallIcon = (str) => {
//     if (str === '01d') { return sun }
//     if (str === '01n') { return moon }
//     if (str === '02d') { return fewclouds_d }
//     if (str === '02n') { return fewclouds_n }
//     if (str === '03d' || str === '03n' || str === '04d' || str === '04n') { return cloud }
//     if (str === '09d') { return scattered_d }
//     if (str === '09n') { return scattered_n }
//     if (str === '10d' || str === '10n') { return rain }
//     if (str === '11d' || str === '11n') { return thunder }
//     if (str === '13d' || str === '13n') { return snow }
//     if (str === '50d' || str === '50n') { return mist }
// }
