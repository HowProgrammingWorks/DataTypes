a = 5
print(type(a))

b = 5.2
print(type(b))
#<class 'float'>

print(type(True))
#<class 'bool'>

print(type(2+3j))
#<class 'complex'>

print(type('hello'))
#<class 'str'>


person = {
    'name': 'Rikardo',
    'age': 27,
    'profession': 'actor'
}

person['age'] = 28
print(person)

array = {a, b, '56'}
print('Arrray ', array)
print(type(array))
