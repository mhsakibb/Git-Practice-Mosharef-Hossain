from utils import add, subtract, multiply, divide, power, mod, square_root
from datetime import date

print("Name: Mosharef Hossain")
print("Today's date:", date.today())

# Test calculator functions
print("5 + 3 =", add(5, 3))
print("10 - 4 =", subtract(10, 4))
print("5 * 3 =", multiply(5, 3))
print("5 / 0 =", divide(5, 0))
print("2 ^ 3 =", power(2, 3))
print("10 % 3 =", mod(10, 3))
print("sqrt(16) =", square_root(16))