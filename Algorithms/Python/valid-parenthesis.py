def parenValid(aString):
    count = 0
    for x in range(len(aString)):
        if aString[x] == "(":
            count += 1
        if aString[x] == ")":
            count -= 1
        if count < 0:
            return False
    if count != 0:
        return False
    else:
        return True

# what happens when I make a change to a file that I've tracked?

# interesting, I believe that you can add a file but before you commit, if the file is tracked, git status will tell you that you tracked a file but didn't commit, and then the same file will appear in "changes not staged for commit"

print(parenValid(""))