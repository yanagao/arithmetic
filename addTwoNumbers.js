/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 数组转链表
// var arr2list = function(arr) {
//     let nodes = [];
//     for (let i = 0; i < arr.length; i++) {
//         let node = {};
//         node.val = arr[i];
//         node.next = null;
//         nodes.push(node);
//     }
//     for (let j = 0; j < nodes.length - 1; j++) {
//         nodes[j].next = nodes[j + 1];
//     }
//     return nodes[0];
// }
// // 处理链表变数组，再变number
// var handleArr = function(listNode) {
//     let arr = [];
//     let p = listNode;
//     while(p) {
//         arr.push(p.val);
//         p = p.next;
//     }
//     const list2arr = parseInt(JSON.stringify(reverseArr(arr)).replace(/,/g, "").replace("[", "").replace("]", ""));

//     return list2arr;
// }

// // 反转数组
// var reverseArr = function(arr) {
//     let addTwoNumbersArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         addTwoNumbersArr.unshift(parseInt(arr[i]));
//     }

//     return addTwoNumbersArr;
// } 

// var addTwoNumbers = function(l1, l2) {
//     let sum = handleArr(l1) + handleArr(l2);
//     return arr2list(reverseArr(sum.toString().split("")));
// };
var addTwoNumbers = function(l1, l2) {
    let head = null;
    let tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if(!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum & 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if(l1) {
            l1 = l1.next;
        }
        if(l2) {
            l2 = l2.next;
        }
    }
    if(carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
}
