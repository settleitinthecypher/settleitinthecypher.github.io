var string = // '' + '\n' +
    '' + '\n';

string = string.replaceAll(' -',',0');
string = string.replaceAll('Red +',',-');
string = string.replaceAll('Blue +',',');
string = string.replaceAll('% ','');
string = string.replaceAll('%','');

string = string.replaceAll('JESS ','');
string = string.replaceAll('VIRUS ','');
string = string.replaceAll('MOY ','');
string = string.replaceAll('JURSKEE ','');
string = string.replaceAll('VALENTINE ','');
string = string.replaceAll('MIGAZ ','');
string = string.replaceAll('INTACT ','');
string = string.replaceAll('KOWLOON ','');
string = string.replaceAll('STEEZ ','');

// string = string.replaceAll('KID GLYDE ','');
// string = string.replaceAll('Z-YANG ','');
// string = string.replaceAll('FROST ','');
// string = string.replaceAll('XEDO ','');
// string = string.replaceAll('CRUMBS ','');
// string = string.replaceAll('KADOER ','');
// string = string.replaceAll('VEE ','');
// string = string.replaceAll('KAZUHIRO ','');
// string = string.replaceAll('DOM-K ','');

console.log(string);