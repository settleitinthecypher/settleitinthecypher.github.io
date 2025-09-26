# IMPORTANT see line 103 if scraping failing on a bracket page

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

import datetime

# system = "traditional"
# system = "round by round"
# system = "single slider"
system = "threefold"
# system = "trivium"

chrome_options = Options()
chrome_options.binary_location = 'C:\Program Files\Google\Chrome120forSelenium\Application\chrome.exe'

driver = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe', options=chrome_options)
URLs = [
    "https://and8.dance/en/stats/reports/4250/1351/r",
    "https://and8.dance/en/stats/reports/4250/1352/r",
    "https://and8.dance/en/stats/reports/4250/1353/r",
    "https://and8.dance/en/stats/reports/4250/1369/r",
    "https://and8.dance/en/stats/reports/4250/1355/r",
    "https://and8.dance/en/stats/reports/4250/1370/r",
    "https://and8.dance/en/stats/reports/4250/1357/r",
    "https://and8.dance/en/stats/reports/4250/1358/r",
    "https://and8.dance/en/stats/reports/4250/1371/r",
    "https://and8.dance/en/stats/reports/4247/1341/r",
    "https://and8.dance/en/stats/reports/4247/1342/r",
    "https://and8.dance/en/stats/reports/4247/1343/r",
    "https://and8.dance/en/stats/reports/4247/1345/r",
    "https://and8.dance/en/stats/reports/4247/1346/r",
    "https://and8.dance/en/stats/reports/4213/1275/r",
    "https://and8.dance/en/stats/reports/4213/1276/r",
    "https://and8.dance/en/stats/reports/4168/1280/r",
    "https://and8.dance/en/stats/reports/4168/1338/r",
    "https://and8.dance/en/stats/reports/4168/1279/r",
    "https://and8.dance/en/stats/reports/4168/1340/r",
    "https://and8.dance/en/stats/reports/4168/1339/r",
    "https://and8.dance/en/stats/reports/4227/1329/r",
    "https://and8.dance/en/stats/reports/4227/1330/r",
]

# ending of URLs must be "/r" or "/"

def webscrape(battleLinks,output):
    for link in battleLinks:
        try:
            battleString = ""
            driver2 = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe', options=chrome_options)
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
            if (system == "traditional"):
                numRounds = ""
            battleString += str(numRounds) + "," + str(numJudges) + ","
            if (system != "traditional"):
                battleString += str(breaker1RoundWin) + "," + str(breaker2RoundWin) + ","
            battleString += str(breaker1VoteCount) + "," + str(breaker2VoteCount) + "," + judgeNames
            for i in range(9 - numJudges):
                battleString += ","

            if ((system == "traditional") or (system == "round by round")):
                judgeVotes = driver2.find_elements(By.CLASS_NAME, "judges_width")
                # print("number of judge votes is " + str(len(judgeVotes)))
                for i in range(len(judgeVotes)):
                    # print("i")
                    if (judgeVotes[i].find_elements_by_css_selector("[id^='dancer1']")):
                        battleString += "red,"
                    elif (judgeVotes[i].find_elements_by_css_selector("[id^='dancer2']")):
                        battleString += "blue,"
                    # elif (judgeVotes[i].find_elements_by_css_selector("[id*='TIE']")):
                    else:
                        print("tie found")
                        battleString += "tie,"
                    if (((i + 1) % numJudges) == 0):
                            for m in range(9 - numJudges):
                                battleString += ","
                    # also need to accommodate tiebreaker rounds
            else:
                ratingSets = driver2.find_elements(By.CLASS_NAME, "all_details")
                for i in range(len(ratingSets)):
                    if (ratingSets[i].find_element_by_xpath("..").get_attribute("id") == "dancer1_tri"):
                        battleString += "-"
                    if (system == "single slider"):
                        tempScore = driver2.find_elements(By.CLASS_NAME, "judges_width")[i].find_elements_by_css_selector("[id^='dancer']")[0].text
                        battleString += tempScore[tempScore.find("+")+1:tempScore.find("%")] + ","
                        if (((i + 1) % numJudges) == 0):
                            for m in range(9 - numJudges):
                                battleString += ","
                    else:
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
        except:
            battleString = ","
            print(battleString)
            print(battleString, file=output)
            driver2.close()
            continue
        print(battleString)
        print(battleString, file=output)
        driver2.close()

nameCounter = 0

