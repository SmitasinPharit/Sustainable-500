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
        if json_data["esgChart"][ticker] == data["esgChart"]["result"]
            return False

    json_data["esgChart"][ticker] = data["esgChart"]["result"]
    
    json_file = open("data/ESG.json", 'w')
    json.dump(json_data, json_file)
    json_file.close()

    return True
    
if __name__ == "__main__":
    # Example calls
    data = requestJSON("AAPL")
    updateJSON(data, "AAPl")
