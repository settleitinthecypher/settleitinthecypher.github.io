from selenium import webdriver
from selenium.webdriver.common.by import By

import datetime

driver = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe')
URL = 'https://and8.dance/en/stats/reports/3900/1448/r' # ending of URL must be "/r"

# add looping through multiple URLs
# add round wins and judge vote count calculation into javascript

driver.get(URL)

output = open('output.txt', 'a+')
print("Scraped from " + driver.title + " (" + URL + ")", file=output)
print("Scraped on " + str(datetime.datetime.now()), file=output)
print("-----", file=output)

def webscrape(battleLinks,output):
    for link in battleLinks:
        battleString = ""
        driver2 = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe')
        driver2.get(link)
        breaker1 = driver2.find_element(By.ID, "dancer1_h").text
        breaker2 = driver2.find_element(By.ID, "dancer2_h").text
        breaker1RoundWin = 0
        breaker2RoundWin = 0
        roundWinners = driver2.find_elements(By.CLASS_NAME, "round_info")
        for roundWinner in roundWinners:
            if (roundWinner.get_attribute("class")[17:18] == "1"):
                breaker1RoundWin += 1;
            elif (roundWinner.get_attribute("class")[17:18] == "2"):
                breaker2RoundWin += 1;          
        numRounds = len(driver2.find_elements(By.CLASS_NAME, "round_info"))
        breaker1VoteCount = 0
        breaker2VoteCount = 0
        voteCounts = driver2.find_elements(By.TAG_NAME, "nobr")
        for voteCount in voteCounts[1:(numRounds + 1)]:
            breaker1VoteCount += int(voteCount.get_attribute("innerText")[11])
            breaker2VoteCount += int(voteCount.get_attribute("innerText")[13])
        if (breaker1RoundWin > breaker2RoundWin):
            winner = breaker1
        elif (breaker1RoundWin < breaker2RoundWin):
            winner = breaker2
        elif (breaker1RoundWin == breaker2RoundWin):
            if (breaker1VoteCount > breaker2VoteCount):
                winner = breaker1
            elif (breaker1VoteCount < breaker2VoteCount):
                winner = breaker2
            elif (breaker1VoteCount == breaker2VoteCount):
                winner = "Tie"
        battleString += breaker1 + "," + breaker2 + "," + winner + ","
        numJudges = int(len(driver2.find_elements(By.CLASS_NAME, "judges_width")) / numRounds)
        judgeNames = ""
        for i in range(numJudges):
            judgeNames += driver2.find_elements(By.CLASS_NAME, "judges_width")[i].find_elements_by_css_selector("[id^='dancer']")[0].find_elements(By.TAG_NAME, "b")[0].text + ","
        battleString += str(numRounds) + "," + str(numJudges) + "," + str(breaker1RoundWin) + "," + str(breaker2RoundWin) + "," + str(breaker1VoteCount) + "," + str(breaker2VoteCount) + "," + judgeNames
        for i in range(9 - numJudges):
            battleString += ","
        ratingSets = driver2.find_elements(By.CLASS_NAME, "all_details")
        for i in range(len(ratingSets)):
            if (ratingSets[i].find_element_by_xpath("..").get_attribute("id") == "dancer1_tri"):
                battleString += "-"
            battleString += driver2.find_elements(By.CLASS_NAME, "judges_width")[i].find_elements_by_css_selector("[id^='dancer']")[0].find_elements(By.TAG_NAME, "b")[1].text[1:-1] + ","
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
            if (ratingSets[i].find_elements(By.ID, "button_presses")):
                battleString += ratingSets[i].find_element(By.ID, "button_presses").find_element(By.ID, "dancer1_tri").get_attribute("innerText") + ","
                battleString += ratingSets[i].find_element(By.ID, "button_presses").find_element(By.ID, "dancer2_tri").get_attribute("innerText") + ","
            if (((i + 1) % numJudges) == 0):
                for m in range(9 - numJudges):
                    for x in range(len(ratingDetails) + 1):
                        battleString += ","
                    if (ratingSets[i].find_elements(By.ID, "button_presses")):
                        battleString += ",,"
        print(battleString)
        print(battleString, file=output)
        driver2.close()

