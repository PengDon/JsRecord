// JS 排序算法
const { swap } = require("./utils");

/**
 * @name 冒泡排序
 * @description 原理：依次比较、交换相邻的元素大小
 * 极端情景：数组是正序或者反序
 * 
 * @param {Array} arr 
 */
const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

/**
 * @name 冒泡排序2
 * @description 原理：每一层的循环都记录上一次排序的位置
 * 
 * @param {Array} arr 
 */
const bubbleSort2 = (arr) => {
  let i = arr.length - 1; // let,最后位置保持不变　　
  while (i > 0) {
    let pos = 0; // 每趟开始时,无记录交换
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j; // 记录交换的位置
        let tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
      }
    }
    i = pos; // 为下一趟排序作准备
  }
  return arr;
}

/**
 * @name 冒泡排序3
 * @description 原理：从两头出发一起计算，双管齐下
 * 
 * @param {Array} arr 
 */
const bubbleSort3 = (arr) => {
  let low = 0;
  let high = arr.length - 1; // 设置变量的初始值
  let tmp, j;
  while (low < high) {
    for (j = low; j < high; ++j) {         // 正向冒泡,找到最大者
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
      }
    }
    --high;  // 修改high值, 前移一位
    for (j = high; j > low; --j) {          // 反向冒泡,找到最小者
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j]; arr[j] = arr[j - 1]; arr[j - 1] = tmp;
      }
    }
    ++low;  // 修改low值,后移一位
  }
  return arr;
}

/**
 * @name 冒泡排序3
 * @description 原理：方法2+方法3
 * 
 * @param {Array} arr 
 */
const bubbleSort4 = (arr) => {
  let low = 0;
  let high = arr.length - 1; // 设置变量的初始值
  let tmp, j;
  while (low < high) {
    let pos1 = 0, pos2 = 0;
    for (let i = low; i < high; ++i) { // 正向冒泡,找到最大者
      if (arr[i] > arr[i + 1]) {
        tmp = arr[i]; arr[i] = arr[i + 1]; arr[i + 1] = tmp;
        pos1 = i;
      }
    }
    high = pos1;// 记录上次位置
    for (let j = high; j > low; --j) { // 反向冒泡,找到最小者
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j]; arr[j] = arr[j - 1]; arr[j - 1] = tmp;
        pos2 = j;
      }
    }
    low = pos2; //修改low值
  }
  return arr;
}

/**
 * @name 选择排序
 * @description 
 * 选择排序适合小数据排序,1000条以内的数据，选择排序更胜冒泡排序
 * 
 * @param {Array} arr 
 */
const selectionSort = (arr) =>{
  let len = arr.length;
  　　let minIndex, temp;
  　　for (let i = 0; i < len - 1; i++) {
  　　　　minIndex = i;
  　　　　for (let j = i + 1; j < len; j++) {
  　　　　　　if (arr[j] < arr[minIndex]) { // 寻找最小的数
  　　　　　　　　minIndex = j; // 将最小数的索引保存
  　　　　　　}
  　　　　}
  　　　　temp = arr[i];
  　　　　arr[i] = arr[minIndex];
  　　　　arr[minIndex] = temp;
  　　}
  　　return arr;
}

export {
  bubbleSort,
  bubbleSort2,
  bubbleSort3,
  bubbleSort4,
  selectionSort,
} 