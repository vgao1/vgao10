"""
Team Sharp Cat - Victoria Gao, Alvin Wu, Jonathan Lee, Madelyn Mao
SoftDev
K14 -- Form and Function
2020-12-09
"""
from flask import Flask             #facilitate flask webserving
from flask import render_template   #facilitate jinja templating
from flask import request           #facilitate form submission

#the conventional way:
#from flask import Flask, render_template, request

app = Flask(__name__)    #create Flask object
@app.route("/", methods=['GET', 'POST'])
def disp_loginpage():
    print("\n\n\n")
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    print("***DIAG: request.method ***")
    print(request.method)
    return render_template('login.html')


@app.route("/auth", methods=['GET', 'POST'])
def authenticate():
    print("\n\n\n")
    print("***DIAG: request obj ***")
    print(request)
    print("***DIAG: request.args ***")
    print(request.args)
    print("***DIAG: request.method ***")
    print(request.method)
    #response to a form submission
    return render_template('response.html',
                           user = request.args["username"],
                           method = request.method,
                           greeting="Thanks for visiting, "+request.args["username"]+"!")  

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()
