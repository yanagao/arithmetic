/**
 * 116. 填充每个节点的下一个右侧节点指针
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root === null) return root;
    let newRoot = root;
    while(newRoot.left !== null) {
        let head = newRoot;
        while(head !== null) {
            head.left.next = head.right;
            
            if(head.next !== null) {
                head.right.next = head.next.left;
            }
            head = head.next;
        }
        newRoot = newRoot.left;
    }
    return root;
};