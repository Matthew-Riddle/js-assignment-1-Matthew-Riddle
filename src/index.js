// TODO import solution function from lib.js

import { filter_list } from './lib'

// TODO add some example test cases and log their results to the console

console.log(filter_list([1, 2, 'a', 'b'])) // Answer: [ 1, 2 ]
console.log(filter_list([1, 'a', 'b', 0, 15])) // Answer: [ 1, 0, 15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])) // Answer: [ 1, 2, 123]
