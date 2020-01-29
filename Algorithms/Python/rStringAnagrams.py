# TODO: revisit this one after going through other recursive examples, since this one doesn't work

# take in a string, return all anagrams of the string
# each letter in the string needs to be first at some point
# take the first letter in the list, store it
# then the second letter in the list all the way down to the bottom
# substring needs to keep getting bigger until it equals the same length as the original string

# this is in order substrings recursive, there for ideas possibly
def allAna(myString):
    results = []
    def helper(s,i):
        if len(myString) == i:
            results.append(s)
        else:
            helper(s+myString[i], i+1)
            helper(s,i+1)
    helper("",0)
    return results

print(allAna("lim"))