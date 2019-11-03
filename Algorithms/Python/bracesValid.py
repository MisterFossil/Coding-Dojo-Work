# TODO: Test this thing

def bracesValid(aString):
    myList = []
    open = ["(","{","["]

    for x in range(len(aString)):
        if aString[x] in open:
            myList.append(aString[x])

        if aString[x] == ")":
            if myList[-1] == "(":
                myList.pop()
        elif aString[x] == "]":
            if myList[-1] == "[":
                myList.pop()
        elif aString[x] == "}":
            if myList[-1] == "{":
                myList.pop()

    if len(myList) > 0:
        return False
    else:
        return True
string1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"
string2 = "D(i{a}l[ T]o)n{e"
string3 = "A(l)s[o (n]o{t) o}k"
string4 = ""

print(bracesValid(string1))
print(bracesValid(string2))
print(bracesValid(string3))
print(bracesValid(string4))