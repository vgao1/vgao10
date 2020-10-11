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
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

"""
This file will produce the same results as app.py in v3 directory.
Prediction: The terminal will print some lines related to debugging to show
that the code is being debugged behind the scenes.
"__main__" will be printed afterwards in the terminal on a new line.
"No hablo queso!" will be printed on the webpage at 127.0.0.1:5000

After running app.py, the following lines were printed in the terminal:
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN:
"""
