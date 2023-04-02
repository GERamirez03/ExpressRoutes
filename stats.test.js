const { findMean, findMedian, findMode } = require("./stats");
  
describe("findMean", function () {
    test("correctly finds the mean of an array of numbers", function () { 
      expect(findMean([1,3,5,7])).toEqual(4)
    })
})

describe("findMedian", function(){
    test("correctly finds the median in an even set", function(){ 
      expect(findMedian([1,3,5,7])).toEqual(4)
    })

    test("correctly finds the median in an odd set", function () { 
      expect(findMedian([5,1,3])).toEqual(3)
    })
})
  
describe("#findMode", function () {
    test("finds the mode", function () { 
      expect(findMode([1,2,2,3,3,2,2,2,1,1,2,2,2,2,2,2])).toEqual(2)
    })
})