# Two Sum

## Question
Given an array of integers, return `indices` of the two numbers such that they add up to a specific target.

You may assume that each input would have `exactly` one solution, and you may not use the same element twice.

Example:

    Given nums = [2, 7, 11, 15], target = 9,

    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].

## Solution

+ [javascript](./javascript/TwoSum.js)

解决的基本都是三种方案

1. 最暴力简单的两个循环嵌套，算法复杂度高；
2. 使用map 键值对的方式优化查询的操作，先遍历数组生成键值对，然后再遍历数组并查询是否存在与target与其的差值；
3. 在2的基础上优化，将键值对的生成和查询操作都放在一个循环里，只需遍历一次数组；

特别说明：
+ js 中使用es6并在Node.js的环境下运行的，因为在Node.js中只要有函数回调的地方都是异步的方式，所以方案2中使用数组的forEach方法去生成键值对会节约很多时间，所以如果需要遍历的数组大小不是很大时，会出现方案2可能与方案3的所花时间差不多甚至特殊情况下会比方案3稍微节约一些时间。
