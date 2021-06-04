// rem等比适配配置文件
// 基准大小
const baseSize = 192
// 设置 rem 函数
function setRem () {
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
  fontSize()
}

//适配echarts字体为rem
export function fontSize(res){
	let docEl = document.getElement,
		clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clienWidth;
	if(!clientWidth) return;
	let fontSize = 1 * (clientWidth / 1920)
	return res * fontSize
}



export const echartsSize = function (size,defalteWidth = 1920) {
  let docEl = document.documentElement,
    clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
  if (!clientWidth) return;
  let fontSize = (clientWidth / defalteWidth);
  return Number((size*fontSize).toFixed(3));
}

// 设置系统缩放比，适配各分辨率
export function refreshScale(){
  let baseWidth = document.documentElement.clientWidth;
  let baseHeight = document.documentElement.clientHeight;
  let appStyle = document.getElementById('app').style;
  let realRatio = (baseWidth/baseHeight).toFixed(2)
  let designRatio = (16/9).toFixed(2)
  let scaleRate =  baseWidth/1920
  if(realRatio>designRatio){
    scaleRate = baseHeight/1080
  }else {
	scaleRate = 1
  }
  appStyle.transformOrigin = 'left top';
  appStyle.transform=`scale(${scaleRate < 1 ? scaleRate : 1}) translateX(-50%)`;
   // appStyle.transform=`scale(${scaleRate}) translateX(-50%)`;
  // appStyle.width = `${baseWidth/scaleRate}px`
  // appStyle.height = `${baseHeight/scaleRate}px`
}