for URL in URLs:
    driver.get(URL)

    output = open("output" + str(nameCounter) + ".txt", "a+")
    nameCounter += 1
    print("Scraped from " + driver.title + " (" + URL + ")", file=output)
    print("Scraped on " + str(datetime.datetime.now()), file=output)
    print("-----", file=output)

    if (("Robin" in driver.title) or ("PreQ" in driver.title)):
        print("group page")
        groups = driver.find_elements_by_css_selector("[id^='group_']")
        for group in reversed(groups):        
            battles = group.find_elements(By.TAG_NAME, "a")
            battleLinks = []
            for battle in reversed(battles):
                battleLinks.append(battle.get_attribute("href"))
            try:
                webscrape(battleLinks,output)
            except:
                print("an exception occurred")
            print("---", file=output)

    elif ("Top" in driver.title): # only events with multistage qualification have "Knockout" in name of final bracket
        print("bracket page")
        battleLinks = []
        baseURL = URL[0:-1]
        print(baseURL)
        urlEnd = "r" # either r or &, depending on what original URL has at end

        # some URLs end in "type=" + urlEnd and some in "type=&"
        if ("Top 8" in driver.title):
            # check finals top location link has data, and if so then use finals and 3rd place links, else use finals without 3rd place link
            driverTemp = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe', options=chrome_options)
            driverTemp.get(baseURL + "?data=1&x=615&y=280&w=1225&type=" + urlEnd)

            if (driverTemp.find_elements(By.ID, "dancer1_h")):
                battleLinks.append(baseURL + "?data=1&x=615&y=280&w=1225&type=" + urlEnd) # finals
                battleLinks.append(baseURL + "?data=1&x=615&y=465&w=1225&type=" + urlEnd) # 3rd place
            else:
                battleLinks.append(baseURL + "?data=1&x=615&y=615&w=1225&type=" + urlEnd) # finals when no 3rd place
            driverTemp.close()

            battleLinks.append(baseURL + "?data=1&x=760&y=360&w=1225&type=" + urlEnd) # semis
            battleLinks.append(baseURL + "?data=1&x=465&y=360&w=1225&type=" + urlEnd) # semis
            battleLinks.append(baseURL + "?data=1&x=980&y=430&w=1225&type=" + urlEnd) # top 8
            battleLinks.append(baseURL + "?data=1&x=980&y=160&w=1225&type=" + urlEnd) # top 8
            battleLinks.append(baseURL + "?data=1&x=245&y=430&w=1225&type=" + urlEnd) # top 8
            battleLinks.append(baseURL + "?data=1&x=245&y=160&w=1225&type=" + urlEnd) # top 8
        elif ("Top 16" in driver.title):
            # check finals top location link has data, and if so then use finals and 3rd place links, else use finals without 3rd place link
            driverTemp = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe', options=chrome_options)
            driverTemp.get(baseURL + "?data=1&x=615&y=175&w=1225&type=" + urlEnd)

            if (driverTemp.find_elements(By.ID, "dancer1_h")):
                battleLinks.append(baseURL + "?data=1&x=615&y=175&w=1225&type=" + urlEnd) # finals
                battleLinks.append(baseURL + "?data=1&x=615&y=525&w=1225&type=" + urlEnd) # 3rd place
            else:
                battleLinks.append(baseURL + "?data=1&x=615&y=615&w=1225&type=" + urlEnd) # finals when no 3rd place
            driverTemp.close()

            battleLinks.append(baseURL + "?data=1&x=745&y=360&w=1225&type=" + urlEnd) # semis
            battleLinks.append(baseURL + "?data=1&x=480&y=360&w=1225&type=" + urlEnd) # semis
            battleLinks.append(baseURL + "?data=1&x=785&y=495&w=1225&type=" + urlEnd) # top 8
            battleLinks.append(baseURL + "?data=1&x=785&y=225&w=1225&type=" + urlEnd) # top 8
            battleLinks.append(baseURL + "?data=1&x=440&y=495&w=1225&type=" + urlEnd) # top 8
            battleLinks.append(baseURL + "?data=1&x=440&y=225&w=1225&type=" + urlEnd) # top 8
            battleLinks.append(baseURL + "?data=1&x=1085&y=540&w=1225&type=" + urlEnd) # top 16
            battleLinks.append(baseURL + "?data=1&x=1085&y=405&w=1225&type=" + urlEnd) # top 16
            battleLinks.append(baseURL + "?data=1&x=1085&y=270&w=1225&type=" + urlEnd) # top 16
            battleLinks.append(baseURL + "?data=1&x=1085&y=135&w=1225&type=" + urlEnd) # top 16
            battleLinks.append(baseURL + "?data=1&x=135&y=540&w=1225&type=" + urlEnd) # top 16
            battleLinks.append(baseURL + "?data=1&x=135&y=405&w=1225&type=" + urlEnd) # top 16
            battleLinks.append(baseURL + "?data=1&x=135&y=270&w=1225&type=" + urlEnd) # top 16
            battleLinks.append(baseURL + "?data=1&x=135&y=135&w=1225&type=" + urlEnd) # top 16
        elif ("Top 4" in driver.title):
            # check 3rd place location link has data, and if so then include it
            battleLinks.append(baseURL + "?data=1&x=980&y=400&w=1225&type=" + urlEnd) # finals

            driverTemp = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe', options=chrome_options)
            driverTemp.get(baseURL + "?data=1&x=570&y=400&w=1225&type=" + urlEnd)

            if (driverTemp.find_elements(By.ID, "dancer1_h")):
                battleLinks.append(baseURL + "?data=1&x=570&y=400&w=1225&type=" + urlEnd) # 3rd place
            driverTemp.close()

            battleLinks.append(baseURL + "?data=1&x=590&y=490&w=1225&type=" + urlEnd) # semis
            battleLinks.append(baseURL + "?data=1&x=590&y=300&w=1225&type=" + urlEnd) # semis
        elif ("Top 32" in driver.title):
            # check finals location link has data, and if so then include full bracket links
            driverTemp = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe', options=chrome_options)
            driverTemp.get(baseURL + "?data=1&x=300&y=130&w=1225&type=" + urlEnd)

            if (driverTemp.find_elements(By.ID, "dancer1_h")):
                battleLinks.append(baseURL + "?data=1&x=615&y=200&w=1225&type=" + urlEnd) # finals
                battleLinks.append(baseURL + "?data=1&x=615&y=545&w=1225&type=" + urlEnd) # 3rd place
                battleLinks.append(baseURL + "?data=1&x=695&y=375&w=1225&type=" + urlEnd) # semis
                battleLinks.append(baseURL + "?data=1&x=535&y=375&w=1225&type=" + urlEnd) # semis
                battleLinks.append(baseURL + "?data=1&x=740&y=500&w=1225&type=" + urlEnd) # top 8
                battleLinks.append(baseURL + "?data=1&x=740&y=245&w=1225&type=" + urlEnd) # top 8
                battleLinks.append(baseURL + "?data=1&x=490&y=500&w=1225&type=" + urlEnd) # top 8
                battleLinks.append(baseURL + "?data=1&x=490&y=245&w=1225&type=" + urlEnd) # top 8
                battleLinks.append(baseURL + "?data=1&x=775&y=565&w=1225&type=" + urlEnd) # top 16
                battleLinks.append(baseURL + "?data=1&x=775&y=435&w=1225&type=" + urlEnd) # top 16
                battleLinks.append(baseURL + "?data=1&x=775&y=310&w=1225&type=" + urlEnd) # top 16
                battleLinks.append(baseURL + "?data=1&x=775&y=180&w=1225&type=" + urlEnd) # top 16
                battleLinks.append(baseURL + "?data=1&x=450&y=565&w=1225&type=" + urlEnd) # top 16
                battleLinks.append(baseURL + "?data=1&x=450&y=435&w=1225&type=" + urlEnd) # top 16
                battleLinks.append(baseURL + "?data=1&x=450&y=310&w=1225&type=" + urlEnd) # top 16
                battleLinks.append(baseURL + "?data=1&x=450&y=180&w=1225&type=" + urlEnd) # top 16
            driverTemp.close()
            battleLinks.append(baseURL + "?data=1&x=935&y=610&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=935&y=540&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=935&y=475&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=935&y=405&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=935&y=340&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=935&y=270&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=935&y=200&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=935&y=130&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=300&y=610&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=300&y=540&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=300&y=475&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=300&y=405&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=300&y=340&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=300&y=270&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=300&y=200&w=1225&type=" + urlEnd)
            battleLinks.append(baseURL + "?data=1&x=300&y=130&w=1225&type=" + urlEnd)
            
        try:
            webscrape(battleLinks,output)
        except:
            print("an exception occurred")

        # top 4 https://and8.dance/en/stats/reports/4281/1560/?data=1&x=___&y=___&w=1225&type=r
        # 590,300
        # 590,490
        #
        # 3rd place
        # 570,400
        #
        # finals
        # 980,400

        # top 8 https://and8.dance/en/stats/reports/3900/1500/?data=1&x=___&y=___&w=1225&type=r
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

        # top 16 https://and8.dance/en/stats/reports/4281/1563/?data=1&x=___&y=___&w=1225&type=r
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

        # top 32 https://and8.dance/en/stats/reports/4437/1727/?data=1&x=___&y=___&w=1225&type=r   
        # 300,130
        # 300,200
        # 300,270
        # 300,340
        # 300,405
        # 300,475
        # 300,540
        # 300,610
        # 935,130
        # 935,200
        # 935,270
        # 935,340
        # 935,405
        # 935,475
        # 935,540
        # 935,610
        #
        # top 16
        # 450, 180
        # 450, 310
        # 450, 435
        # 450, 565
        # 775, 180
        # 775, 310
        # 775, 435
        # 775, 565
        #
        # top 8
        # 490, 245
        # 490, 500
        # 740, 245
        # 740, 500
        #
        # semis
        # 535, 375
        # 695, 375
        #
        # 3rd place
        # 615, 545
        #
        # finals
        # 615, 200

    print("=====", file=output)
    output.close()

driver.close()