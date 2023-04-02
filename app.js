const express = require('express');
const ExpressError = require('./expressError');
const { findMean, findMedian, findMode } = require('./stats')

const app = express();

app.get('/mean', function(req, res, next) {
    try {
        const nums = req.query.nums;
        if (!nums) throw new ExpressError("Nums are required!", 400);

        const numsArr = nums.split(",")

        const notNums = numsArr.filter( (value, index, array) => isNaN(value));

        if (notNums.length !== 0) {
            const message = "Invalid inputs: '" + notNums.join(",") + "'. Inputs must be numbers."
            throw new ExpressError(message, 400);
        }

        // at this point, we know that notNums is empty SO numsArr is FULL OF numbers (still strings though!)
        const convertedNums = numsArr.map( value => Number(value) );

        const mean = findMean(convertedNums);

        return res.json({
            response: {
                operation: "mean",
                value: mean
            }
        });
    } catch (err) {
        return next(err);
    }
});

app.get('/median', function(req, res, next) {
    try {
        const nums = req.query.nums;
        if (!nums) throw new ExpressError("Nums are required!", 400);

        const numsArr = nums.split(",")

        const notNums = numsArr.filter( (value, index, array) => isNaN(value));

        if (notNums.length !== 0) {
            const message = "Invalid inputs: '" + notNums.join(",") + "'. Inputs must be numbers."
            throw new ExpressError(message, 400);
        }

        const convertedNums = numsArr.map( value => Number(value) );

        const median = findMedian(convertedNums);
    
        return res.json({
            response: {
                operation: "median",
                value: median
            }
        });
    } catch (err) {
        return next(err);
    }
});

app.get('/mode', function(req, res, next) {
    try {
        const nums = req.query.nums;
        if (!nums) throw new ExpressError("Nums are required!", 400);

        const numsArr = nums.split(",")

        const notNums = numsArr.filter( (value, index, array) => isNaN(value));

        if (notNums.length !== 0) {
            const message = "Invalid inputs: '" + notNums.join(",") + "'. Inputs must be numbers."
            throw new ExpressError(message, 400);
        }

        const convertedNums = numsArr.map( value => Number(value) );

        const mode = findMode(convertedNums);
    
        return res.json({
            response: {
                operation: "mode",
                value: mode
            }
        });
    } catch (err) {
        return next(err);
    }
});

app.use(function(req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError);
});

app.use(function(err, req, res, next) {
    // make default status 500: Internal Server Error
    let status = err.status || 500;
    let message = err.message || "Internal Server Error";

    // alert the user
    return res.status(status).json({
        error: {message, status}
    });
});

app.listen(3000, function() {
    console.log('App on port 3000');
})