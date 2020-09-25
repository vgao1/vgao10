'''
Victoria Gao, Eric Lo, Ishita Gupta
SoftDev
K05 -- Teamwork, but Better This Time
2020-09-25
'''

import random 
KREWES = {
    'orpheus': ['ERIC', 'SAUVE', 'JONATHAN', 'PAK', 'LIAM', 'WINNIE', 'KELLY', 'JEFFREY', 'KARL', 'ISHITA', 'VICTORIA', 'BENJAMIN', 'ARIB', 'AMELIA', 'CONSTANCE', 'IAN'],
    'rex': ['ANYA', 'DUB-Y', 'JESSICA', 'ALVIN', 'HELENA', 'MICHELLE', 'SHENKER', 'ARI', 'STELLA', 'RENEE', 'MADELYN', 'MAC', 'RYAN', 'DRAGOS'],
    'endymion': ['JASON', 'DEAN', 'MADDIE', 'SAQIF', 'CINDY', 'YI LING', 'RUOSHUI', 'FB', 'MATTHEW', 'MAY', 'ERIN', 'MEIRU']
}

#Pick a team randomly
team_index = random.randrange(3)
team_name = list(KREWES)[team_index]
team_size = random.randrange(len(team_name))

#Pick a student
student = KREWES[team_name][team_size]
print(student)




