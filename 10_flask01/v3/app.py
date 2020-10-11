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
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"
"""
-The terminal will print some lines related to debugging to show
that the code is being debugged behind the scenes.
-"__main__" will be printed in the terminal after the user
visits 127.0.0.1:5000 on a browser.
-"No hablo queso!" will be printed on the webpage at 127.0.0.1:5000

-After running app.py, the following lines were printed
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN:
"""
app.debug = True
app.run()
