
const utils = {
    getRandomNumber: function (min, max) {
        let num = Math.round(Math.random() * max) - min;
        return num;
    }
}

export default utils