my_dict = {
	'name': 'Marcus',
	'lastname': 'Aurelius',
	'city': 'Rome'
}

print(my_dict) 
# {'name': 'Marcus', 'lastname': 'Aurelius', 'city': 'Rome'}
del my_dict['name']
print(my_dict)
# {'lastname': 'Aurelius', 'city': 'Rome'}

my_list = [123, 23, 32, 43, 34]
print(my_list)
# [123, 23, 32, 43, 34]
del my_list[2]
print(my_list)
# [123, 23, 43, 34]

"""
	In Python we can delete whole variable, because
	variables in python are objects
	This is unsafe, i recommend to not use this
	Delete var syntax:
	a = 'smt'
	del a
"""