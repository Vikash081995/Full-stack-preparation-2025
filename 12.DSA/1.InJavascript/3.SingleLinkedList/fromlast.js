//Given a linked list and integer n  return the element n spaces from the last node in the list.
//Assume that n will always be less than the length of the list.

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
