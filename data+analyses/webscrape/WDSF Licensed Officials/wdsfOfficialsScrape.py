import time

from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe')
URL = 'https://www.worlddancesport.org/Official/List?page=3&divisionFilter=Breaking&licenseFilter=Adjudicator&licenseFilter=Chairman&licenseFilter=Examiner&licenseFilter=Invigilator&licenseFilter=Scrutiny&licenseFilter=DJ&licenseFilter=HeadJudge&disciplineFilter=56&disciplineFilter=59&disciplineFilter=61&disciplineFilter=55&disciplineFilter=60&disciplineFilter=63&disciplineFilter=57&disciplineFilter=104&disciplineFilter=105&disciplineFilter=67&disciplineFilter=180&disciplineFilter=181&disciplineFilter=179&statusFilter=Active&statusFilter=Expired&memberCountryFilter=-1&profileFilter=false&formAction=&Column=Name&Direction=Ascending&pageSize=100'
# figure out how many pages then update the page= in URL automatically to iterate through them
# GKT not getting pulled when it is not "n/a", and member # displaced by one cell - seems to happen when multiple licenses listed
# when multiple licenses, license details don't get pulled correctly because mismatch of number of <p> elements compared to <h3> elements

driver.get(URL)
time.sleep(3)

tableRows = driver.find_elements(By.TAG_NAME, "tr")
profileLinks = []

print(str(len(tableRows)) + " judges to scrape data from")

for row in tableRows[1:]:
    judgeString = ""

    judgeElements = row.find_elements_by_css_selector("*")
    judgeName = judgeElements[1].text

    judgeSurname = judgeElements[3].text
    judgeCountry = judgeElements[4].text
    judgeLicense = judgeElements[5].get_attribute("innerHTML").replace("<br>",";")
    judgeMemberNumber = judgeElements[6].text
    judgeGKT = judgeElements[7].text
    judgeProfileLink = judgeElements[0].get_attribute("innerHTML").replace('<a href="',"https://worlddancesport.org")
    judgeProfileLink = judgeProfileLink[:(judgeProfileLink.index('">'))]
    judgeString = judgeName + "," + judgeSurname + "," + judgeCountry + "," + judgeLicense + "," + judgeMemberNumber + "," + judgeGKT + "," + judgeProfileLink
    
    driver2 = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe')
    driver2.get(judgeProfileLink)
    time.sleep(3)
    
    judgeDetails = driver2.find_element(By.CLASS_NAME, "memberDetails")
    judgeMemberOf = judgeDetails.find_element(By.TAG_NAME, "a").text
    judgeString +=  "," + judgeMemberOf

    judgeLicenses = judgeDetails.find_elements(By.TAG_NAME, "h3")
    judgeLicenseDetails = judgeDetails.find_elements(By.TAG_NAME, "p")
    for index, license in enumerate(judgeLicenses):
        judgeLicenseType = license.text
        judgeLicenseDetail = judgeLicenseDetails[index].get_attribute("innerText").replace("\n", ",").replace("Status: ","").replace("Division: Breaking,","").replace("Trivium: ","").replace("Judging System: ","").replace("Issued on: ","").replace("Education expires on: ","").replace("Education expired on: ","").replace("Disciplines:","")
        judgeLicenseLevel = ""
        if judgeLicenseType == "JUDGE":
            if judgeDetails.find_elements(By.TAG_NAME, "li"):
                judgeLicenseLevel = judgeDetails.find_element(By.TAG_NAME, "li").text.replace("Breaking (","").replace(")","")
        judgeString += "," + judgeLicenseType + "," + judgeLicenseDetail + "," + judgeLicenseLevel

    driver2.close()

    try:
        print(judgeString)
    except:
        print("--Error--")

    output = open('output.txt', 'a+')
    try:
        print(judgeString, file=output)
    except:
        print("--Error--", file=output)

driver.close()

output.close()