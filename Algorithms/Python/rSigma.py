def rSigma(num):
    if num == 0:
        return 0
    else:
        return num + rSigma(num-1)

print(rSigma(5))