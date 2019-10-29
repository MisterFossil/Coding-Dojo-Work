# 1 - Countdown
def countdown(num):
    downList = []
    for x in range(num,-1,-1):
        downList.append(x)
    return downList

print(countdown(5))

# 2 - Print and Return
def printAndReturn(pnr):
    print(pnr[0])
    return(pnr[1])

a = printAndReturn([1,2])
print(a)

# 2 - First Plus Length
def firstPlusLength(aList):
    return aList[0] + len(aList)

print(firstPlusLength([1,2,3,4,5]))

# 2 - Values Greater than Second
def greaterThanSecond(aList):
    newList = []
    if len(aList) < 3:
        return False
    for num in aList:
        if num > aList[1]:
            newList.append(num)
    if len(newList) < 2:
        return False
    else:
        print(len(newList))
        return newList

print(greaterThanSecond([5,2,3,2,1,4]))

# 3 - This Length, That Value
def lengthValue(size, value):
    newList = []
    x = 0
    while x < size:
        newList.append(value)
        x += 1
    return newList

print(lengthValue(6,2))
    