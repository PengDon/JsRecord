// 工具类，通用方法

/**
 * 将数组内任意两个下标的内容互换
 * @param {Array} arr 数组类型
 * @param {number} a 数字大于等于0
 * @param {number} b 数字大于等于0
 */
const swap = (arr,a,b) => [arr[a],arr[b]] = [arr[b],arr[a]];

export {
  swap
}