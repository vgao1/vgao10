"""
Team Cosmic Stardust- Victoria Gao, Jessica Yeung, Andrew Jiang
SoftDev
K19 -- A RESTful Journey Skyward
2020-04-05
"""
from flask import Flask, render_template
import urllib.request, json
app = Flask(__name__)

@app.route("/")
def root():
    file = open("key_nasa.txt",'r')
    key = "https://api.nasa.gov/planetary/apod?api_key="+file.read()
    u = urllib.request.urlopen(key)
    response = u.read()
    data = json.loads(response)
    return render_template("main.html", pic = data['url'], txt = data["explanation"])

if __name__ == '__main__':
    app.debug = True
    app.run()
    
