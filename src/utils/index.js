/**
 * @param {Function} fn 防抖函数
 * @param {Number} delay 延迟时间
 */
export function debounce(fn, delay) {
  var timer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}

/**
 * @param {date} time 需要转换的时间
 * @param {String} fmt 需要转换的格式 如 yyyy-MM-dd、yyyy-MM-dd HH:mm:ss
 */
export function formatTime(time, fmt) {
  if (!time) return '';
  else {
    const date = new Date(time);
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds(),
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
}
/**
 * 字符串截取
 * @param {Object} value
 */
export function wordLength(value){
	var ret = ""; //拼接加\n返回的类目项
	var maxLength = 3; //每项显示文字个数
	var valLength = value.length; //X轴类目项的文字个数
	var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
	if (rowN > 1) 
	{
	    for (var i = 0; i < rowN; i++) {
	        var temp = ""; //每次截取的字符串
	        var start = i * maxLength; //开始截取的位置
	        var end = start + maxLength; //结束截取的位置
			
	        temp = value.substring(start, end) + (i=== rowN - 1 ? '' : "\n") ;
	        ret += temp; 
	    }
	    return ret;
	} else {
	    return value;
	}
}
/**
 * 千位符
 * @param {Object} num
 */
export function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}
