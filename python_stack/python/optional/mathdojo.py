class MathDojo:
    # What MathDojo has
    def __init__(self):
        self.result = 0

    # What MathDojo can do
    def add(self, num, *nums):
        # Your code here
        if not nums:
            self.result += num
        else:
            self.result += num
            for number in nums:
                self.result += number
        return self

    def subtract(self, num, *nums):
        # Your code here
        if not nums:
            self.result -= num
        else:
            self.result -= num
            for number in nums:
                self.result -= number
        return self

# create an instance:
md = MathDojo()
md2 = MathDojo()

# to test:
x = md.add(4).add(3,2,1).add(1,2,3,4).result
md.add(10).add(10,10,10,10,10,10).subtract(40)
print(x)
print(md.result)

y = md2.subtract(2,4,6).subtract(1,3,5).subtract(10).result
print(y)


