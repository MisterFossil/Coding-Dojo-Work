def rGCF(num1,num2):
	if num1 > num2:
		num1 -= num2
		return rGCF(num1, num2)
	if num2 > num1:
		num2 -= num1
		return rGCF(num1, num2)
	if num1 == num2:
		return num1

print(rGCF(200,48))