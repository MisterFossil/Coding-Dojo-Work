# TODO: revisit this one after going through other recursive examples, since this one doesn't work

# take in a string, return all anagrams of the string
# each letter in the string needs to be first at some point
# take the first letter in the list, store it
# then the second letter in the list all the way down to the bottom
# substring needs to keep getting bigger until it equals the same length as the original string


def allAna(myString,inc=0,sub='',ana=''):
    if inc == len(myString):
        return [sub]
    sub = list(myString)
    print(sub)
    for x in range(len(sub)):
        

print(allAna('lim'))