
const utils = {
    getRandomNumber: function (min, max) {
        let num = Math.round(Math.random() * max - min) + min;
        return num;
    }
}

export default utils