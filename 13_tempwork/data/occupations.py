import csv
import random

reader = csv.DictReader(open('occupations.csv'))  #allows us to read the csv file
dictionary = {}
for row in reader:                                #stores the contents of the csv file into the dictionary by iterating line by line
    dictionary[row['Job Class']] = [float(row['Percentage']),row["Links"]]  
del dictionary["Total"]

percentages = [percent[0] for percent in dictionary.values()]
random_job = random.choices(list(dictionary.keys()), weights = percentages, k=1)
    
print(random_job)
