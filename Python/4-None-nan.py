import math
# python has nan and None(null and undefined) values

x = float('nan')
print(x, type(x))
# <class 'float'>

y = None
print(y, type(y))
# <class 'NoneType'>

test1 = math.inf
test2 = -math.inf
print(test1, type(test1))
print(test2, type(test2))
# <class 'float'>
