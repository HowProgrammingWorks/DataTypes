import Text.Printf(printf)

main = do
  -- Built-in types

  -- Singnature specification '::' is optional.
  -- In the case of ambiguity like Integer vs Int or Double vs Float
  -- default types Integer or Double will be used.
  let integer = 5 :: Integer
      int     = 5 :: Int
      double  = 10.3 :: Double
      float   = 10.3 :: Float
      char    = 'c' :: Char
      string1 = "Hello" :: String -- String and [Char] are the same
      string2 = "Hello" :: [Char] -- String and [Char] are the same
      bool    = True :: Bool

  print integer -- 5
  print int -- 5
  print double -- 10.3
  print float -- 10.3
  print char -- 'c'
  print string1 -- "Hello"
  print string2 -- "Hello"
  print bool -- True

  -- Tuples
  let person          = ("Marcus Aurelius", 121, "Roma", "emperor")
      (_, _, city, _) = person -- _ means discard the value

  print person -- ("Marcus Aurelius", 121, "Roma", "emperor")
  print city -- "Roma"

  let point = (20, 30) :: (Int, Int)
      x     = fst point
      y     = snd point

  print point
  printf "%v %v" x y

  let cities     = ["Athens", "Roma", "London", "Beijing", "Kiev", "Riga"]
      cities'    = cities ++ ["Odessa"] -- ' is the valid character in the name
      cities''   = "New York" : cities'
      cities'''  = tail cities''
      cities'''' = init cities'''

  print cities -- ["Athens","Roma","London","Beijing","Kiev","Riga"]
  print cities' -- ["Athens","Roma","London","Beijing","Kiev","Riga","Odessa"
  print cities'' -- ["New York","Athens","Roma","London","Beijing","Kiev","Riga","Odessa"]
  print cities''' -- ["Athens","Roma","London","Beijing","Kiev","Riga","Odessa"]
  print cities'''' -- ["Athens","Roma","London","Beijing","Kiev","Riga"]
