const _ = require('lodash');

const items = [2,[5,[6,[1]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);