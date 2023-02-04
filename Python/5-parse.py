import math

print(0b11) # 3
print(0o11) # 9
print(0x11) # 17

""" 
	print(int('5mm')) will cause Traceback
	print(int('"5"')) will cause Traceback
	print(int('[5]')) will cause Traceback
	print(int('(5)')) will cause Traceback
"""
print(int('+5')) # 5
print(int(5)) # 5

""" 
	print(int(math.inf)) will cause Traceback
	print(int(-math.inf)) will cause Traceback
	print(int('nan')) will cause Traceback
"""

print(5.1, int(5.1)) # 5.1 5
print(5.1 * 1e50, int(5.1 * 1e50)) # 5.1e+50 509999999999999976604263887150692174438365401186304
print(0.000000000005, int(0.000000000005)) # 5e-12 0
print(0.0000005, int(0.0000005)) # 5e-07 0
print(0.000005, int(0.000005)) # 5e-06 0

# 255
print(0xfF)
print(int('0xff', 16))
print(int('0xFf', 16))
print(int('   0xFf   ', 16))

print(0xff) # 255
print(int('ff', 17)) # 270
print(int('ff', 20)) # 315
print(int('ff', 30)) # 465
print(int('ff', 31)) # 480
print(int('ff', 32)) # 495
print(int('ff', 33)) # 510
print(int('ff', 34)) # 525
print(int('ff', 35)) # 540
print(int('ff', 36)) # 555
# print(int('ff', 37)) will cause Traceback

# 3.14
print(float(3.14))
print(float('3.14'))
print(float('314e-2'))
# print(float('3.14text')) will cause Traceback
print(float('0.0314E+2'))

# 5
print(float('5'))
print(float('5.0'))
print(float('5.0000000000000001'))

print(float('5.1')) # 5.1
print(float('5.000000000000001')) # 5.000000000000001

print(float('100')) # 100
print(float('-100')) # -100
print(float('+100')) # 100

print(float(5)) # 5
print(float('5')) # 5
print(float('+5')) # 5
# print(float('5mm')) will cause Traceback

"""
	print(float('(5)')) will cause Traceback
	print(float('"5"')) will cause Traceback
	print(float('[5]')) will cause Traceback
"""

print(float('NaN')) # nan
print(float('Infinity')) # inf
print(float('-Infinity')) # -inf