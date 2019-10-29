def acronyms(str):
    acros = ""
    for x in range(len(str)):
        if (x == 0):
            acros += str[0]
        if (str[x-1] == " "):
            acros += str[x]
    return acros.upper()
    
print(acronyms("FIrst Second Third Fourth"))