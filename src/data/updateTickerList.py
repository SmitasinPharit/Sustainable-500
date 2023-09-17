"""
    Ticker to name updater

    By: Jhon Tabio

    Big contributor Github Repo: https://github.com/datasets/s-and-p-500-companies/blob/main/data/constituents.csv
"""
import urllib.request
import json


# Fetch file from the Github repo

# Raw Github repo with a csv file
url = "https://raw.githubusercontent.com/datasets/s-and-p-500-companies/main/data/constituents.csv"
data = None
    
try:
    # Establish a connection with the host
    connection = urllib.request.urlopen(url)
except URLError as e:
    if hasattr(e, "reason"):
        print("We failed to reach a server.")
        print("Reason: {e.reason}")
    elif hasattr(e, "code"):
        print("The server couldn\'t fulfill the request.")
        print(f"Error code: {e.code}")
else:
    data = connection.read() # Read in the data
    data = data.decode("utf-8") # Decode data

    json_data = {}

    lines = data.split('\n') # Split every line in the file
    lines.pop(0) # Remove extra first line
    lines.pop() # Remove floating data

    for line in lines:
        line_sep = line.split(',') # Split data
        json_data[line_sep[1]] = line_sep[0] # {Name: Ticker}

    file = open("tickerToName.json", 'w')

    json.dump(json_data, file)
