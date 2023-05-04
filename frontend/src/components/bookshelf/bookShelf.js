import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Bookshelf() {
  const [page, setPage] = useState("helloWorld");
  const navigate = useNavigate();
 

  function handleKeyDown(event) {
    if (event.code === "Space") {
      if (page === "helloWorld") {
        setPage("controlFlow");
      } else if (page === "controlFlow") {
        setPage("lists");
      } else if (page === "lists") {
        setPage("loops");
      } else if (page === "outro") {
        navigate("/game");  
      }
    }
    if (event.code === "Escape") {
      navigate("/game");
    }
}


  useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
  });

  return (
    <div>
      {page === "helloWorld" && (
    <div>
      <h2>Comments</h2>
      <p>Comments are used in Python to provide additional information about the code. The # character is used to start a comment that continues until the end of the line.</p>
      <pre><code class="language-python"># Comment on a single line

      user = &quot;JDoe&quot; # Comment after code
      </code></pre>
      <h2>Arithmetic Operations</h2>
      <p>Arithmetic operations in Python include addition, subtraction, multiplication, division, modulus, and exponentiation. The primary arithmetic operators are:</p>
      <ul>
      <li>
      <ul>
      <li>for addition</li>
      </ul>
      </li>
      <li>
      <ul>
      <li>for subtraction</li>
      </ul>
      </li>
      <li>
      <ul>
      <li>for multiplication</li>
      </ul>
      </li>
      <li>/ for division</li>
      <li>% for modulus (returns the remainder)</li>
      <li>** for exponentiation
      Python also has the += operator that adds a value to an existing variable and assigns the new value back to the same variable.</li>
      </ul>
      <pre><code class="language-python"># Arithmetic operations

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
      </code></pre>
      <h2>Variables</h2>
      <p>Variables in Python store data that will be used by the program and can be assigned using the equal sign =.</p>
      <pre><code class="language-python"># These are all valid variable names and assignment

      user_name = &quot;codey&quot;
      user_id = 100
      verified = False

      # A variable's value can be changed after assignment

      points = 100
      points = 120
      </code></pre>
      <p>## Modulo Operator
      A modulo calculation in Python returns the remainder of a division between the first and second number.</p>
      <pre><code class="language-python"># Modulo operations

      zero = 8 % 4

      nonzero = 12 % 5
      </code></pre>
      <h2>Integers</h2>
      <p>An integer in Python is a whole number without a fractional part.</p>
      <pre><code class="language-python"># Example integer numbers

      chairs = 4
      tables = 1
      broken_chairs = -2
      sofas = 0
      </code></pre>
      <h2>Floating-point Numbers</h2>
      <p>A floating point number is a value that contains a decimal portion. It can be used to represent numbers that have fractional quantities.</p>
      <pre><code class="language-python"># Floating point numbers

      pi = 3.14159
      meal_cost = 12.99
      tip_percent = 0.20
      </code></pre>
      <h2>Strings</h2>
      <p>A string in Python is a sequence of characters enclosed by quotation marks, and the backslash character \ can be used to indicate that the string continues on the next line.</p>
      <pre><code class="language-python">user = &quot;User Full Name&quot;
      game = 'Monopoly'

      longer = &quot;This string is broken up \
      over multiple lines&quot;
      </code></pre>
      <h2>String Concatenation</h2>
      <p>Python supports string concatenation using the + operator.</p>
      <pre><code class="language-python"># String concatenation

      first = &quot;Hello &quot;
      second = &quot;World&quot;

      result = first + second

      # this is equivalent to the string: &quot;Hello World!&quot;
      long_result = first + second + &quot;!&quot;
      </code></pre>
      <h2>Errors</h2>
      <p>Errors in Python code are reported by the Python interpreter, including SyntaxError and ZeroDivisionError.</p>
      <pre><code class="language-python">if False ISNOTEQUAL True:
                        ^
      SyntaxError: invalid syntax
      </code></pre>
      <h2>print() Function</h2>
      <p>The print() function is used to output text, numbers, or other printable information to the console.</p>
      <pre><code class="language-python">print(&quot;Hello World!&quot;)

      print(100)

      pi = 3.14159
      print(pi)
      </code></pre>

    </div>
      )} 
      {page === "controlFlow" && (
        <div>
          <h2>if Statement</h2>
          <p>The Python if statement is used to determine the execution of code based on the evaluation of a Boolean expression. If the if statement expression evaluates to True, then the indented code following the statement is executed. If the expression evaluates to False then the indented code following the if statement is skipped and the program executes the next line of code which is indented at the same level as the if statement.</p>
          <pre><code class="language-python"># if Statement

          test_value = 100

          if test_value &gt; 1:
            # Expression evaluates to True
            print(&quot;This code is executed!&quot;)

          if test_value &gt; 1000:
            # Expression evaluates to False
            print(&quot;This code is NOT executed!&quot;)

          print(&quot;Program continues at this point.&quot;)
          </code></pre>
          <h2>else Statement</h2>
          <p>The Python else statement provides alternate code to execute if the expression in an if statement evaluates to False. The indented code for the if statement is executed if the expression evaluates to True. The indented code immediately following the else is executed only if the expression evaluates to False.</p>
          <pre><code class="language-python"># else Statement

          test_value = 50

          if test_value &lt; 1:
            print(&quot;Value is &lt; 1&quot;)
          else:
            print(&quot;Value is &gt;= 1&quot;)

          test_string = &quot;VALID&quot;

          if test_string == &quot;NOT_VALID&quot;:
            print(&quot;String equals NOT_VALID&quot;)
          else:
            print(&quot;String equals something else!&quot;)
          </code></pre>
          <h2>elif Statement</h2>
          <p>The Python elif statement allows for continued checks to be performed after an initial if statement. An elif statement differs from the else statement because another expression is provided to be checked, just as with the initial if statement. Once an elif expression evaluates to True, no further elif statements are executed.</p>
          <pre><code class="language-python"># elif Statement

          pet_type = &quot;fish&quot;

          if pet_type == &quot;dog&quot;:
            print(&quot;You have a dog.&quot;)
          elif pet_type == &quot;cat&quot;:
            print(&quot;You have a cat.&quot;)
          elif pet_type == &quot;fish&quot;:
            # this is performed
            print(&quot;You have a fish&quot;)
          else:
            print(&quot;Not sure!&quot;)
          </code></pre>
          <h2>Equal Operator ==</h2>
          <p>The equal operator, ==, is used to compare two values, variables or expressions to determine if they are the same. The operator takes the data type into account when making the comparison, so a string value of &quot;2&quot; is not considered the same as a numeric value of 2. The equal operator can be used in if statements to check if two values are equal.</p>
          <pre><code class="language-python">
          # Equal operator

          if 'Yes' == 'Yes':
            # evaluates to True
            print('They are equal')

          if (2 &gt; 1) == (5 &lt; 10):
            # evaluates to True
            print('Both expressions give the same result')

          c = '2'
          d = 2

          if c == d:
            print('They are equal')
          else:
            print('They are not equal')
          </code></pre>
          <h2>Not Eauals Operator !=</h2>
          <p>The Python not equals operator, !=, is used to compare two values, variables or expressions to determine if they are NOT the same. If they are NOT the same, the operator returns True. If they are the same, then it returns False. The operator takes the data type into account when making the comparison, so a value of 10 would NOT be equal to the string value &quot;10&quot; and the operator would return True.</p>
          <pre><code class="language-python">
          # Not Equals Operator

          if &quot;Yes&quot; != &quot;No&quot;:
            # evaluates to True
            print(&quot;They are NOT equal&quot;)

          val1 = 10
          val2 = 20

          if val1 != val2:
            print(&quot;They are NOT equal&quot;)

          if (10 &gt; 1) != (10 &gt; 1000):
            # True != False
            print(&quot;They are NOT equal&quot;)
          </code></pre>
          <h2>Comparison Operators</h2>
          <p>In Python, relational operators compare two values or expressions. If the relation is sound, then the entire expression will evaluate to True. If not, the expression evaluates to False. Relational operators include less than, greater than, less than or equal to, and greater than or equal to.</p>
          <pre><code class="language-python">
          a = 2
          b = 3
          a &lt; b  # evaluates to True
          a &gt; b  # evaluates to False
          a &gt;= b # evaluates to False
          a &lt;= b # evaluates to True
          a &lt;= a # evaluates to True
          </code></pre>
          <h2>Boolean Values</h2>
          <p>Booleans are a data type in Python, much like integers, floats, and strings. However, booleans only have two values:</p>
          <ul>
          <li>True</li>
          <li>False
          Specifically, these two values are of the bool type. Since booleans are a data type, creating a variable that holds a boolean value is the same as with other data types.</li>
          </ul>
          <pre><code class="language-python">is_true = True
          is_false = False

          print(type(is_true)) 
          # will output: &lt;class 'bool'&gt;
          </code></pre>
          <h2>not Operator</h2>
          <p>The Python Boolean not operator is used in a Boolean expression in order to evaluate the expression to its inverse value. If the original expression was True, including the not operator would make the expression False, and vice versa.</p>
          <pre><code class="language-python">
          not True     # Evaluates to False
          not False    # Evaluates to True
          1 &gt; 2        # Evaluates to False
          not 1 &gt; 2    # Evaluates to True
          1 == 1       # Evaluates to True
          not 1 == 1   # Evaluates to False
          </code></pre>
          <h2>or Operator</h2>
          <p>The Python or operator combines two Boolean expressions and evaluates to True if at least one of the expressions returns True. Otherwise, if both expressions are False, then the entire expression evaluates to False. The or operator can be used to simplify multiple if statements.</p>
          <pre><code class="language-python">
          True or True      # Evaluates to True
          True or False     # Evaluates to True
          False or False    # Evaluates to False
          1 &lt; 2 or 3 &lt; 1    # Evaluates to True
          3 &lt; 1 or 1 &gt; 6    # Evaluates to False
          1 == 1 or 1 &lt; 2   # Evaluates to True
          </code></pre>
          <h2>and Operator</h2>
          <p>The Python and operator performs a Boolean comparison between two Boolean values, variables, or expressions. If both sides of the operator evaluate to True then the and operator returns True. If either side (or both sides) evaluates to False, then the and operator returns False. A non-Boolean value (or variable that stores a value) will always evaluate to True when used with the and operator.</p>
          <pre><code class="language-python">True and True     # Evaluates to True
          True and False    # Evaluates to False
          False and False   # Evaluates to False
          1 == 1 and 1 &lt; 2  # Evaluates to True
          1 &lt; 2 and 3 &lt; 1   # Evaluates to False
          &quot;Yes&quot; and 100     # Evaluates to True
          </code></pre>

        </div>
      )} 

      {page === "lists" && (
        <div>
          <h2>Lists</h2>
          <p>Lists in Python are an essential data structure for storing and manipulating collections of data. They are ordered, and their values are placed in between square brackets, separated by commas. It is not necessary for the values in a list to be unique, and empty lists do not contain any values within the square brackets.</p>
          <pre><code class="language-python">primes = [2, 3, 5, 7, 11]
          print(primes)

          empty_list = []
          </code></pre>
          <h2>Adding Lists Together</h2>
          <p>Lists can be added together in Python using the plus symbol, and the resulting list will contain the same items in the same order, with the first list's items coming first.</p>
          <pre><code class="language-python">items = ['cake', 'cookie', 'bread']
          total_items = items + ['biscuit', 'tart']
          print(total_items)
          # Result: ['cake', 'cookie', 'bread', 'biscuit', 'tart']
          </code></pre>
          <h2>Python Lists: Data Types</h2>
          <p>Python lists are versatile and can contain multiple different data types within the same square brackets, including numbers, strings, other objects, and even other lists.</p>
          <pre><code class="language-python">numbers = [1, 2, 3, 4, 10]
          names = ['Jenny', 'Sam', 'Alexis']
          mixed = ['Jenny', 1, 2]
          list_of_lists = [['a', 1], ['b', 2]]
          </code></pre>
          <h2>List Method .append()</h2>
          <p>You can add values to the end of a list using the .append() method, which places the object passed in as a new element at the very end of the list.</p>
          <pre><code class="language-python">orders = ['daisies', 'periwinkle']
          orders.append('tulips')
          print(orders)
          # Result: ['daisies', 'periwinkle', 'tulips']
          </code></pre>
          <h2>Zero-Indexing</h2>
          <p>The zero-indexing in Python means that list index begins at zero and ends at the length of the list minus one. To access a list element by index, square bracket notation is used.</p>
          <pre><code class="language-python">names = ['Roger', 'Rafael', 'Andy', 'Novak']

          berries = [&quot;blueberry&quot;, &quot;cranberry&quot;, &quot;raspberry&quot;]

          # square bracket notation
          berries[0]   # &quot;blueberry&quot;
          berries[2]   # &quot;raspberry&quot;
          </code></pre>
          <h2>Negative List Indices</h2>
          <p>Negative indices can be used to reference elements in relation to the end of a list. This can be used to access single list elements or as part of defining a list range.</p>
          <pre><code class="language-python">soups = ['minestrone', 'lentil', 'pho', 'laksa']
          soups[-1]   # 'laksa'
          soups[-3:]  # 'lentil', 'pho', 'laksa'
          soups[:-2]  # 'minestrone', 'lentil'
          </code></pre>
          <h2>Modifying 2D Lists</h2>
          <p>In order to modify elements in a 2D list, an index for the sublist and the index for the element of the sublist need to be provided.</p>
          <pre><code class="language-python"># A 2D list of names and hobbies
          class_name_hobbies = [[&quot;Jenny&quot;, &quot;Breakdancing&quot;], [&quot;Alexus&quot;, &quot;Photography&quot;], [&quot;Grace&quot;, &quot;Soccer&quot;]]

          # The sublist of Jenny is at index 0. The hobby is at index 1 of the sublist. 
          class_name_hobbies[0][1] = &quot;Meditation&quot;
          print(class_name_hobbies)

          # Output
          # [[&quot;Jenny&quot;, &quot;Meditation&quot;], [&quot;Alexus&quot;, &quot;Photography&quot;], [&quot;Grace&quot;, &quot;Soccer&quot;]]
          </code></pre>
          <h2>Accessing 2D Lists</h2>
          <p>To access elements in a 2D list, an index for the sublist and the index for the element of the sublist both need to be provided.</p>
          <pre><code class="language-python"># 2D list of people's heights
          heights = [[&quot;Noelle&quot;, 61], [&quot;Ali&quot;, 70], [&quot;Sam&quot;, 67]]

          # Access the sublist at index 0, and then access the 1st index of that sublist. 
          noelles_height = heights[0][1] 
          print(noelles_height)

          # Output
          # 61
          </code></pre>
          <h2>List Method .remove()</h2>
          <p>The .remove() method is used to remove an element from a list by passing in the value of the element to be removed as an argument.</p>
          <pre><code class="language-python"># Create a list
          shopping_line = [&quot;Cole&quot;, &quot;Kip&quot;, &quot;Chris&quot;, &quot;Sylvana&quot;, &quot;Chris&quot;]
          
          # Removes the first occurance of &quot;Chris&quot;
          shopping_line.remove(&quot;Chris&quot;)
          print(shopping_line)

          # Output
          # [&quot;Cole&quot;, &quot;Kip&quot;, &quot;Sylvana&quot;, &quot;Chris&quot;]
          </code></pre>
          <h2>List Method .count()</h2>
          <p>The .count() Python list method searches a list for whatever search term it receives as an argument, then returns the number of matching entries found.</p>
          <pre><code class="language-python">backpack = ['pencil', 'pen', 'notebook', 'textbook', 'pen', 'highlighter', 'pen']
          numPen = backpack.count('pen')

          print(numPen)
          # Output: 3
          </code></pre>
          <h2>Determining List Length with len()</h2>
          <p>The Python len() function can be used to determine the number of items found in the list it accepts as an argument.</p>
          <pre><code class="language-python">knapsack = [2, 4, 3, 7, 10]
          size = len(knapsack)
          print(size) 
          # Output: 5
          </code></pre>
          <h2>List Method .sort()</h2>
          <p>The .sort() Python list method will sort the contents of whatever list it is called on. Numerical lists will be sorted in ascending order, and lists of Strings will be sorted into alphabetical order. It modifies the original list, and has no return value.</p>
          <pre><code class="language-python">exampleList = [4, 2, 1, 3]
          exampleList.sort()
          print(exampleList)
          # Output: [1, 2, 3, 4]
          </code></pre>
          <h2>List Slicing</h2>
          <p>A slice, or sub-list of Python list elements can be selected from a list using a colon-separated starting and ending point.
          When slicing a list, a new list is returned, so if the slice is saved and then altered, the original list remains the same.</p>
          <pre><code class="language-python">tools = ['pen', 'hammer', 'lever']
          tools_slice = tools[1:3] # ['hammer', 'lever']
          tools_slice[0] = 'nail'

          # Original list is unaltered:
          print(tools) # ['pen', 'hammer', 'lever']
          </code></pre>
          <h2>sorted() Function</h2>
          <p>The Python sorted() function accepts a list as an argument, and will return a new, sorted list containing the same elements as the original. Numerical lists will be sorted in ascending order, and lists of Strings will be sorted into alphabetical order. It does not modify the original, unsorted list.</p>
          <pre><code class="language-python">unsortedList = [4, 2, 1, 3]
          sortedList = sorted(unsortedList)
          print(sortedList)
          # Output: [1, 2, 3, 4]
          </code></pre>
          <h2>List Method .insert()</h2>
          <p>The Python list method .insert() allows us to add an element to a specific index in a list.
          It takes in two inputs:</p>
          <ul>
          <li>The index that you want to insert into.</li>
          <li>The element that you want to insert at the specified index.</li>
          </ul>
          <pre><code class="language-python"># Here is a list representing a line of people at a store
          store_line = [&quot;Karla&quot;, &quot;Maxium&quot;, &quot;Martim&quot;, &quot;Isabella&quot;]

          # Here is how to insert &quot;Vikor&quot; after &quot;Maxium&quot; and before &quot;Martim&quot;
          store_line.insert(2, &quot;Vikor&quot;)

          print(store_line) 
          # Output: ['Karla', 'Maxium', 'Vikor', 'Martim', 'Isabella']
          </code></pre>
          <h2>List Method .pop()</h2>
          <p>The .pop() method allows us to remove an element from a list while also returning it. It accepts one optional input which is the index of the element to remove. If no index is provided, then the last element in the list will be removed and returned.</p>
          <pre><code class="language-python">cs_topics = [&quot;Python&quot;, &quot;Data Structures&quot;, &quot;Balloon Making&quot;, &quot;Algorithms&quot;, &quot;Clowns 101&quot;]

          # Pop the last element
          removed_element = cs_topics.pop()

          print(cs_topics)
          print(removed_element)

          # Output:
          # ['Python', 'Data Structures', 'Balloon Making', 'Algorithms']
          # 'Clowns 101'

          # Pop the element &quot;Baloon Making&quot;
          cs_topics.pop(2)
          print(cs_topics)

          # Output:
          # ['Python', 'Data Structures', 'Algorithms']

          </code></pre>

        </div>
      )} 

      {page === "loops" && (
        <div>
          <h2>break Keyword</h2>
          <p>In a loop, the break keyword escapes the loop, regardless of the iteration number. Once break executes, the program will continue to execute after the loop.</p>
          <pre><code class="language-python">numbers = [0, 254, 2, -1, 3]

          for num in numbers:
            if (num &lt; 0):
              print(&quot;Negative number detected!&quot;)
              break
            print(num)
            
          # 0
          # 254
          # 2
          # Negative number detected!
          </code></pre>
          <h2>Python List Comprehension</h2>
          <p>Python list comprehensions provide a concise way for creating lists. It consists of brackets containing an expression followed by a for clause, then zero or more for or if clauses. The expressions can be anything - any kind of object can go into a list. A list comprehension always returns a list.</p>
          <pre><code class="language-python"># List comprehension for the squares of all even numbers between 0 and 9
          result = [x**2 for x in range(10) if x % 2 == 0]

          print(result)
          # [0, 4, 16, 36, 64]
          </code></pre>
          <h2>Python For Loop</h2>
          <p>A Python for loop can be used to iterate over a list of items and perform a set of actions on each item. The syntax of a for loop consists of assigning a temporary value to a variable on each successive iteration.</p>
          <p>When writing a for loop, remember to properly indent each action, otherwise an IndentationError will result.</p>
          <pre><code class="language-python"># each num in nums will be printed below
          nums = [1,2,3,4,5]
          for num in nums: 
            print(num)
          </code></pre>
          <h2>The Python continue Keyword</h2>
          <p>In Python, the continue keyword is used inside a loop to skip the remaining code inside the loop code block and begin the next loop iteration.</p>
          <pre><code class="language-python">big_number_list = [1, 2, -1, 4, -5, 5, 2, -9]

          # Print only positive numbers:
          for i in big_number_list:
            if i &lt; 0:
              continue
            print(i)
          </code></pre>
          <h2>Python Loops with range().</h2>
          <p>In Python, a for loop can be used to perform an action a specific number of times in a row.</p>
          <p>The range() function can be used to create a list that can be used to specify the number of iterations in a for loop.</p>
          <pre><code class="language-python"># Print the numbers 0, 1, 2:
          for i in range(3):
            print(i)

          # Print &quot;WARNING&quot; 3 times:
          for i in range(3):
            print(&quot;WARNING&quot;)
          </code></pre>
          <h2>Infinite Loop</h2>
          <p>An infinite loop is a loop that never terminates. Infinite loops result when the conditions of the loop prevent it from terminating. This could be due to a typo in the conditional statement within the loop or incorrect logic. To interrupt a Python program that is running forever, press the Ctrl and C keys together on your keyboard.</p>
          <h2>Python while Loops</h2>
          <p>In Python, a while loop will repeatedly execute a code block as long as a condition evaluates to True.</p>
          <p>The condition of a while loop is always checked first before the block of code runs. If the condition is not met initially, then the code block will never run.</p>
          <pre><code class="language-python"># This loop will only run 1 time
          hungry = True
          while hungry:
            print(&quot;Time to eat!&quot;)
            hungry = False

          # This loop will run 5 times
          i = 1
          while i &lt; 6:
            print(i)
            i = i + 1
          </code></pre>
          <h2>Python Nested Loops</h2>
          <p>In Python, loops can be nested inside other loops. Nested loops can be used to access items of lists which are inside other lists. The item selected from the outer loop can be used as the list for the inner loop to iterate over.</p>
          <pre><code class="language-python">groups = [[&quot;Jobs&quot;, &quot;Gates&quot;], [&quot;Newton&quot;, &quot;Euclid&quot;], [&quot;Einstein&quot;, &quot;Feynman&quot;]]

          # This outer loop will iterate over each list in the groups list
          for group in groups:
            # This inner loop will go through each name in each list
            for name in group:
              print(name)
          </code></pre>
        </div>
      )} 
      </div>
  )};
      