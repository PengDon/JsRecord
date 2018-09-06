/**
 * @name 数组去重
 *
 * @param {number} model
 * @param {Array} arr
 */
const removeSome = (model, arr) => {
  let newArr = [];
  switch (model) {
    case 1:
      // 使用了ES6新增的set数据解构的去重特性，然后在将生成的set对象转换成数组d
      newArr = Array.from(new Set(arr));
      break;
    case 2:
      // 双层循环，外层循环元素，内层循环时比较值,如果有相同的值则跳过，不相同则push进数组
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            arr.splice(j, 1);
            j--;
          }
        }
      }
      newArr = arr;
      break;
    case 3:
      // 借助indexOf()方法判断此元素在该数组中首次出现的位置下标与循环的下标是否相等
      for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != i) {
          arr.splice(i, 1); // 删除数组元素后数组长度减1后面的元素前移
          i--; // 数组下标回退
        }
      }
      newArr = arr;
      break;
    case 4:
      // 利用数组中的filter方法
      newArr = arr.filter(function (element, index, self) {
        return self.indexOf(element) === index;
      });
      break;
    case 5:
      // 借助新数组 通过indexOf方判断当前元素在数组中的索引如果与循环的下标相等则添加到新数组中
      let ret = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == i) {
          ret.push(arr[i]);
        }
      }
      newArr = ret;
      break;
    case 6:
      // 利用空对象来记录新数组中已经存储过的元素
      let o = {};
      let ttt = [];
      for (let i = 0; i < arr.length; i++) {
        let k = arr[i];
        if (!o[k]) {
          o[k] = true;
          ttt.push(k);
        }
      }
      newArr = ttt;
      break;
    case 7:
      // 借助新数组  判断新数组中是否存在该元素如果不存在则将此元素添加到新数组中
      let t = [];
      for (let i = 0; i < arr.length; i++) {
        if (t.indexOf(arr[i]) == -1) {
          t.push(arr[i]);
        }
      }
      newArr = t;
      break;
    case 8:
      // (原数组长度不变但被按字符串顺序排序) 借助新数组  判断新数组中是否存在该元素如果不存在则将此元素添加到新数组中
      let tt = [],
        end; // 临时变量用于对比重复元素
      arr.sort(); // 将数重新组排序
      end = arr[0];
      tt.push(arr[0]);
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] != end) { // 当前元素如果和临时元素不等则将此元素添加到新数组中
          tt.push(arr[i]);
          end = arr[i];
        }
      }
      newArr = tt;
      break;
    case 9:
      // (此方法没有借助新数组直接改变原数组,并且去重后的数组被排序)
      let _end; // 临时变量用于对比重复元素
      arr.sort(); // 将数重新组排序
      _end = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] == _end) { // 当前元素如果和临时元素相等则将此元素从数组中删除
          arr.splice(i, 1);
          i--;
        } else {
          _end = arr[i];
        }
      }
      newArr = arr;
      break;
    case 10:
      // (双层循环改变原数组)
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[i] == arr[j] && i != j) {//将后面重复的数删掉
            arr.splice(j, 1);
          }
        }
      }
      newArr = arr;
      break;
    case 11:
      // (借助新数组)
      for (let i = 0; i < arr.length; i++) {
        let repArr = []; // 接收重复数据后面的下标
        // 内层循环找出有重复数据的下标
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] == arr[j]) {
            repArr.push(j); // 找出后面重复数据的下标
          }
        }
        //console.log(repArr);
        if (repArr.length == 0) { // 若重复数组没有值说明其不是重复数据
          newArr.push(arr[i]);
        }
      }
      break;
    case 12:
      // 数组递归去重,运用递归的思想,先排序，然后从最后开始比较，遇到相同，则删除
      let len = arr.length;
      arr.sort((a, b) => {  //对数组进行排序才能方便比较
        return a - b;
      })
      const loop = (index) => {
        if (index >= 1) {
          if (arr[index] === arr[index - 1]) {
            arr.splice(index, 1);
          }
          loop(index - 1); //递归loop函数进行去重
        }
      }
      loop(len - 1);
      newArr = arr;
      break;
    case 13:
      // 利用indexOf以及forEach
      let result = [];
      arr.forEach((v, i, arr) => {  // 这里利用map，filter方法也可以实现
        let bool = arr.indexOf(v, i + 1);  // 从传入参数的下一个索引值开始寻找是否存在重复
        if (bool === -1) {
          result.push(v);
        }
      })
      newArr = result;
      break;

    default:
      break;
  }

  return newArr;
}

export default removeSome;