def isPal(aString):
    for x in range(len(aString)//2):
        if aString[x] != aString[len(aString)-1-x]:
            return False
    return True

print(isPal("racecar"))
print(isPal("illuminati"))
print(isPal("X a X"))