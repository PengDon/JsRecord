import {mergeArraySimple} from '../src/mergeArray';

let arr1 = [23,66,88];
let arr2 = [44,7,66,77,676];
let rst = [23, 66, 88, 44, 7, 66, 77, 676];

test('方法1 ', () => {
  expect(mergeArraySimple(1,arr1,arr2)).toEqual(rst);
})

test('方法2 ', () => {
  expect(mergeArraySimple(2,arr1,arr2)).toEqual(rst);
})

test('方法3 ', () => {
  expect(mergeArraySimple(3,arr1,arr2)).toEqual(rst);
})

test('方法4 ', () => {
  expect(mergeArraySimple(4,arr1,arr2)).toEqual(rst);
})

test('方法5 ', () => {
  expect(mergeArraySimple(5,arr1,arr2)).toEqual(rst);
})

test('方法6 ', () => {
  expect(mergeArraySimple(6,arr1,arr2)).toEqual(rst);
})
