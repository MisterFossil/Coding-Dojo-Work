def rios(str,sub="",i=0):
    if i == len(str):
        return [sub]
    else:
        return rios(str,sub+str[i],i+1) + rios(str,sub,i+1)

print(rios("abc"))