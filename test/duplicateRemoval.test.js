import removeSome from '../src/duplicateRemoval';

let arr = [2,5,6,33,7,5,6,7,5,4,11,23,42]; // 无效数组
let rst = [2,5,6,33,7,4,11,23,42]; // 去重后的数组
let abRst = [11, 2, 23, 33, 4, 42, 5, 6, 7]; // 去重并按升序排序后的数组

test(`方法1`, () => {
  expect(removeSome(1,arr)).toEqual(rst);
})

test(`方法2`, () => {
  expect(removeSome(2,arr)).toEqual(rst);
})

test(`方法3`, () => {
  expect(removeSome(3,arr)).toEqual(rst);
})

test(`方法4`, () => {
  expect(removeSome(4,arr)).toEqual(rst);
})

test(`方法5`, () => {
  expect(removeSome(5,arr)).toEqual(rst);
})

test(`方法6`, () => {
  expect(removeSome(6,arr)).toEqual(rst);
})

test(`方法7`, () => {
  expect(removeSome(7,arr)).toEqual(rst);
})

// 去重的同时，也排序了[升序]
test(`方法8`, () => {
  expect(removeSome(8,arr)).toEqual(abRst);
})

// 去重的同时，也排序了[升序]
test(`方法9`, () => {
  expect(removeSome(9,arr)).toEqual(abRst);
})

// 去重的同时，也排序了[升序]
test(`方法10`, () => {
  expect(removeSome(10,arr)).toEqual(abRst);
})

// 去重的同时，也排序了[升序]
test(`方法11`, () => {
  expect(removeSome(11,arr)).toEqual(abRst);
})

test(`方法12`, () => {
  expect(removeSome(11,arr)).toEqual(abRst);
})