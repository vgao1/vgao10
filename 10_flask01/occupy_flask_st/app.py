"""
Team YVC: Victoria Gao, Yi Ling Wu, Constance Chen
SoftDev
K10: Putting Little Pieces Together (flask app to send the output of your occupation-chooser to a webpage)
2020-10-08
"""

import csv
from random import choices

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def get_random_occupations():
    # open CSV file
    with open("./occupations.csv", "r", newline='') as csv_file:
        reader = csv.reader(csv_file, delimiter=',')
        header = next(csv_file) # get rid of the header
        occupations = {} # initialize the dictionary
        for row in reader:
            occupations[row[0]] = float(row[1]) # populate the dictionary
        del occupations['Total'] #delete the last row

        #create lists:(1)occupations and (2)percentage of being chosen
        key = list(occupations.keys())
        values = list(occupations.values())
        
        roster = "Team YVC: Victoria Gao, Yi Ling Wu, Constance Chen"   #TNPG+roster 
        random_occupation = choices(key, weights=values, k=1)[0] #randomly chose an occupation

        #List the occupations
        list_occupations = "<h2><b>Occupations</b></h2><ul>"
        for occupation in occupations.keys():
            list_occupations+="<li>"+occupation+"</li>"
        list_occupations+="</ul>"

        #Display TNPG+roster, list of occupations, and randomly chosen occupation on the webpage.
        return roster+"<br>"+list_occupations+"<br><b>Randomly chosen occupation</b>: "+random_occupation
        
if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()
