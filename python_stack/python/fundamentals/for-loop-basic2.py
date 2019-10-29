# 1 - Biggie Size
def biggieSize(aList):
    for x in range(len(aList)):
        if aList[x] > 0:
            aList[x] = "big"
    return aList

print(biggieSize([-1,2,5,-5]))

# 2 - Count positives
def countPositives(aList):
    numPos = 0
    for num in aList:
        if num > 0:
            numPos += 1
    aList[-1] = numPos
    return aList

print(countPositives([1,6,-4,-2,-7,-2]))

# 3 - Sum Total
def listSum(aList):
    sum = 0
    for num in aList:
        sum += num
    return sum

print(listSum([6,3,-2]))

# 3 - Average
def listAvg(aList):
    sum = 0
    for num in aList:
        sum += num
    return sum / len(aList)

print(listAvg([1,2,3,4]))

# 2 - Length
def listLength(aList):
    return len(aList)

print(listLength([]))

# 3 - Minimum
def getMin(aList):
    if len(aList) == 0:
        return False
    else:
        min = aList[0]
        for num in aList:
            if min > num:
                min = num
        return min

print(getMin([]))

# 3 - Maximum
def getMax(aList):
    if len(aList) == 0:
        return False
    else:
        max = aList[0]
        for num in aList:
            if max < num:
                max = num
        return max

print(getMax([]))

# 3 - Ultimate Analysis
def ultimateAnalysis(aList):
    analysis = {
        "sumTotal" : listSum(aList),
        "average" : listAvg(aList),
        "minimum" : getMin(aList),
        "maximum" : getMax(aList),
        "length" : listLength(aList)
    }

    return analysis
print(ultimateAnalysis([37,2,1,-9]))

# 2 - Reverse list
def reverseList(aList):
    for x in range(len(aList)//2):
        # tmp = aList[x]
        # aList[x] = aList[-1-x]
        # aList[-1-x] = tmp
        # Refactored form above after learning this exists in python
        aList[x], aList[-1-x] = aList[-1-x], aList[x]
    return aList

print(reverseList([37,2,1,-9,5]))
