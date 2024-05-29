export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomData(length, min, max) {
    const randomData = [];
    for (let i = 0; i < length; i++) {
        randomData.push(getRandomNumber(min, max));
    }
    return randomData;
}