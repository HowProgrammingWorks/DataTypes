#print(a)
#NameError: name 'a' is not defined

a = 5
print(a)
type(a)
#<class 'int'>

b = 5.2

dic = {'d': a, 'c': b}
#obj 
print("Dictionary is: ", dic)

dic['c'] = 10
print("Dictionary has been changed: ", dic)
