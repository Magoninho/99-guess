number = 0b0000000

def set_bit(value, bit):
    return value | (1<<bit)

number = set_bit(1, 0)
print(number)

for i in range(7):
	answer = int(input("yes(1) no(0): "))

	number = set_bit(answer, i)

print(number)