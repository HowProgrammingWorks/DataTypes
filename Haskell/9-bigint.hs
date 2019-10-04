import Text.Printf(printf)
import Data.List(sort)

main = do
  let maxInt  = maxBound :: Int
      integer = fromIntegral maxInt :: Integer

  printf "maxInt = %v\n"     (maxInt :: Int)
  printf "maxInt + 1 = %v\n" (maxInt + 1 :: Int)
  printf "maxInt + 2 = %v\n" (maxInt + 2 :: Int)
  putStrLn ""

  printf "maxInt  = %v\n" maxInt
  printf "integer = %v\n" integer
  putStrLn ""

  printf "fromIntegral maxInt == integer: %v\n"
    $  show
    $  fromIntegral maxInt
    == integer
  putStrLn ""

  printf "integer     = %v\n" integer
  printf "integer + 1 = %v\n" $ integer + 1
  printf "integer + 2 = %v\n" $ integer + 2
  putStrLn ""

  printf "15 `div` 3 = %v\n"           (15 `div` 3 :: Int)
  printf "3 `div` 2 = %v\n"            (3 `div` 2 :: Int)
  -- printf "3 / 2 = %v\n" (3 / 2 :: Int)
  -- Doesn't compile because operator / isn't defined for Int and Integer.
  -- let a = 1.5 :: Integer
  -- Doesn't compile because Fractional can't be converted to Integer.

  printf "(1000 ^ 200) / 12321 = %v\n" (1000 ^ 200 `div` 12321 :: Integer)
  putStrLn ""

  let array2 = [3, -2, 7, -5, -1, 2, 5, 0] :: [Integer]
  print array2
  print $ sort array2
  putStrLn ""

  let array1 :: Num a => [a]
      array1 = [-2, 7, 1, 3, -2, 8, 5, -4]
  print (array1 :: [Integer])
  print $ sort (array1 :: [Int])
  print $ sort (array1 :: [Integer])
