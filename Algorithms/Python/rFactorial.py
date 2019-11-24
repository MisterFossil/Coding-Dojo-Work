def rFactorial(num):
    if num == 1:
        return 1
    else:
        return num * rFactorial(num-1)

print(rFactorial(6))