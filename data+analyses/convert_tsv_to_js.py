# run this after downloading updated spreadsheet files of raw data from Google Sheets in .tsv format
# place downloaded tsv files into data+analyses/webscrape/battles
# this script populates certain blank cells in the raw data and converts tsv to string variables in js files
# note this script takes a while to run

import os
import csv

# get all .tsv files in directory webscrape/battles
files = os.listdir('webscrape/battles')
dataTSVs = [f'webscrape/battles/{file}' for file in files if file.endswith('.tsv')]

for dataTSV in dataTSVs:
    # rename tsv file to simpler name
    filename = os.path.basename(dataTSV)
    updatedName = '_'
    if 'Trivium' in filename:
        updatedName = 'TriviumDataRaw'
    elif 'System' in filename:
        updatedName = 'WDSFSystemDataRaw'
    elif 'Threefold' in filename and 'Pseudo' not in filename:
        updatedName = 'ThreefoldDataRaw'
    elif 'Pseudo' in filename:
        updatedName = 'PseudoThreefoldDataRaw'
    elif 'Single' in filename:
        updatedName = 'SingleSliderDataRaw'
    elif 'Round' in filename:
        updatedName = 'RoundByRoundDataRaw'
    elif 'Traditional' in filename:
        updatedName = 'TraditionalDataRaw'
    os.rename(dataTSV, 'webscrape/battles/' + updatedName + '.tsv')
    dataTSV = 'webscrape/battles/' + updatedName + '.tsv'
    
    print('...updating ' + updatedName + '.tsv')
    
    rows = []
    
    with open(dataTSV, 'r', newline='', encoding='utf-8') as infile:
        reader = csv.reader(infile, delimiter='\t')
        rows = list(reader)
        
        # for rows that were merged for event and stage columns in Google Sheet and therefore blank in the exported data, copy event and stage to populate
        for y in range(len(rows)):
            print('......row ' + str(y), end='\r')
            if y > 0 and rows[y] and rows[y][0] == '':
                rows[y][0] = rows[y - 1][0]
            if y > 0 and rows[y] and rows[y][1] == '':
                rows[y][1] = rows[y - 1][1]
    
    # update tsv file with populated cells
    with open(dataTSV, 'w', newline='', encoding='utf-8') as outfile:
        writer = csv.writer(outfile, delimiter='\t')
        writer.writerows(rows)
    
    print('')
    print('......done')
    print('...creating ' + updatedName + '.js')
    
    # create js variable containing tsv contents for each judging system
    # note combining into a single string of all judging systems to write to a single file takes way longer than creating a separate file for each
    with open('../' + updatedName '.js', 'w', encoding='utf-8') as jsFile:
        jsString = 'const ' + updatedName + ' = ['
        for y in range(len(rows)):
            print('......row ' + str(y), end='\r')
            jsString += '['
            for x in range(len(rows[y])):
                jsString += '"' + rows[y][x] + '",'
            jsString = jsString[:-1]
            jsString += '],\n'
        jsString = jsString[:-2]
        jsString += '];'
        jsFile.write(jsString)
    
    print('')
    print('......done')

# TODO: combine js files into a single one and delete original js files