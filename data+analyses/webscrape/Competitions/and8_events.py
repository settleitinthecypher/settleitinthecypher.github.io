from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
from selenium.webdriver.common.actions.action_builder import ActionBuilder
from selenium.webdriver.common.actions.mouse_button import MouseButton

from time import sleep

import datetime

driver = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe')
URL = 'https://and8.dance/en/stats'
driver.get(URL)

# expand all year sections on page
years = driver.find_elements(By.CLASS_NAME, "report_show_hide")
for year in years[1:]:
    sleep(5)
    print("expanding " + year.text)
    ActionChains(driver)\
        .click(year)\
        .perform()

# generate output text file
output = open('output.txt', 'a+', encoding="utf-8")
print("Scraped from " + driver.title + " (" + URL + ")", file=output)
print("Scraped on " + str(datetime.datetime.now()), file=output)
print("---", file=output)

# scrape data from all events
# Date | Event Name | Event Format | Event Format Stage | Link
events = driver.find_elements_by_css_selector("#report_list")
eventDateArray = []
eventDate = ""
eventName = ""
eventDetails = ""
eventDetailTag = ""
pageName = ""
eventString = ""
for event in events:
    eventDateArray = event.find_elements(By.TAG_NAME, "small")[0].text.split(".")
    eventDate = eventDateArray[2] + "." + eventDateArray[1] + "." + eventDateArray[0]
    eventName = event.find_elements(By.TAG_NAME, "a")[0].text
    print(eventDate + " - " + eventName)
    eventDetails = event.find_element(By.ID, "hashtags").find_elements_by_css_selector("*")
    for eventDetail in eventDetails:
        eventDetailTag = eventDetail.get_attribute("outerHTML").split(" ",1)[0].split(">",1)[0]
        if (eventDetailTag == "<div"):
            if (eventDetail.text):
                pageName = eventDetail.text
        elif (eventDetailTag == "<a"):
            eventString = eventDate + ";" + eventName + ";" + pageName + ";" + eventDetail.text + ";" + eventDetail.get_attribute("href")[0:-1]
            print(eventString, file=output)

driver.close()
output.close()