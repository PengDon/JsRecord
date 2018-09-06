
/**
 * @name 数组合并[简单数据结构一维数组]
 * @description 预先判断两个数组哪个更大，然后使用大数组合并小数组，这样就减少了数组元素操作的次数
 * @param {number} model
 * @param {Array} arr1
 * @param {Array} arr2
 */
const mergeArraySimple = (model, arr1, arr2) => {
  // 深度拷贝数组，避免变量污染
  let newArr = arr1.concat();
  switch (model) {
    case 1:
      // 当数据比较大的时候比较耗内存
      // 不希望原数组改变,concat() 方法将传入的数组或非数组值与原数组合并,组成一个新的数组并返回
      return newArr.concat(arr2);
      break;
    case 2:
      // 比方法1内存占用更小
      for (let i in arr2) {
        newArr.push(arr2[i]);
      }
      return newArr;
      break;
    case 3:
      // 该方法优点是不会产生一个新的数组
      newArr.push.apply(newArr, arr2);
      // 或
      // newArr.unshift.apply(newArr,arr2);
      return newArr;
      break;
    case 4:
      //  ES6的spead操作, push 把arr2的数据放在后面
      newArr.push(...arr2);
      // 或 unshift 把arr2的数据放在前面
      // newArr.unshift(...arr2);
      return newArr;
      break;
    case 5:
      newArr.push.call(newArr, ...arr2)
      return newArr;
      break;
    case 6:
      newArr = arr2.reduce(function (coll, item) { coll.push(item); return coll;}, newArr);
      return newArr;
      break;

    default:
      break;
  }

}

export {
  mergeArraySimple
}