if ("Knock" in driver.title):
    print("bracket page")
    battleLinks = []
    baseURL = URL[0:-1]
    print(baseURL)
    if ("Top 16" in driver.title):
        battleLinks.append(baseURL + "?data=1&x=615&y=175&w=1225&type=r") # finals
        battleLinks.append(baseURL + "?data=1&x=615&y=525&w=1225&type=r") # 3rd place
        battleLinks.append(baseURL + "?data=1&x=745&y=360&w=1225&type=r") # semis
        battleLinks.append(baseURL + "?data=1&x=480&y=360&w=1225&type=r") # semis
        battleLinks.append(baseURL + "?data=1&x=785&y=495&w=1225&type=r") # top 8
        battleLinks.append(baseURL + "?data=1&x=785&y=225&w=1225&type=r") # top 8
        battleLinks.append(baseURL + "?data=1&x=440&y=495&w=1225&type=r") # top 8
        battleLinks.append(baseURL + "?data=1&x=440&y=225&w=1225&type=r") # top 8
        battleLinks.append(baseURL + "?data=1&x=1085&y=540&w=1225&type=r") # top 16
        battleLinks.append(baseURL + "?data=1&x=1085&y=405&w=1225&type=r") # top 16
        battleLinks.append(baseURL + "?data=1&x=1085&y=270&w=1225&type=r") # top 16
        battleLinks.append(baseURL + "?data=1&x=1085&y=135&w=1225&type=r") # top 16
        battleLinks.append(baseURL + "?data=1&x=135&y=540&w=1225&type=r") # top 16
        battleLinks.append(baseURL + "?data=1&x=135&y=405&w=1225&type=r") # top 16
        battleLinks.append(baseURL + "?data=1&x=135&y=270&w=1225&type=r") # top 16
        battleLinks.append(baseURL + "?data=1&x=135&y=135&w=1225&type=r") # top 16
    elif ("Top 8" in driver.title):
        battleLinks.append(baseURL + "?data=1&x=615&y=280&w=1225&type=r") # finals
        battleLinks.append(baseURL + "?data=1&x=615&y=465&w=1225&type=r") # 3rd place
        battleLinks.append(baseURL + "?data=1&x=760&y=360&w=1225&type=r") # semis
        battleLinks.append(baseURL + "?data=1&x=465&y=360&w=1225&type=r") # semis
        battleLinks.append(baseURL + "?data=1&x=980&y=430&w=1225&type=r") # top 8
        battleLinks.append(baseURL + "?data=1&x=980&y=160&w=1225&type=r") # top 8
        battleLinks.append(baseURL + "?data=1&x=245&y=430&w=1225&type=r") # top 8
        battleLinks.append(baseURL + "?data=1&x=245&y=160&w=1225&type=r") # top 8
    webscrape(battleLinks,output)
    # https://and8.dance/en/stats/reports/3900/1500/?data=1&x=___&y=___&w=1225

    # top 16
    # 135,135
    # 135,270
    # 135,405
    # 135,540
    # 1085,135
    # 1085,270
    # 1085,405
    # 1085,540
    # 
    # top 8
    # 440,225
    # 440,495
    # 785,225
    # 785,495
    # 
    # top 4
    # 480,360
    # 745,360
    # 
    # 3rd place
    # 615,525
    # 
    # finals
    # 615,175
    
    # top 8
    # 245,160
    # 245,430
    # 980,160
    # 980,430
    # 
    # top 4
    # 465,360
    # 760,360
    # 
    # 3rd place
    # 615,465
    # 
    # finals
    # 615,280

elif (("Robin" in driver.title) or ("PreQ" in driver.title)):
    print("group page")
    groups = driver.find_elements_by_css_selector("[id^='group_']")
    for group in reversed(groups):        
        battles = group.find_elements(By.TAG_NAME, "a")
        battleLinks = []
        for battle in reversed(battles):
            battleLinks.append(battle.get_attribute("href"))
        webscrape(battleLinks,output)
        print("---", file=output)

driver.close()
print("=====", file=output)
output.close()