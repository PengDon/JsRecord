import { 
  bubbleSort, 
  bubbleSort2, 
  bubbleSort3 ,
  bubbleSort4,
  selectionSort,
} from '../src/sort';

let nums = [1, 43, 65, 33, 2, 5, 6, 8, 112, 4, 21, 63, 30, 9]; // 无序数组
let rst = [1, 2, 4, 5, 6, 8, 9, 21, 30, 33, 43, 63, 65, 112];  // 正序数组

test(`冒泡排序`, () => {
  expect(bubbleSort(nums)).toEqual(rst);
});

test(`冒泡排序2`, () => {
  expect(bubbleSort2(nums)).toEqual(rst);
});

test(`冒泡排序3`, () => {
  expect(bubbleSort3(nums)).toEqual(rst);
});

test(`冒泡排序4`, () => {
  expect(bubbleSort4(nums)).toEqual(rst);
});

test(`选择排序`, () => {
  expect(selectionSort(nums)).toEqual(rst);
});