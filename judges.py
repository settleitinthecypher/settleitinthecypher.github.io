# run this script to get and8 and wdsf links for individuals

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

chrome_options = Options()
chrome_options.binary_location = 'C:\Program Files\Google\Chrome120forSelenium\Application\chrome.exe'

and8Search = 'https://and8.dance/en/search?q='

# paste list of judges here
people = """
"""

peopleArray = people.split('\n');

output = open("output.txt", "a+")
service = Service(executable_path=r'C:\Program Files (x86)\ChromeDriver\chromedriver.exe')
for judge in peopleArray:
    try:
        driver = webdriver.Chrome(service=service, options=chrome_options)
        driver.get(and8Search + judge)
        javascript = """
            return document.querySelector('#content_full_layout > b:nth-child(6) > a').innerText + ',' + document.querySelector('#content_full_layout > b:nth-child(6) > a').href
        """
        print(driver.execute_script(javascript))
        print(driver.execute_script(javascript), file=output)
        driver.close()
    except Exception as e:
        driver.close()
        print(e)
        print(judge + ',error', file=output)
output.close()