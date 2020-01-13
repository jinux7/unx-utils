const assert = require('assert');
const bomModule = require('../../src/bom/browser');
const bomAjax = require('../../src/bom/ajax');

describe('#bom.js', () => {
    describe('#bomAjax()', () => {
        it('bomAjax() should do ajax request', (done) => {
            bomAjax({
                // 此地址是网络上找的测试地址，有可能不好使
                url: 'http://www.blogzl.com/zl_other_module/ajaxTest/getTest.php',
                type: 'GET',
                success: function(res) {
                    res = JSON.parse(res);
                    if(res.code === 200) {
                        done();
                    }else {
                        done('request error');
                    }
                },
                error: function() {
                    done('net error');
                }
            });
        });
    });
});