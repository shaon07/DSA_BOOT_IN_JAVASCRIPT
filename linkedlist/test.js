import { LinkedList } from "./index.js";

const list = new LinkedList();

list.unshift(1);
list.unshift(2);
list.unshift(3);
list.push(4);
list.insert(10,0);
list.insert(11, 5);
list.insert(12, 2);
list.push(99)
console.log(list.pop())
console.log(list.length);
console.log(list.print);