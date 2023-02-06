def countTypes(arr: list) -> dict:
  counters = dict()
  for el in arr:
    _type = type(el).__name__
    counters[_type] = counters.get(_type, 0) + 1
  return counters


arr = [True, 'hello', 5, 12, -200, False, False, 'word']
res = countTypes(arr)

print(res)
