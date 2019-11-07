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

    def minToFront(self):
        min = self.head.value
        runner = self.head
        min_node = self.head

        while runner.next != None:
            if min > runner.value:
                min = runner.value
                min_node = runner
            runner = runner.next

        if min > runner.value:
            min = runner.value
            min_node = runner

        runner = self.head

        while runner.next != None:
            if runner.next == min_node:
                runner.next = min_node.next
                tmp_node = self.head
                self.head = min_node
                self.head.next = tmp_node
            runner = runner.next

        return self

sll1 = SLL()
sll1.addToFront(5).addToFront(6).addToFront(11).addBack(30)
# this literally clears the SLL from memory since I'm setting the head to the next element, but it works for demonstration purposes
while(sll1.head != None):
    print(sll1.head.value)
    sll1.head = sll1.head.next

sll1.addToFront(5).addToFront(6).addToFront(11).addBack(30).minToFront()
print('*' * 80)

while(sll1.head != None):
    print(sll1.head.value)
    sll1.head = sll1.head.next

