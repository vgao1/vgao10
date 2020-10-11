"""
Team YVC: Victoria Gao, Yi Ling Wu, Constance Chen
SoftDev
K10: Putting Little Pieces Together (flask app to send the output of your occupation-chooser to a webpage)
2020-10-08
"""

from flask import Flask
app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?
"""
In Java, an instance of a function is defined with syntax that is similar to Flask(__name__).  
The text that is outside and next to the opening parentheses is usually a function's name and
the text inside is the argument(s).  
"""

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?
#The forward slash ("/") is found in URLs and the path to a file.
def hello_world():
    print(__name__) # Q2: Where will this print to? Q3: What will it print?
    """
    -print(__name__) inside the hello_world() will print to the server
    at the address @app.route("/") points to.
    -This statement will print "__main__" because that is the module
    hello_world() is running in.

    -After running app.py, we noticed that the specific address hello_world()
    prints to is 127.0.0.1:5000
    127.0.0.1 is the IP address and 5000 is the port number.
    -Also, we noticed that __main__ is printed in the terminal instead of on
    the webpage.
    """
    return "No hablo queso!"  # Q3: Will this appear anywhere? How u know?
    """
    Prediction: return "No hablo queso" will not cause text to appear anywhere
    because return doesn't print text.  
    There isn't a print statement that prints what the hello_world() function
    returns.

    After running app.py, we noticed that "No hablo queso" was printed
    on a webpage we were directed to after we entered  
    http://127.0.0.1:5000/ into a browser's address bar.

    The following lines were printed in the terminal after viewing the webpage:
    __main__ 
    127.0.0.1 - - [07/Oct/2020 19:41:15] "GET / HTTP/1.1" 200 - 
    """
app.run()  # Q4: Where have you seen similar construcs in other languages?
"""
In Java, code that calls a method of a class is constructed similar to app.run().
app is like a class' name and run is like the method that is called. 
"""
