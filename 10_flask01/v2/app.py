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
In the terminal, "about to print __name__..." and "__main__" will be printed.
On the webpage at 127.0.0.1:5000, "No hablo queso!" will be printed.
"""

app.run()

