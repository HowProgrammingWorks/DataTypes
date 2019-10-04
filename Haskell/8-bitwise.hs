import Data.Char (chr, ord)
import Data.Bits ((.&.), (.|.), xor, complement, shift, shiftL, shiftR, rotate)
import Numeric (showIntAtBase, showSigned)
import Text.Printf(printf)

main = do
  let toBinary :: Int -> String
      toBinary n = showSigned (showIntAtBase 2 toBinDigit) 0 n ""
        where toBinDigit d = chr (ord '0' + d)

  let a = 9
      b = 14
      c = -9

  let aBinary = toBinary a
      bBinary = toBinary b
      cBinary = toBinary c

  printf "%v to base 2: %v\n" a aBinary
  printf "%v to base 2: %v\n" b bBinary

  print "Bitwise operators"

  printf "%v .&. %v = %v\n"   a       b $ a .&. b
  printf "%v .&. %v = %v\n"   aBinary bBinary $ toBinary $ a .&. b

  printf "%v .|. %v = %v\n"   a       b $ a .|. b
  printf "%v .|. %v = %v\n"   aBinary bBinary $ toBinary $ a .|. b

  printf "%v `xor` %v = %v\n" a       b $ a `xor` b
  printf "%v `xor` %v = %v\n" aBinary bBinary $ toBinary $ a `xor` b

  printf "complement %v = %v\n"    a $ complement a
  printf "complement %v = %v\n"    aBinary $ toBinary $ complement a

  printf "%v `shiftL` 2 = %v\n"    a $ a `shiftL` 2
  printf "%v `shiftL` 2 = %v\n"    aBinary $ toBinary $ a `shiftL` 2

  printf "%v `shiftR` 2 = %v\n"    b $ b `shiftR` 2
  printf "%v `shiftR` 2 = %v\n"    bBinary $ toBinary $ b `shiftR` 2

  printf "%v `shift` 2 = %v\n"     a $ a `shift` 2
  printf "%v `shift` 2 = %v\n"     aBinary $ toBinary $ a `shift` 2

  printf "%v `shift` (-2) = %v\n"  b $ b `shift` (-2)
  printf "%v `shift` (-2) = %v\n"  bBinary $ toBinary $ b `shift` (-2)

  printf "%v `rotate` 2 = %v\n"    b $ b `rotate` 2
  printf "%v `rotate` 2 = %v\n"    b $ toBinary $ b `rotate` 2

  printf "%v `rotate` (-2) = %v\n" c $ c `rotate` (-2)
  printf "%v `rotate` (-2) = %v\n" c $ toBinary $ c `rotate` (-2)
