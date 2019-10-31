def getIndex(aList):
    out = ""
    list2 = []

    for i in range(len(aList)):
        if i != len(aList)-1:                
            if ((aList[i]+1) == aList[i+1]):
                list2.append(aList[i])
            else:
                list2.append(aList[i])
                if len(list2) == 1:
                    out += str(list2[0]) + ','
                else:
                    out += str(list2[0]) + '-' + str(list2[-1]) + ','
                list2 = []
        else:
            list2.append(aList[i])
            if len(list2) == 1:
                out += str(list2[0])
            else:
                out += str(list2[0]) + '-' + str(list2[-1])
            list2 = []


    return out

print(getIndex([1,2,3,9,17,18,19,23]))