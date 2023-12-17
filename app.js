import { interval} from 'rxjs'

function getWordsList(letter) {
    const words = {
        mWords: [
            'Mélangeur de',
            'Ménageur de',
            'Mangeur de',
            'Manipulateur de',
            'Marchandeur de',
            'Malfaiteur de',
            'Malentendeur de',
            'Marmonneur de',
            'Mordilleur de',
            'Monnayeur de',
            'Modulateur de',
            'Machouilleur de',
        ],
        gWords: [
            'Grosse ',
            'Gigantesque',
            'Gargantuesques ',
            'Gentille',
            'Gracieuse ',
            'Généreuse  ',
            'Glorieuse ',
            'Grandiose  ',
            'Gourmande ',
        ],
        bWords: [
            'boules'
        ]
    }
    return words[letter + 'Words'];
}

function getRandom(max) {
    return Math.floor(Math.random() * max)
}

function changeWord(letter) {
    const wordRef = document.getElementById(letter + '-word');
    const wordList = getWordsList(letter);
    const rand = getRandom(wordList.length);
    const word = wordList[rand];
    let spliceWord;
    if (word[0] === letter || word[0] === letter.toUpperCase()) spliceWord = word.substring(1);
    wordRef.textContent = spliceWord;
}

const charsRef = Array.from(document.getElementsByClassName('char'));

// Start 🚀 !

charsRef.forEach(char => {
   const charId = char.id.slice(0, 1);
    char.addEventListener('click', (e) => {
        changeWord(charId);


    })
});
