<br>

## Lists
Lists in Python are an essential data structure for storing and manipulating collections of data. They are ordered, and their values are placed in between square brackets, separated by commas. It is not necessary for the values in a list to be unique, and empty lists do not contain any values within the square brackets. 

<div id="code">
```python 
primes = [2, 3, 5, 7, 11]
print(primes)

empty_list = []
```
</div>
 
<br>
<br>
 
## Adding Lists Together
Lists can be added together in Python using the plus symbol, and the resulting list will contain the same items in the same order, with the first list's items coming first. 

<div id="code">
```python 
items = ['cake', 'cookie', 'bread']
total_items = items + ['biscuit', 'tart']
print(total_items)
# Result: ['cake', 'cookie', 'bread', 'biscuit', 'tart']
```
</div>
  
<br>
<br>
 
## Python Lists: Data Types
Python lists are versatile and can contain multiple different data types within the same square brackets, including numbers, strings, other objects, and even other lists. 

<div id="code">
```python 
numbers = [1, 2, 3, 4, 10]
names = ['Jenny', 'Sam', 'Alexis']
mixed = ['Jenny', 1, 2]
list_of_lists = [['a', 1], ['b', 2]]
```
</div>
  
<br>
<br>
 
## List Method .append()
You can add values to the end of a list using the .append() method, which places the object passed in as a new element at the very end of the list. 

<div id="code">
```python 
orders = ['daisies', 'periwinkle']
orders.append('tulips')
print(orders)
# Result: ['daisies', 'periwinkle', 'tulips']
```
</div>
  
<br>
<br>
 
## Zero-Indexing
The zero-indexing in Python means that list index begins at zero and ends at the length of the list minus one. To access a list element by index, square bracket notation is used.

<div id="code">
```python 
names = ['Roger', 'Rafael', 'Andy', 'Novak']

berries = ["blueberry", "cranberry", "raspberry"]

# square bracket notation
berries[0]   # "blueberry"
berries[2]   # "raspberry"
```
</div>
  
<br>
<br>
 
## Negative List Indices
Negative indices can be used to reference elements in relation to the end of a list. This can be used to access single list elements or as part of defining a list range.

<div id="code">
```python 
soups = ['minestrone', 'lentil', 'pho', 'laksa']
soups[-1]   # 'laksa'
soups[-3:]  # 'lentil', 'pho', 'laksa'
soups[:-2]  # 'minestrone', 'lentil'
```
</div>
  
<br>
<br>
 
## Modifying 2D Lists
In order to modify elements in a 2D list, an index for the sublist and the index for the element of the sublist need to be provided. 

<div id="code">
```python 
# A 2D list of names and hobbies
class_name_hobbies = [["Jenny", "Breakdancing"], ["Alexus", "Photography"], ["Grace", "Soccer"]]

# The sublist of Jenny is at index 0. The hobby is at index 1 of the sublist. 
class_name_hobbies[0][1] = "Meditation"
print(class_name_hobbies)

# Output
# [["Jenny", "Meditation"], ["Alexus", "Photography"], ["Grace", "Soccer"]]
```
</div>
  
<br>
<br>
 
## Accessing 2D Lists
To access elements in a 2D list, an index for the sublist and the index for the element of the sublist both need to be provided. 

<div id="code">
```python 
# 2D list of people's heights
heights = [["Noelle", 61], ["Ali", 70], ["Sam", 67]]

# Access the sublist at index 0, and then access the 1st index of that sublist. 
noelles_height = heights[0][1] 
print(noelles_height)

# Output
# 61
```
</div>
  
<br>
<br>
 
## List Method .remove()
The .remove() method is used to remove an element from a list by passing in the value of the element to be removed as an argument.

<div id="code">
```python 
# Create a list
shopping_line = ["Cole", "Kip", "Chris", "Sylvana", "Chris"]
 
# Removes the first occurance of "Chris"
shopping_line.remove("Chris")
print(shopping_line)

# Output
# ["Cole", "Kip", "Sylvana", "Chris"]
```
</div>
  
<br>
<br>
 
## List Method .count()
The .count() Python list method searches a list for whatever search term it receives as an argument, then returns the number of matching entries found.

<div id="code">
```python 
backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']
numPen = backpack.count('pen')

print(numPen)
# Output: 3
```
</div>
  
<br>
<br>
 
## Determining List Length with len()
The Python len() function can be used to determine the number of items found in the list it accepts as an argument.

<div id="code">
```python 
knapsack = [2, 4, 3, 7, 10]
size = len(knapsack)
print(size) 
# Output: 5
```
</div>
  
<br>
<br>
 
## List Method .sort()
The .sort() Python list method will sort the contents of whatever list it is called on. Numerical lists will be sorted in ascending order, and lists of Strings will be sorted into alphabetical order. It modifies the original list, and has no return value.

<div id="code">
```python 
exampleList = [4, 2, 1, 3]
exampleList.sort()
print(exampleList)
# Output: [1, 2, 3, 4]
```
</div>

<br>
<br>
 
## List Slicing
A slice, or sub-list of Python list elements can be selected from a list using a colon-separated starting and ending point.
When slicing a list, a new list is returned, so if the slice is saved and then altered, the original list remains the same.

<div id="code">
```python 
tools = ['pen', 'hammer', 'lever']
tools_slice = tools[1:3] # ['hammer', 'lever']
tools_slice[0] = 'nail'

# Original list is unaltered:
print(tools) # ['pen', 'hammer', 'lever']
```
</div>

<br>
<br>
 
## sorted() Function
The Python sorted() function accepts a list as an argument, and will return a new, sorted list containing the same elements as the original. Numerical lists will be sorted in ascending order, and lists of Strings will be sorted into alphabetical order. It does not modify the original, unsorted list.

<div id="code">
```python 
unsortedList = [4, 2, 1, 3]
sortedList = sorted(unsortedList)
print(sortedList)
# Output: [1, 2, 3, 4]
```
</div>

<br>
<br>
 
## List Method .insert()
The Python list method .insert() allows us to add an element to a specific index in a list.
It takes in two inputs:
- The index that you want to insert into.
- The element that you want to insert at the specified index.

<div id="code">
```python 
# Here is a list representing a line of people at a store
store_line = ["Karla", "Maxium", "Martim", "Isabella"]

# Here is how to insert "Vikor" after "Maxium" and before "Martim"
store_line.insert(2, "Vikor")

print(store_line) 
# Output: ['Karla', 'Maxium', 'Vikor', 'Martim', 'Isabella']
```
</div>

<br>
<br>
 
## List Method .pop()
The .pop() method allows us to remove an element from a list while also returning it. It accepts one optional input which is the index of the element to remove. If no index is provided, then the last element in the list will be removed and returned.

<div id="code">
```python 
cs_topics = ["Python", "Data Structures", "Balloon Making", "Algorithms", "Clowns 101"]

# Pop the last element
removed_element = cs_topics.pop()

print(cs_topics)
print(removed_element)

# Output:
# ['Python', 'Data Structures', 'Balloon Making', 'Algorithms']
# 'Clowns 101'

# Pop the element "Baloon Making"
cs_topics.pop(2)
print(cs_topics)

# Output:
# ['Python', 'Data Structures', 'Algorithms']

```
</div>

<br>
<br>
<br>

### Press SPACE to continue
### Press ESC to exit
<br>
<br>
<br>
<br>
<br>