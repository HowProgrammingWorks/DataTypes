import Data.Char (isHexDigit, ord)
import Numeric (readInt, readFloat, readOct, readDec, readHex, readSigned)
import Text.Printf (printf)

main = do
  print $ readInt 2 (`elem` "01") (\x -> ord x - ord '0') "11" -- [(3, "")]
   -- The same as 'print (readOct "11")'.
  print $ readOct "11" -- [(9, "")]

  print $ readDec "5" -- [(5, "")]
  print $ readDec "+5" -- []
  print $ readDec "-5" -- []
  print $ readDec "5mm" -- [(5, "mm")]
  print $ readSigned readDec "5" -- [(5, "")]
  print $ readSigned readDec "+5" -- []
  print $ readSigned readDec "-5" -- [(-5, "")]
  print $ readSigned readDec "5mm" -- [(5, "mm")]

  print $ readDec "(5)" -- []
  print $ readDec "\"5\"" -- []
  print $ readDec "[5]" -- []

  print $ readDec "NaN" -- []
  print $ readDec "Infinity" -- []
  print $ readDec "-Infinity" -- []

  -- Type specification is required to resolve the ambiguity of whether we should read Int or Integer.
  print $ readDec "5.1"
  -- 5.1 [(5, ".1")]
  print $ readDec "5.1e50"
  -- 5.1 [(5, ".1e50")]
  print $ readDec "0.000000000005"
  -- [(0, ".000000000005")]
  print $ readDec "0.0000005"
  -- [(0, ".0000005")]
  print $ readDec "0.000005"
  -- [(0, ".0000005")]

  print $ readHex "fF" -- [(255, "")]
  print $ readHex "0xff" -- [(0, "xff")]
  print $ readHex "0xFf" -- [(0, "xFf")]
  print $ readHex "  0xFf   " -- []

  print $ readInt 2 (`elem` "01") (\x -> ord x - ord '0') "ff" -- []
  print $ readOct "ff" -- []
  print $ readDec "ff" -- []
  print $ readHex "ff" -- [(255, "")]

  let readHexDigit x = fst $ head $ readHex [x]
  print $ readInt 16 isHexDigit readHexDigit "ff" -- [(255, "")]
  print $ readInt 17 isHexDigit readHexDigit "ff" -- [(270, "")]
  print $ readInt 20 isHexDigit readHexDigit "ff" -- [(315, "")]
  print $ readInt 30 isHexDigit readHexDigit "ff" -- [(465, "")]
  print $ readInt 31 isHexDigit readHexDigit "ff" -- [(480, "")]
  print $ readInt 32 isHexDigit readHexDigit "ff" -- [(495, "")]
  print $ readInt 33 isHexDigit readHexDigit "ff" -- [(510, "")]
  print $ readInt 34 isHexDigit readHexDigit "ff" -- [(525, "")]
  print $ readInt 35 isHexDigit readHexDigit "ff" -- [(540, "")]
  print $ readInt 36 isHexDigit readHexDigit "ff" -- [(555, "")]
  print $ readInt 37 isHexDigit readHexDigit "ff" -- [(570, "")]

  print $ readFloat "3.14" -- [(3.14, "")]
  print $ readFloat "314e-2" -- [(3.14, "")]
  print $ readFloat "3.14text" -- [(3.14, "text")]
  print $ readFloat "0.0314E+2" -- [(3.14, "")]

  print $ readFloat "5"  -- [(5.0, "")]
  print $ readFloat "5.0" -- [(5.0, "")]
  print $ readFloat "5.0000000000000001" -- [(5.0, "")]

  print $ readFloat "5.1" -- [(5.1, "")]
  print $ readFloat "5.000000000000001" -- [(5.000000000000001, "")]

  print $ readFloat "100" -- [(100, "")]
  print $ readSigned readFloat "-100" -- [(-100, "")]
  print $ readFloat "+100" -- []

  print $ readFloat "5" -- [(5, "")]
  print $ readFloat "+5" -- []
  print $ readFloat "5mm" -- [(5, "mm")]

  print $ readFloat "(5)" -- []
  print $ readFloat "\"5\"" -- []
  print $ readFloat "[5]" -- []

  print $ readFloat "NaN" -- []
  print $ readFloat "Infinity" -- []
  print $ readFloat "-Infinity" -- []
