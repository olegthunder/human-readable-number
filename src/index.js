module.exports = function toReadable (number) {
  let str = number.toString();
  let ReadableNumber = '';
    if (str.length == 1 || (str.length == 2 && str[0] == 1)) {
            switch (str){
        case '0': 
        ReadableNumber = ReadableNumber + 'zero';
        break;
        case '1': 
        ReadableNumber = ReadableNumber + 'one';
        break;
        case '2': 
        ReadableNumber = ReadableNumber + 'two';
        break;
        case '3': 
        ReadableNumber = ReadableNumber + 'three';
        break;
        case '4': 
        ReadableNumber = ReadableNumber + 'four';
        break;
        case '5': 
        ReadableNumber = ReadableNumber + 'five';
        break;
        case '6': 
        ReadableNumber = ReadableNumber + 'six';
        break;
        case '7': 
        ReadableNumber = ReadableNumber + 'seven';
        break;
        case '8': 
        ReadableNumber = ReadableNumber + 'eight';
        break;
        case '9': 
        ReadableNumber = ReadableNumber + 'nine';
        break;
        case '10': 
        ReadableNumber = ReadableNumber + 'ten';
        break;
        case '11': 
        ReadableNumber = ReadableNumber + 'eleven';
        break;
        case '12': 
        ReadableNumber = ReadableNumber + 'twelve';
        break;
        case '13': 
        ReadableNumber = ReadableNumber + 'thirteen';
        break;
        case '14': 
        ReadableNumber = ReadableNumber + 'fourteen';
        break;
        case '15': 
        ReadableNumber = ReadableNumber + 'fifteen';
        break;
        case '16': 
        ReadableNumber = ReadableNumber + 'sixteen';
        break;
        case '17': 
        ReadableNumber = ReadableNumber + 'seventeen';
        break;
        case '18': 
        ReadableNumber = ReadableNumber + 'eighteen';
        break;
        case '19': 
        ReadableNumber = ReadableNumber + 'nineteen';
        break;
    }
}

if (str.length == 2 && str[0] != 1) {
            switch (str[0]){
                case '2': 
                ReadableNumber = ReadableNumber + 'twenty ';
                break;
                case '3': 
                ReadableNumber = ReadableNumber + 'thirty ';
                break;
                case '4': 
                ReadableNumber = ReadableNumber + 'forty ';
                break;
                case '5': 
                ReadableNumber = ReadableNumber + 'fifty ';
                break;
                case '6': 
                ReadableNumber = ReadableNumber + 'sixty ';
                break;
                case '7': 
                ReadableNumber = ReadableNumber + 'seventy ';
                break;
                case '8': 
                ReadableNumber = ReadableNumber + 'eighty ';
                break;
                case '9': 
                ReadableNumber = ReadableNumber + 'ninety ';
                break;
            }
    
            switch (str[1]){
                case '0':
                ReadableNumber = ReadableNumber.slice(0,-1);
                break;
                case '1': 
                ReadableNumber = ReadableNumber + 'one';
                break;
                case '2': 
                ReadableNumber = ReadableNumber + 'two';
                break;
                case '3': 
                ReadableNumber = ReadableNumber + 'three';
                break;
                case '4': 
                ReadableNumber = ReadableNumber + 'four';
                break;
                case '5': 
                ReadableNumber = ReadableNumber + 'five';
                break;
                case '6': 
                ReadableNumber = ReadableNumber + 'six';
                break;
                case '7': 
                ReadableNumber = ReadableNumber + 'seven';
                break;
                case '8': 
                ReadableNumber = ReadableNumber + 'eight';
                break;
                case '9': 
                ReadableNumber = ReadableNumber + 'nine';
                break;
        }
    }

if (str.length == 3 && str[1] != 1) {
        switch (str[0]){
        case '1': 
        ReadableNumber = 'one hundred ';
        break;
        case '2': 
        ReadableNumber = 'two hundred ';
        break;
        case '3': 
        ReadableNumber = 'three hundred ';
        break;
        case '4': 
        ReadableNumber = 'four hundred ';
        break;
        case '5': 
        ReadableNumber = 'five hundred ';
        break;
        case '6': 
        ReadableNumber = 'six hundred ';
        break;
        case '7': 
        ReadableNumber = 'seven hundred ';
        break;
        case '8': 
        ReadableNumber = 'eight hundred ';
        break;
        case '9': 
        ReadableNumber = 'nine hundred ';
        break;
    }
        switch (str[1]){
            case '0':
            ReadableNumber = ReadableNumber + '';
            break;
            case '2': 
            ReadableNumber = ReadableNumber + 'twenty ';
            break;
            case '3': 
            ReadableNumber = ReadableNumber + 'thirty ';
            break;
            case '4': 
            ReadableNumber = ReadableNumber + 'forty ';
            break;
            case '5': 
            ReadableNumber = ReadableNumber + 'fifty ';
            break;
            case '6': 
            ReadableNumber = ReadableNumber + 'sixty ';
            break;
            case '7': 
            ReadableNumber = ReadableNumber + 'seventy ';
            break;
            case '8': 
            ReadableNumber = ReadableNumber + 'eighty ';
            break;
            case '9': 
            ReadableNumber = ReadableNumber + 'ninety ';
            break;
        }

        switch (str[2]){
            case '0':
            ReadableNumber = ReadableNumber.slice(0,-1);
            break;
            case '1': 
            ReadableNumber = ReadableNumber + 'one';
            break;
            case '2': 
            ReadableNumber = ReadableNumber + 'two';
            break;
            case '3': 
            ReadableNumber = ReadableNumber + 'three';
            break;
            case '4': 
            ReadableNumber = ReadableNumber + 'four';
            break;
            case '5': 
            ReadableNumber = ReadableNumber + 'five';
            break;
            case '6': 
            ReadableNumber = ReadableNumber + 'six';
            break;
            case '7': 
            ReadableNumber = ReadableNumber + 'seven';
            break;
            case '8': 
            ReadableNumber = ReadableNumber + 'eight';
            break;
            case '9': 
            ReadableNumber = ReadableNumber + 'nine';
            break;
        }
}

if (str.length == 3 && str[1] == 1) {
    switch (str[0]){
        case '1': 
        ReadableNumber = 'one hundred ';
        break;
        case '2': 
        ReadableNumber = 'two hundred ';
        break;
        case '3': 
        ReadableNumber = 'three hundred ';
        break;
        case '4': 
        ReadableNumber = 'four hundred ';
        break;
        case '5': 
        ReadableNumber = 'five hundred ';
        break;
        case '6': 
        ReadableNumber = 'six hundred ';
        break;
        case '7': 
        ReadableNumber = 'seven hundred ';
        break;
        case '8': 
        ReadableNumber = 'eight hundred ';
        break;
        case '9': 
        ReadableNumber = 'nine hundred ';
        break;
    }
    switch (number % 100){
        case 10: 
        ReadableNumber = ReadableNumber + 'ten';
        break;
        case 11: 
        ReadableNumber = ReadableNumber + 'eleven';
        break;
        case 12: 
        ReadableNumber = ReadableNumber + 'twelve';
        break;
        case 13: 
        ReadableNumber = ReadableNumber + 'thirteen';
        break;
        case 14: 
        ReadableNumber = ReadableNumber + 'fourteen';
        break;
        case 15: 
        ReadableNumber = ReadableNumber + 'fifteen';
        break;
        case 16: 
        ReadableNumber = ReadableNumber + 'sixteen';
        break;
        case 17: 
        ReadableNumber = ReadableNumber + 'seventeen';
        break;
        case 18: 
        ReadableNumber = ReadableNumber + 'eighteen';
        break;
        case 19: 
        ReadableNumber = ReadableNumber + 'nineteen';
        break;
    }
}
return ReadableNumber;
}

