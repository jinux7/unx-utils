const toType = require('../type/toType');
const date2string = function(argDate, argFormatStr,argShowTime) {
  let args = arguments, 
      date = argDate || new Date(), 
      formatStr = argFormatStr,
      showTime = argShowTime,
     result;
  if(args.length===0) formatStr = '-';
  if(args.length===1) {
    if(toType(date)==='string') {
      formatStr = date;
      date = new Date();
    }else if(toType(date)=='date') {
      formatStr = '-';
    }else if(toType(date)==='boolean') {
      date = new Date();
      formatStr = '-';
      showTime = argDate;
    }else {
      return 'arguments error'
    }
  }
  if(args.length===2) {
    if(toType(date)==='date'&&toType(formatStr)==='string') {
      // do nothing
    }else if(toType(date)==='date'&&toType(formatStr)==='boolean') {
      formatStr = '-';
      showTime = argFormatStr;
    }else if(toType(date)==='string'&&toType(formatStr)==='boolean') {
      date = new Date();
      formatStr = argDate;
      showTime = argFormatStr;
    }else {
      return 'arguments error';
    }
  }
  if((args.length>=3)&&(toType(date)!=='date'||toType(formatStr)!='string'||toType(showTime)!='boolean')) {
    return 'arguments error';
  }
  let year = date.getFullYear(),
      month = date.getMonth()+1>9?(date.getMonth()+1):('0'+(date.getMonth()+1)),
      day = date.getDate()>9?(date.getDate()):('0'+(date.getDate()));
  let hour = date.getHours()>9?(date.getHours()):('0'+(date.getHours())),
      minute = date.getMinutes()>9?(date.getMinutes()):('0'+(date.getMinutes())),
      second = date.getSeconds()>9?(date.getSeconds()):('0'+(date.getSeconds()));
  result = year + formatStr + month + formatStr + day;
  if(showTime) result += ' ' + hour + ':' + minute + ':' + second;
  return result;
}

module.exports = date2string;
