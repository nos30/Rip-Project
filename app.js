

function getWordsList(letter) {
    const words = {
        mWords: [
            'mangeurs de',
            'Maître des ',
            'Mystérieux ',
            'Maraudeur ',
            'Mélangeur ',
            'Majestueux ',
            'Moustachu ',
            'Médiateur',
            'Merveilleux ',
            'Méticuleux ',
            'Magicien'
        ],
        gWords: [
            'Grosse ',
            'Gargantuesques ',
            'Glouton de',
            'Gourmand ',
            'Goûts  ',
            'Gourmet de  ',
            'Grandiose  ',
            'Gourmand ',
            'Gobe-tout ',
            'Glouton  '
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

const mCharRef = document.getElementById('m-char');
mCharRef.addEventListener('click', (e) => {
    changeWord('m');
})

const gCharRef = document.getElementById('g-char');
gCharRef.addEventListener('click', (e) => {
    changeWord('g'); 
})

const bCharRef = document.getElementById('b-char');
bCharRef.addEventListener('click', (e) => {
    changeWord('b');
})