globalX = 5

main = do
  -- Use the global definition.
  print globalX -- 5

  -- Define a constant localX with the value 6.
  let localX = 6
  print localX -- 6

  -- Multiline let.
  let addX = 7
      newX = localX + addX
  print newX -- 13

  -- Define constants with 'where' syntax.
  let newY = localY + addY
       where
        localY = 8
        addY   = 9

  print newY -- 17
