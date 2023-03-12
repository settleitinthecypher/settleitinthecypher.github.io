# import requests
# from bs4 import BeautifulSoup
# import datetime
# 
# output = open('output.txt', 'a+')
# 
# baseURL = "https://and8.dance/en/stats/reports/3900/1442/r"
# roundNum = 1
# battleCount = 2
# 
# for x in range(1,battleCount + 1):
#     currentURL = baseURL + "?l=" + str(roundNum) + "&s=" + str(x)
#     battlePage = requests.get(currentURL)
#     battleSoup = BeautifulSoup(battlePage.content, 'html.parser')
#     print(currentURL)
#     breaker1 = battleSoup.find("div", "#dancer1_h")
#     breaker2 = battleSoup.find("#dancer2_h")
#     print(str(breaker1) + "," + str(breaker2))
#     #print(breaker1 + "," + breaker2, file=output)
# 
# output.close()

from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe')
URL = 'https://and8.dance/en/stats/reports/3900/1442/r'

driver.get(URL)

group = "1";
battlesDiv = driver.find_element(By.ID, "group_" + group)
battleLinks = battlesDiv.find_elements(By.TAG_NAME, "a")

for link in battleLinks:
    battleString = ""

    driver2 = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe')
    driver2.get(link.get_attribute("href"))

    breaker1 = driver2.find_element(By.ID, "dancer1_h")
    breaker2 = driver2.find_element(By.ID, "dancer2_h")
    winnerString = driver2.find_elements(By.CLASS_NAME, "round_info")[0].get_attribute("class")
    if (winnerString[17:18] == "1"):
        winner = breaker1
    else:
        winner = breaker2
    
    battleString += breaker1.text + "," + breaker2.text + "," + winner.text + ","

    numRounds = len(driver2.find_elements(By.CLASS_NAME, "round_info"))
    numJudges = int(len(driver2.find_elements(By.CLASS_NAME, "judges_width")) / numRounds)
    judgeNames = ""
    for i in range(numJudges):
        judge1 = driver2.find_elements(By.CLASS_NAME, "judges_width")[i].find_element(By.ID, "dancer1_tri")
        judge2 = driver2.find_elements(By.CLASS_NAME, "judges_width")[i].find_element(By.ID, "dancer2_tri")
        if (judge1.text):
            judgeNames += judge1.find_elements(By.TAG_NAME, "b")[0].text
        else:
            judgeNames += judge2.find_elements(By.TAG_NAME, "b")[0].text
        judgeNames += ","
    
    battleString += str(numRounds) + "," + str(numJudges) + "," + judgeNames

    ratingSets = driver2.find_elements(By.CLASS_NAME, "all_details")
    for i in range(len(ratingSets)):
        if (ratingSets[i].find_element_by_xpath("..").get_attribute("id") == "dancer1_tri"):
            battleString += "-"
        rating1 = driver2.find_elements(By.CLASS_NAME, "judges_width")[i].find_element(By.ID, "dancer1_tri")
        rating2 = driver2.find_elements(By.CLASS_NAME, "judges_width")[i].find_element(By.ID, "dancer2_tri")
        if (rating1.text):
            battleString += rating1.find_elements(By.TAG_NAME, "b")[1].text[1:-1]
        else:
            battleString += rating2.find_elements(By.TAG_NAME, "b")[1].text[1:-1]
        battleString += ","

        ratingDetails = ratingSets[i].find_elements(By.CLASS_NAME, "fader_neu")
        for j in range(len(ratingDetails)):
            ratingDiv = ratingDetails[j].find_elements(By.TAG_NAME, "div")
            if (len(ratingDiv) > 0):
                if (ratingDiv[0].get_attribute("id") == "dancer1"):
                    battleString += "-"
                rating = ratingDiv[0].get_attribute("innerHTML")
                battleString += rating[1:-1] + ","
            else:
                battleString += "0,"
    
    print(battleString)
    
    output = open('output.txt', 'a+')
    print(driver.title, file=output)
    print(URL, file=output)
    print("---", file=output)
    print(battleString, file=output)
    driver2.close()

output.close()