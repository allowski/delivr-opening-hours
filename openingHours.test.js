const {describe} = require("mocha");

const {expect} = require('chai');
const assert = require('assert');
const openingHours = require('./openingHours');

describe('opening hours validator', () => {
    it('return true for null openingHours array', function(done) {
        const result = openingHours(null, true);
        if(result === true){
            done();
        }else{
            done('failing test')
        }
    });
    it('return true for an empty openingHours array', function(done) {
        const result = openingHours([], true);
        if(result === true){
            done();
        }else{
            done('failing test')
        }
    });
    it('return true for a valid hour', function(done) {
        const result = openingHours([
            {
                dayOfWeek: 4,
                hours: [
                    {
                        from: 1200,
                        to: 1900
                    }
                ]
            }
        ], true, new Date(2020, 4, 14, 18, 5, 0));
        if(result === true){
            done();
        }else{
            done('failing test')
        }
    });
    it('return false for a invalid hour', function(done) {
        const result = openingHours([
            {
                dayOfWeek: 4,
                hours: [
                    {
                        from: 1200,
                        to: 1900
                    }
                ]
            }
        ], true, new Date(2020, 4, 14, 20, 5, 0));
        if(result === false){
            done();
        }else{
            done('failing test')
        }
    });
});