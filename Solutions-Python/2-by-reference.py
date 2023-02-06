def inc(obj: dict):
  if type(obj).__name__ == 'dict':
    obj['n'] += 1


obj = {'n': 1}
inc(obj)
print(obj)
