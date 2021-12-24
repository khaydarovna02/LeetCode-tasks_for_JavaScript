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
var mergeTwoLists = function (list1, list2) {
  answer = [];
  if (list1 == [] && list2 == []) answer;
  else {
    for (i = 0; i < list1.length; i++) answer.sort().push(list1[i]);
    for (j = 0; j < list2.length; j++) answer.sort().push(list2[j]);
  }
  return answer;
};

(list1 = []), (list2 = [0]);
console.log(mergeTwoLists(list1, list2));
