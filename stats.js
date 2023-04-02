function findMean(numsArr) {

    const sum = numsArr.reduce( (partialSum, nextValue) => partialSum + nextValue, 0 );

    const divisor = numsArr.length;

    const mean = sum / divisor;

    return mean;
}

function findMedian(numsArr) {

    numsArr.sort( (a,b) => a - b);

    const index = Math.floor(numsArr.length/2);
    let median;

    if (numsArr.length % 2 === 0) {
        median = (numsArr[index] + numsArr[index-1]) / 2;
    } else {
        median = numsArr[index];
    }
    return median;
}

function createFrequencyCounter(numsArr) {
    return numsArr.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
}
  
function findMode(numsArr) {
    let freqCounter = createFrequencyCounter(numsArr);
  
    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    return +mostFrequent;
}

module.exports = { findMean, findMedian, findMode };