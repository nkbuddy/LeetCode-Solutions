/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list2 === null) return list1
    if (list1 === null) return list2
    
    let head = list1.val < list2.val ? list1 : list2
    let tail = head
    let current1 = list1.val < list2.val ? list1.next : list1
    let current2 = list1.val < list2.val ? list2 : list2.next
    while (current1 !== null && current2 !== null){
        if (current1.val < current2.val) {
            tail.next = current1
            current1 = current1.next
        }
       else {
            tail.next = current2
            current2 = current2.next
        }
        tail = tail.next
    }
    if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;
    return head
};