import random

def randInt(min=False, max=False):
    if (isinstance(min, bool) and isinstance(max, bool)):
        num = round(random.random()*100)
        return num
    elif (isinstance(min, bool) and isinstance(max, int)):
        num = round(random.random()*max)
        return num
    elif (isinstance(max, bool) and isinstance(min, int)):
        num = round(random.random() * (100-min) + min)
        return num
    else:
        num = round(random.random() * (max-min) + min)
        return num


print("No arguments:",randInt())
print("Only Max:",randInt(max=50))
print("Only Min:", randInt(min=50))
print("Both args:", randInt(min=50,max=500))