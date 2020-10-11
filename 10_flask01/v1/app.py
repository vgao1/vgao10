"""
Team YVC: Victoria Gao, Yi Ling Wu, Constance Chen
SoftDev
K10: Putting Little Pieces Together (flask app to send the output of your occupation-chooser to a webpage)
2020-10-08
"""

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"
"""
Prediction:
-In the terminal, a line like "127.0.0.1 - - [11/Oct/2020 16:12:00] "GET / HTTP/1.1" 200 -"
will be printed after the user visits 127.0.0.1:5000 on a browser.
-On the webpage at 127.0.0.1:5000, "No hablo queso!" will be printed.

-The prediction was correct.
"""
app.run()

