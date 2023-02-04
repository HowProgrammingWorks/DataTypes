a = 9
b = 14
c = -9

a_binary = bin(a)
b_binary = bin(b)
c_binary = bin(c)

print(a, 'to base 2:', a_binary)
print(b, 'to base 2:', b_binary)
print(c, 'to base 2:', c_binary)

print('Bitwise operators:\n')

print(a, '&', b, '=', a & b)
print(a_binary, '&', b_binary, '=', bin(a & b), '\n')

print(a, '|', b, '=', a | b)
print(a_binary, '|', b_binary, '=', bin(a | b), '\n')

print(a, '^', b, '=', a ^ b)
print(a_binary, '^', b_binary, '=', bin(a ^ b), '\n')

print(f"~{a} = {~a}")
print(f"~{a_binary} = {bin(~a)}\n")

print(b, '>>', 2, '=', b >> 2)
print(b_binary, '>>', 2, '=', bin(b >> 2), '\n')

print(b, '<<', 2, '=', b << 2)
print(b_binary, '<<', 2, '=', bin(b << 2), '\n')