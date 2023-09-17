"""
    Yahoo Finance ESG import

    By: Jhon Tabio
"""
import urllib.request
import json

# Fetch JSON file for a specific company from the API
def requestJSON(ticker: str) -> dict:
    # Friendly online API
    url = f"https://query2.finance.yahoo.com/v1/finance/esgChart?symbol={ticker}"
    json_info = None
    
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
        json_info = json.loads(data) # Load a JSON file from the connection data

    return json_info

def readJSON() -> dict:
    ret = None
    try:
        json_file = open("data/ESG.json", 'r')
        ret = json.load(json_file)

        json_file.close()
    except FileNotFoundError:
        print("ERROR: The JSON file was not found.")
    
    return ret

# Updates the JSON file, returns whether changes to the file were made
def updateJSON(data: dict, ticker: str) -> bool:
    json_data = readJSON()

    if json_data == None:
        json_data = {"esgChart": {}}
    
    if ticker in json_data["esgChart"]:
        if json_data["esgChart"][ticker] == data["esgChart"]["result"]:
            return False

    json_data["esgChart"][ticker] = data["esgChart"]["result"]
    
    json_file = open("data/ESG.json", 'w')
    json.dump(json_data, json_file)
    json_file.close()

    return True

def readJSONSimple() -> dict:
    ret = None
    try:
        json_file = open("data/Simple_ESG.json", 'r')
        ret = json.load(json_file)

        json_file.close()
    except FileNotFoundError:
        print("ERROR: The JSON file was not found.")
    
    return ret

# Returns a much more simpler JSON file (Less frightening to work with)
# TEMP
def updateJSONSimple(data: dict, ticker: str) -> bool:
    json_data = readJSONSimple()

    if json_data == None:
        json_data = {}

    if ticker in json_data:
        if json_data[ticker] == data["esgChart"]["result"][0]["symbolSeries"]["esgScore"][-1]:
            return False
    
    try:
        json_data[ticker] = data["esgChart"]["result"][0]["symbolSeries"]["esgScore"][-1]
    except KeyError:
        print(ticker, " has no current visible esgScore")
        return False

    json_file = open("data/Simple_ESG.json", "w")
    json.dump(json_data, json_file)
    json_file.close()

    return True
    
if __name__ == "__main__":
    # Example calls
    with open("data/tickerToName.json", 'r') as f:
        json_f = json.load(f)

        for name in json_f:
            print(name)
            data = requestJSON(json_f[name])
            updateJSONSimple(data, json_f[name])

    #data = requestJSON("AAPL")
    #updateJSONSimple(data, "AAPL")
    #updateJSON(data, "AAPl")
