// -- FROM JUDGES JSON OUTPUT LIST OF JUDGES
var output = '';
var counter = 0;
for (var key in judges) {
    output += Object.keys(judges)[counter] + '\n';
    counter++;
}
console.log(output);

// -- LIST OF JUDGES FROM JUDGES JSON --
// 4EverFresH~
// AT
// Ace
// Admir
// Afrokilla
// Alex
// Alexx
// Alicia
// Alkolil
// Allan
// Alvarone
// Amlink
// Anxo Flava
// Arnold Perez
// Art-One
// Artur
// Aslan
// Aya
// Babyson
// Bboy Oldie
// Bear
// Becca
// Benzo
// Blanka
// Body
// Bojin
// Bongo Roc
// Boobjester
// Box Won
// Brahim
// Bruce Wayne
// Buz
// CRUMBS
// Cambaz
// Candy
// Candy A.
// Casper
// Chardison
// Chris Cross
// Christopher
// Cico
// Cleopatra
// Crazy Legs
// Cri6
// Cros1
// Crumbs
// DKC Freeze
// DOM-K
// DRMJ
// Danilo
// Danny
// Dario
// Dazl
// Dazo
// Den Ruffneck
// Dom-K
// Dom:k
// Dora
// Dr. Hill
// Dragon
// Dragon Lee
// Dvir
// Dyzee
// ERi FeNeSiS
// El Amir
// El Vasi
// Emmanuel Fox
// Emmanuel fox
// Enano
// EraNetik
// Extremo
// Ez Mike
// FROST
// FastFoot
// Feel
// Felix
// Flash
// Flearock
// Flex
// Flo
// Focus
// Fox
// Freeze
// Frog
// Frost
// Funky Mike
// G1
// Gabba
// Genetics
// Giova Breakill
// Glacial
// Gohan
// Gombi
// Good Vibes
// Goofy
// Greku
// Gwiz
// Hakan
// Hatsolo
// Hefo
// High-Knee
// Hurricane
// INTACT
// Intact
// Issue
// JESS
// JURSKEE
// Jack
// Jaekwon
// Jay TheRock
// Jazzy Jess
// Jedi Jule
// Jeromeskee
// Jeskilz
// Jess
// Jiggz
// Jo-T
// Johnny Boy
// Jstickz
// Juleeone
// Jun
// Junior
// Jurskee
// KADOER
// KAZUHIRO
// KID GLYDE
// KOWLOON
// Kadoer
// Kastet
// Kate
// Katsu
// Katsu One
// Katsuya
// Kazuhiro
// Kazuki Roc
// Ken Swift
// Kid David
// Kid Glyde
// Killa Kim
// Kim
// Kleju
// Knuffelbunt
// Kometrock
// Konatsu
// Kouske
// Kujo
// Lamine
// Laos
// Lazylegz
// Leg
// Lego
// Lil Amok
// Lil G
// Lil Zoo
// Lildragon
// Lilou
// Lussy Sky
// MG
// MIGAZ
// MN Joe
// MOY
// Madman
// Magnum
// Maikel Walker
// Majkrock
// Manny
// Mario
// Mark
// Mary
// Max
// Menno
// Mezu
// Mighty Masta
// Mini Joe
// MiniBOJ_KiLLA
// Mounir
// Movie One
// Movie One
// Moy
// Mr. Wiggles
// My-Key77
// Nabil
// Nacera
// Nadia
// Naki
// Narumi
// Nemesis
// Niek
// Nori
// OG Renegade
// OG Samson
// Octopus
// Oleksii Artemiev
// Omar
// Omata
// Omegatron
// Omer
// Osga
// P
// Papa Break
// Parrish
// Patrix
// Philgood
// Piotr
// Po Ching
// Poe One
// Prototype
// Queen NV
// Random
// Raw-Mantic
// Reckless Lee
// Renegade
// Resist
// Reveal
// Rhythmmatic
// Rikardo Lyon
// Rob-Nasty Rocker
// Robin
// Rocket
// Ronnie
// Ronnie Ruen
// Ronnie Ruen
// Rookie
// RoxRite
// Roxrite
// Rush
// Ryoma
// Ryuji
// STEEZ
// San Andrea
// Sao
// Sapa
// Sarah Bee
// Sezai
// Shie Chan
// Side
// Simppa
// Sina
// Sinaya
// Skim
// SoFly
// Sophiela
// Spin
// Squarez
// Stebo
// Steez
// Stefani
// Steve
// Storm
// Style M
// Surprize
// Sweet Lu
// Taisuke
// The End
// The NextOne
// The Wolfer
// TheNext ONE
// Thesis
// Thias
// Tip Top T
// Tito
// Tono
// VALENTINE
// VEE
// VIRUS
// Valentine
// Valo
// Vartan
// Vee
// Virus
// Wicket
// Wing
// XEDO
// Xak
// Xedo
// Yan
// Yang
// Ynot
// Yurie
// Yves
// Z-YANG
// Zero Nine

