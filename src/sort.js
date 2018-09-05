// JS 排序算法
const {swap} = require("./utils");

/**
 * @name 冒泡排序
 * @description 原理：依次比较、交换相邻的元素大小
 * 时间复杂度
 * 最优时间复杂度：O(n ^ 2)
 * 最坏时间复杂度：O(n)
 * 稳定性：稳定
 * @param {Array} arr 
 */
const bubbleSort = (arr) =>{
   for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}


const bubbleSort2 = (arr)=>{

}

export {
  bubbleSort
} 