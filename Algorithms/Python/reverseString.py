def reverseString(str):
    rev = ""
    for x in range(len(str)):
        rev += str[len(str) - x - 1]
    return rev


print(reverseString("This is a string. :esreveR"))