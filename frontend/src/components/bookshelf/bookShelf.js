import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Bookshelf() {
  const [page, setPage] = useState("helloWorld");
  const navigate = useNavigate();
 

  function handleKeyDown(event) {
    if (event.code === "Space") {
      if (page === "helloWorld") {
        setPage("controlFlow");
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
      
      
    </div>
  )};
      