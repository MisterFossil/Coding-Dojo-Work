import random
unsort = []
numbers = 0
while numbers < 100:
    unsort.append(round(random.random() * 100))
    numbers += 1
# print(unsort)


# unSort = [3,1,4,5,8,7,6,2]

def bubbleSort(aList):
    incrementer = 0
    while incrementer < len(aList):
        for x in range(len(aList)-1-incrementer):
            if aList[x] > aList[x+1]:
                aList[x], aList[x+1] = aList[x+1], aList[x]
        incrementer += 1
    return aList


arr = [1,5,3,2,0,8]
# Michael Choi's Bubble Sort
def choiBubbleSort(arr):
    for j in range(len(arr)-1):
        # print("\n\n", "--"*50, "Iteration",j)
        for i in range(len(arr)-1-j):
            #print("\n","*"*80,"\nindex,", i, "value", arr[i])
            # print("\n","*"*80,"\ncomparing",arr[i], arr[i+1])
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
                # print("swapped",arr[i],arr[i+1])
                # print("array is now",arr)
            # else:
                # print("no need to swap", arr[i], arr[i+1])
    return arr


print(choiBubbleSort(arr))


# print(bubbleSort(unsort))