
const utils = {
    getRandomNumber: function (min, max) {
        let num = Math.round(Math.random() * max - min) + min;
        return num;
    },
    getValuefromkeyPoints: function (arrayOfObject) {
        let arrayOfPoints = []
        for (let x = 0; x < arrayOfObject.length; x++) {
            arrayOfPoints.push(arrayOfObject[x].points)
        }
        arrayOfPoints.sort((a, b) => b - a);
        return arrayOfPoints;
    },
    getPlayersOrdered: function (arrayOfObject, arrayOfPointsOrdered) {
        let playersOrdered = [];

        for (let x = 0; x < arrayOfPointsOrdered.length; x++) {
            for (let y = 0; y < arrayOfObject.length; y++) {
                if (arrayOfObject[y].points === arrayOfPointsOrdered[x]) {
                    if (!playersOrdered.includes(arrayOfObject[y])) {
                        playersOrdered.push(arrayOfObject[y]);
                    }
                }
            }
        }
        return playersOrdered
    }
}

export default utils