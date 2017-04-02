/**
 * @author Shadow Wood
 * @email shadowwood@foxmail.com
 * @create date 2017-04-03 12:00:25
 * @modify date 2017-04-03 12:00:25
 * @desc [description]
*/

/**
 * solution 1 -- simple
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 这是最简单的实现方法，算法复杂度也较高，为O(n^2)
 */
function twoSum1(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++){
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}


/**
 * solution 2 -- use maps
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 这里采用了map的形式使得值查询的时候不用再去遍历数组，算法复杂度为O(n)
 * 
 * 至于这里为了不用es6提供的map对象，因为直接使用Object键值方式会快很多，这里就这涉及到js的特性问题了，
 * 如果有兴趣可以去了解了解
 */
function twoSum2(nums, target) {
  let numsMap = {};
  nums.forEach((num, index) => {
    numsMap.set(num, index);
  });

  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    let anotherNumIndex = numsMap[key];
    if (anotherNumIndex !== undefined) {
      return [i, anotherNumIndex];
    }
  }
}

/**
 * solution 3 -- loop once
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 这里在solution 2的基础上减少了一次循环，直接将查询和map生成操作都放在第一次循环里
 */
function twoSum3(nums, target) {
  let numsMap = {};
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i];
    let anotherNumIndex = numsMap[key];
    if (anotherNumIndex !== undefined) {
      return [anotherNumIndex, i];
    }

    numsMap[nums[i]] = i;
  }
}
