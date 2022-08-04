/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) return false
    let current = head
    let next = head.next
    while (next !== null) {
        if (current === next) {return true}
        if (next.next === null) return false
        current = current.next
        next= next.next.next
    }
    return false
};