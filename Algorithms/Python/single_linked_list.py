class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class SLL:
    def __init__(self):
        self.head = None

    def addToFront(self,value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node
        return self

    def addBack(self,value):
        runner = self.head
        while runner.next != None:
            runner = runner.next
        runner.next = Node(value)
        return self

sll1 = SLL()
sll1.addToFront(5).addToFront(6).addToFront(11).addBack(30)
# this literally clears the SLL from memory since I'm setting the head to the next element, but it works for demonstration purposes
while(sll1.head != None):
    print(sll1.head.value)
    sll1.head = sll1.head.next

