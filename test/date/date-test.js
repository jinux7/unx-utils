const assert = require('assert');
const dateModule = require('../../src/date/index.js');

describe('#date.js', () => {
    describe('#date2string()', () => {
        it('date2string() should return date string', () => {
            let date = new Date(), today;
            let year = date.getFullYear(),
                month = date.getMonth()+1>9?(date.getMonth()+1):('0'+(date.getMonth()+1)),
                day = date.getDate()>9?(date.getDate()):('0'+(date.getDate()));
            today = year + '-' + month + '-' + day;
            assert.strictEqual(dateModule.date2string(new Date(),'-',false), today);
        });
    });
    describe('#getRangeDate()', () => {
        it('getRangeDate() should return date string', () => {
            let date = new Date(), today;
            let year = date.getFullYear(),
                month = date.getMonth()+1>9?(date.getMonth()+1):('0'+(date.getMonth()+1)),
                day = date.getDate()>9?(date.getDate()):('0'+(date.getDate()));
            today = year + '-' + month + '-' + day;
            assert.deepEqual(dateModule.getRangeDate('today', '-'), [today,today]);
        });
    });
});