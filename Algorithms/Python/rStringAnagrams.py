# TODO: revisit this one after going through other recursive examples, since this one doesn't work

# take in a string, return all anagrams of the string
# each letter in the string needs to be first at some point
# take the first letter in the list, store it
# then the second letter in the list all the way down to the bottom
# substring needs to keep getting bigger until it equals the same length as the original string


def allAna(myString,inc=0,sub=''):
    if inc == len(myString):
        return [sub]
    else:
        # takes what's in the substring and you need to call the function enough times
        for inc in range(len(myString)):
            sub += myString[:inc+1]
            print(sub)
            return allAna(myString,inc + 1,sub)
        

print(allAna('lim'))

stri = 'hello'
sStri = stri[2:]
print(sStri)