// -- FROM JUDGES JSON CREATE judgesMaster JSON --
// var judgesMaster = {};
// var counter = 0;
// for (var key in judges) {
//     judgesMaster[Object.keys(judges)[counter]] = {
//         'alias': '',
//         'and8': '',
//         'wdsf': ''
//     };
//     counter++;
// }
// console.log(judgesMaster);
// 
// counter = 0;
// var output = 'var judgesMaster = {\n';
// for (var key in judgesMaster) {
//     output += "    '" + Object.keys(judgesMaster)[counter] + "': {\n";
//     output += "        'alias': '',\n";
//     output += "        'and8': '',\n";
//     output += "        'wdsf old': '',\n";
//     output += "        'wdsf new': ''\n";
//     output += "    },\n"
//     counter++;
// }
// output += '};';
// console.log(output);

var judgesMaster = {
    '4EverFresH~': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6938',
        'wdsf old': '',
        'wdsf new': ''
    },
    'AT': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/126',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ace': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/4330',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Admir': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/327',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Afrokilla': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5575',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Alex': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3566',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Alexx': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Alicia': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1117',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Alkolil': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/535',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Allan': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Alvarone': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3622',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Amlink': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7522',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Anxo Flava': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Arnold Perez': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Art-One': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1871',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Artur': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Aslan': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/318',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Aya': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5809',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Babyson': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1923',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Bboy Oldie': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7683',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Bear': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6963',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Becca': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2162',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Benzo': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Blanka': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3306',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Body': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3631',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Bojin': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2274',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Bongo Roc': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Boobjester': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6923',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Box Won': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Brahim': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1789',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Bruce Wayne': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1752',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Buz': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3965',
        'wdsf old': '',
        'wdsf new': ''
    },
    'CRUMBS': {
        'alias': 'Crumbs',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Cambaz': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Candy': { // TODO: double check if this is same Candy
        'alias': '',
        'and8': 'https://and8.dance/en/a/3261',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Candy A.': {  // TODO: double check if this is same Candy
        'alias': '',
        'and8': 'https://and8.dance/en/a/3261',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Casper': { // TODO: double check whether european casper or american casper
        'alias': '',
        'and8': 'https://and8.dance/en/a/1129',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Chardison': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Chris Cross': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Christopher': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Cico': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/79',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Cleopatra': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/178',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Crazy Legs': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/167',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Cri6': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1387',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Cros1': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/365',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Crumbs': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/221',
        'wdsf old': '',
        'wdsf new': ''
    },
    'DKC Freeze': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6927',
        'wdsf old': '',
        'wdsf new': ''
    },
    'DOM-K': {
        'alias': 'Dom-K',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'DRMJ': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6959',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Danilo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1652',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Danny': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2889',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dario': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2175',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dazl': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7771',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dazo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7068',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Den Ruffneck': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/973',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dom-K': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1331',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dom:k': {
        'alias': 'Dom-K',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dora': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/83',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dr. Hill': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1169',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dragon': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7616',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dragon Lee': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dvir': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Dyzee': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/885',
        'wdsf old': '',
        'wdsf new': ''
    },
    'ERi FeNeSiS': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1762',
        'wdsf old': '',
        'wdsf new': ''
    },
    'El Amir': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1927',
        'wdsf old': '',
        'wdsf new': ''
    },
    'El Vasi': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/9',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Emmanuel Fox': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/4370',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Emmanuel fox': {
        'alias': 'Emmanuel Fox',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Enano': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7678',
        'wdsf old': '',
        'wdsf new': ''
    },
    'EraNetik': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6872',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Extremo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/317',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ez Mike': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/809',
        'wdsf old': '',
        'wdsf new': ''
    },
    'FROST': {
        'alias': 'Frost',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'FastFoot': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/321',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Feel': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5090',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Felix': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5836',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Flash': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6376',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Flearock': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Flex': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/4940',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Flo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5985',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Focus': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/25',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Fox': {
        'alias': 'Emmanuel Fox',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Freeze': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/823',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Frog': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7685',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Frost': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/175',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Funky Mike': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/124',
        'wdsf old': '',
        'wdsf new': ''
    },
    'G1': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/4749',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Gabba': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Genetics': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7150',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Giova Breakill': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Glacial': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6062',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Gohan': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/9304',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Gombi': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/401',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Good Vibes': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1870',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Goofy': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/73',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Greku': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1858',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Gwiz': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Hakan': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Hatsolo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3140',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Hefo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3850',
        'wdsf old': '',
        'wdsf new': ''
    },
    'High-Knee': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/447',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Hurricane': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3209',
        'wdsf old': '',
        'wdsf new': ''
    },
    'INTACT': {
        'alias': 'Intact',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Intact': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/972',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Issue': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/699',
        'wdsf old': '',
        'wdsf new': ''
    },
    'JESS': { // TODO: confirm whether same Jess or possibly multiple Jess's
        'alias': 'Jess',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'JURSKEE': {
        'alias': 'Jurskee',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jack': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7554',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jaekwon': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jay TheRock': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6026',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jazzy Jess': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jedi Jule': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jeromeskee': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3063',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jeskilz': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/656',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jess': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3016',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jiggz': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jo-T': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Johnny Boy': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jstickz': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7669',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Juleeone': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7604',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jun': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Junior': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/135',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Jurskee': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1577',
        'wdsf old': '',
        'wdsf new': ''
    },
    'KADOER': {
        'alias': 'Kadoer',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'KAZUHIRO': {
        'alias': 'Kazuhiro',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'KID GLYDE': {
        'alias': 'Kid Glyde',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'KOWLOON': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5883',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kadoer': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3741',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kastet': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5754',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kate': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/4317',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Katsu': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7377',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Katsu One': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/981',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Katsuya': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1478',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kazuhiro': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1561',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kazuki Roc': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/356',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ken Swift': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kid David': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kid Glyde': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/705',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Killa Kim': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6801',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kim': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6061',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kleju': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/536',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Knuffelbunt': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kometrock': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2350',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Konatsu': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7358',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kouske': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/593',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Kujo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/525',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lamine': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/104',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Laos': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/241',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lazylegz': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/527',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Leg': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lego': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lil Amok': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/136',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lil G': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/95',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lil Zoo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/128',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lildragon': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lilou': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/8470',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Lussy Sky': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1590',
        'wdsf old': '',
        'wdsf new': ''
    },
    'MG': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/947',
        'wdsf old': '',
        'wdsf new': ''
    },
    'MIGAZ': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'MN Joe': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'MOY': {
        'alias': 'Moy',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Madman': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1373',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Magnum': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Maikel Walker': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6791',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Majkrock': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6383',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Manny': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1293',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Mario': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Mark': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7341',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Mary': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/9727',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Max': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1535',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Menno': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/258',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Mezu': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6926',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Mighty Masta': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Mini Joe': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1541',
        'wdsf old': '',
        'wdsf new': ''
    },
    'MiniBOJ_KiLLA': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Mounir': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/272',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Movie One': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1265',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Movie One': {
        'alias': 'Movie One',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Moy': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1464',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Mr. Wiggles': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/165',
        'wdsf old': '',
        'wdsf new': ''
    },
    'My-Key77': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2568',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Nabil': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2650',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Nacera': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Nadia': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2236',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Naki': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1824',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Narumi': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/350',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Nemesis': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/4332',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Niek': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Nori': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1361',
        'wdsf old': '',
        'wdsf new': ''
    },
    'OG Renegade': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6961',
        'wdsf old': '',
        'wdsf new': ''
    },
    'OG Samson': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6030',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Octopus': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1365',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Oleksii Artemiev': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Omar': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1463',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Omata': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Omegatron': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Omer': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Osga': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'P': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1628',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Papa Break': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2126',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Parrish': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/2',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Patrix': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Philgood': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Piotr': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7710',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Po Ching': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Poe One': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/122',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Prototype': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Queen NV': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7666',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Random': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Raw-Mantic': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/377',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Reckless Lee': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1277',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Renegade': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/50',
        'wdsf old': 'https://old.worlddancesport.org/Official/Detail/Kevin-Gopie-e2cb6186-9e61-44e8-8c09-a8d600bd2467',
        'wdsf new': 'https://www.worlddancesport.org/Officials/Kevin-Gopie-e2cb6186-9e61-44e8-8c09-a8d600bd2467'
    },
    'Resist': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7704',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Reveal': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Rhythmmatic': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1576',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Rikardo Lyon': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Rob-Nasty Rocker': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Robin': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1213',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Rocket': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ronnie': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/94',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ronnie Ruen': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/231',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ronnie Ruen': {
        'alias': 'Ronnie Ruen',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Rookie': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'RoxRite': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/93',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Roxrite': {
        'alias': 'RoxRite',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Rush': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3235',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ryoma': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7615',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ryuji': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/357',
        'wdsf old': '',
        'wdsf new': ''
    },
    'STEEZ': {
        'alias': 'Steez',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'San Andrea': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5867',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Sao': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Sapa': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1859',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Sarah Bee': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3979',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Sezai': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Shie Chan': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5156',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Side': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7336',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Simppa': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Sina': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1406',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Sinaya': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/42',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Skim': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/886',
        'wdsf old': '',
        'wdsf new': ''
    },
    'SoFly': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6645',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Sophiela': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/86',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Spin': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/895',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Squarez': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/189',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Stebo': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Steez': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1398',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Stefani': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/8090',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Steve': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6883',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Storm': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/24',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Style M': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7686',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Surprize': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6924',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Sweet Lu': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7388',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Taisuke': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/96',
        'wdsf old': '',
        'wdsf new': ''
    },
    'The End': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/576',
        'wdsf old': '',
        'wdsf new': ''
    },
    'The NextOne': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/435',
        'wdsf old': '',
        'wdsf new': ''
    },
    'The Wolfer': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1512',
        'wdsf old': '',
        'wdsf new': ''
    },
    'TheNext ONE': {
        'alias': 'The NextOne',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Thesis': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/123',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Thias': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Tip Top T': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Tito': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Tono': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'VALENTINE': {
        'alias': 'Valentine',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'VEE': {
        'alias': 'Vee',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'VIRUS': {
        'alias': 'Virus',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Valentine': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/577',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Valo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/121',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Vartan': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Vee': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7743',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Virus': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/6797',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Wicket': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/170',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Wing': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/97',
        'wdsf old': '',
        'wdsf new': ''
    },
    'XEDO': {
        'alias': 'Xedo',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Xak': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/1251',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Xedo': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/3207',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Yan': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/623',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Yang': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7376',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Ynot': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/5877',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Yurie': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/4016',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Yves': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Z-YANG': {
        'alias': '',
        'and8': '',
        'wdsf old': '',
        'wdsf new': ''
    },
    'Zero Nine': {
        'alias': '',
        'and8': 'https://and8.dance/en/a/7653',
        'wdsf old': '',
        'wdsf new': ''
    },
};

// var and8Search = 'https://and8.dance/en/search?q=' + ___;
// document.querySelector('#content_full_layout > b:nth-child(6) > a').innerText; // get text of first result which is individual's name
// document.querySelector('#content_full_layout > b:nth-child(6) > a').href; // get link of first result

// var wdsfOldSearch = 'https://old.worlddancesport.org/Official/List#nameFilter=' + ___ + '&divisionFilter=Breaking&licenseFilter=Adjudicator&licenseFilter=Chairman&licenseFilter=Examiner&licenseFilter=Invigilator&licenseFilter=Scrutiny&licenseFilter=DJ&licenseFilter=HeadJudge&disciplineFilter=56&disciplineFilter=209&disciplineFilter=59&disciplineFilter=61&disciplineFilter=211&disciplineFilter=55&disciplineFilter=208&disciplineFilter=60&disciplineFilter=63&disciplineFilter=212&disciplineFilter=57&disciplineFilter=210&disciplineFilter=173&disciplineFilter=104&disciplineFilter=105&disciplineFilter=202&disciplineFilter=67&disciplineFilter=204&disciplineFilter=179&disciplineFilter=181&statusFilter=Active&statusFilter=Expired&memberCountryFilter=-1&profileFilter=false&formAction=go&Column=Name&Direction=Ascending&page=1&pageSize=25';
// var wdsfNewSearch = 'https://www.worlddancesport.org/Officials#Name=' + ___ + '&CountryId=&HasActiveLicense=Either&LicenseDivision=Breaking';

// -- PASTE INTO HERE THE OUTPUT FROM PYTHON SCRIPT
var judgeslinks = `

`;

// -- UPDATE judgesMaster JSON WITH AND8 LINKS FROM PYTHON SCRIPT OUTPUT
var judgeslinksarray = judgeslinks.split('\n');

var judgeName;
var judgesLink;
var counter = 0;
for (var j = 0; j < judgeslinksarray.length; j++) {
    judgeName = judgeslinksarray[j].split(',')[0];
    judgesLink = judgeslinksarray[j].split(',')[1];
    if ((judgesMaster[judgeName]) && (judgesLink != 'error')) {
        judgesMaster[judgeName]['and8'] = judgesLink;
    }
}
console.log(judgesMaster);

counter = 0;
var output = 'var judgesMaster = {\n';
for (var key in judgesMaster) {
    output += "    '" + Object.keys(judgesMaster)[counter] + "': {\n";
    output += "        'alias': '" + judgesMaster[key]['alias'] + "',\n";
    output += "        'and8': '" + judgesMaster[key]['and8'] + "',\n";
    output += "        'wdsf old': '" + judgesMaster[key]['wdsf old'] + "',\n";
    output += "        'wdsf new': '" + judgesMaster[key]['wdsf new'] + "'\n";
    output += "    },\n"
    counter++;
}
output += '};';
console.log(output);

// -- RETURN LIST OF JUDGES THAT ARE MISSING LINK
var output = '';
var counter = 0;
var judgeName;
for (var key in judgesMaster) {
    judgeName = Object.keys(judgesMaster)[counter];
    if (judgesMaster[key]['alias']) {
        judgeName = judgesMaster[key]['alias'];
    }
    if (judgesMaster[judgeName]['and8'] == '') {
    // if (judgesMaster[judgeName]['wdsf old'] == '') {
    // if (judgesMaster[judgeName]['wdsf new'] == '') {
        output += Object.keys(judgesMaster)[counter] + '\n';
    }
    counter++;
}
console.log(output);

// -- JUDGES MISSING AND8 LINK
// 66 judges:
// Alexx
// Allan
// Anxo Flava
// Arnold Perez
// Artur
// Benzo
// Bongo Roc
// Box Won
// Cambaz
// Chardison
// Christopher
// Dragon Lee
// Dvir
// Flearock
// Gabba
// Giova Breakill
// Gwiz
// Hakan
// Jaekwon
// Jazzy Jess
// Jedi Jule
// Jiggz
// Jo-T
// Johnny Boy
// Jun
// Ken Swift
// Kid David
// Knuffelbunt
// Leg
// Lego
// Lildragon
// MIGAZ
// MN Joe
// Magnum
// Mario
// Mighty Masta
// MiniBOJ_KiLLA
// Nacera
// Niek
// Oleksii Artemiev
// Omata
// Omegatron
// Omer
// Osga
// Patrix
// Philgood
// Po Ching
// Prototype
// Random
// Reveal
// Rikardo Lyon
// Rob-Nasty Rocker
// Rocket
// Rookie
// Sao
// Sezai
// Simppa
// Stebo
// Thias
// Tip Top T
// Tito
// Tono
// Vartan
// Yves
// Z-YANG