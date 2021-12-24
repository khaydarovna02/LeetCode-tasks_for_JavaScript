// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

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
// variant-1
var mergeTwoLists = function (list1, list2) {
  answer = [];
  if (list1 == [] && list2 == []) answer = [];
  else {
    for (i = 0; i < list1.length; i++) answer.sort().push(list1[i]);
    for (j = 0; j < list2.length; j++) answer.sort().push(list2[j]);
  }
  return answer;
};

// variant-2
var mergeTwoLists = function (list1, list2) {
  var dummy = {
    val: -1,
    next: null,
  };
  var curr = dummy;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return dummy.next;
};

(list1 = []), (list2 = [0]);
console.log(mergeTwoLists(list1, list2));
