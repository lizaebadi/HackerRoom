## Comments
Comments are used in Python to provide additional information about the code. The # character is used to start a comment that continues until the end of the line. 

```python
# Comment on a single line

user = "JDoe" # Comment after code
```

## Arithmetic Operations
Arithmetic operations in Python include addition, subtraction, multiplication, division, modulus, and exponentiation. The primary arithmetic operators are:
- + for addition
- - for subtraction
- * for multiplication
- / for division
- % for modulus (returns the remainder)
- ** for exponentiation
Python also has the += operator that adds a value to an existing variable and assigns the new value back to the same variable. 

```python
# Arithmetic operations

result = 10 + 30
result = 40 - 10
result = 50 * 5
result = 16 / 4
result = 25 % 2
result = 5 ** 3

# Plus-Equal Operator

counter = 0
counter += 10

# This is equivalent to

counter = 0
counter = counter + 10
```

## Variables
Variables in Python store data that will be used by the program and can be assigned using the equal sign =. 

```python
# These are all valid variable names and assignment

user_name = "codey"
user_id = 100
verified = False

# A variable's value can be changed after assignment

points = 100
points = 120
```

## Modulo Operator
A modulo calculation in Python returns the remainder of a division between the first and second number. 

```python
# Modulo operations

zero = 8 % 4

nonzero = 12 % 5
```

## Integers
An integer in Python is a whole number without a fractional part.

```python
# Example integer numbers

chairs = 4
tables = 1
broken_chairs = -2
sofas = 0
```

## Floating-point Numbers
A floating point number is a value that contains a decimal portion. It can be used to represent numbers that have fractional quantities. 

```python
# Floating point numbers

pi = 3.14159
meal_cost = 12.99
tip_percent = 0.20
```

## Strings
A string in Python is a sequence of characters enclosed by quotation marks, and the backslash character \ can be used to indicate that the string continues on the next line.

```python
user = "User Full Name"
game = 'Monopoly'

longer = "This string is broken up \
over multiple lines"
```

## String Concatenation
Python supports string concatenation using the + operator.

```python
# String concatenation

first = "Hello "
second = "World"

result = first + second

# this is equivalent to the string: "Hello World!"
long_result = first + second + "!"
```

## Errors
Errors in Python code are reported by the Python interpreter, including SyntaxError and ZeroDivisionError.

```python
if False ISNOTEQUAL True:
                  ^
SyntaxError: invalid syntax
```

## print() Function
The print() function is used to output text, numbers, or other printable information to the console.

```python
print("Hello World!")

print(100)

pi = 3.14159
print(pi)
```



