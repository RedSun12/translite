const input = document.querySelector('#inputBox')
const inputButton = document.querySelector('#inputButton')
const table = document.querySelector('#table')
const cloneElem = table.querySelector('.line')
const clean = document.querySelector('#clean')

function transliteWord () {
    const clone = cloneElem.cloneNode(true)
    clone.style.borderTop = 'solid';
    clone.style.borderWidth = '1px';
    const number = document.querySelectorAll('.number')
    let cloneNumber = clone.querySelector('.number')
    let cloneWord = clone.querySelector('.word')
    let cloneTranslite = clone.querySelector('.wordTrans')

    let transliteBox = '';

    for (i=0; i<input.value.length; i++) {
        const letter = {
            'а':'a', 'б':'b', 'в':'v', 'г':'g', 'д':'d', 'е':'e', 'ё':'e', 'ж':'zh', 'з':'z', 'и':'i', 'й':'y', 'к':'k', 'л':'l', 'м':'m', 'н': 'n', 'о':'o', 'п':'p', 'р':'r', 'с':'s', 'т':'t', 'у':'u', 'ф':'f', 'х':'h', 'ц':'c', 'ч':'ch', 'ш':'sh', 'щ':'sch', 'ь':'', 'ы':'y', 'ъ':'', 'э':'e', 'ю':'yu', 'я':'ya', 'А':'A', 'Б':'B', 'В':'V', 'Г':'G', 'Д':'D', 'Е':'E', 'Ё':'E', 'Ж':'Zh', 'З':'Z', 'И':'I', 'Й':'Y', 'К':'K', 'Л':'L', 'М':'M', 'Н':'N', 'О':'O', 'П':'P', 'Р':'R', 'С':'S', 'Т':'T', 'У':'U', 'Ф':'F', 'Х':'H', 'Ц':'C', 'Ч':'Ch', 'Ш':'Sh', 'Щ':'Sch', 'Ь':'', 'Ы':'Y', 'Ъ':'', 'Э':'E', 'Ю':'Yu', 'Я':'Ya'
        };

        if (input.value[i] == ' '){
            transliteBox += ' ';
        } else {
            if (letter[input.value[i]] == undefined) {
                transliteBox += input.value[i]
            } else {
                transliteBox += letter[input.value[i]];
            }
        }

    }

    cloneWord.style.position = 'relative'
    cloneTranslite.style.position = 'relative'

    if (input.value.length > 5) {
        cloneWord.textContent = input.value.substring(0, 5) + '...';
        const allWord = document.createElement('div');
        allWord.className = 'allword';
        allWord.innerText = input.value
        allWord.style.borderRadius = '10px'
        allWord.style.display = 'none'
        allWord.style.backgroundColor = 'white'
        allWord.style.padding = '10px'
        allWord.style.border = 'solid'
        allWord.style.borderWidth = '1px'
        cloneWord.appendChild(allWord);
        cloneWord.addEventListener('mouseenter', () => {
            allWord.style.position = 'absolute';
            allWord.style.top = '-60px';
            allWord.style.left = '-40px';
            allWord.style.display = 'block'
        })
        cloneWord.addEventListener('mouseleave', () => {
            allWord.style.display = 'none';
        })
    } else {
        cloneWord.textContent = input.value
    }

    if (transliteBox.length > 5) {
        cloneTranslite.textContent = transliteBox.substring(0, 5) + '...'
        const allTranslite = document.createElement('div');
        allTranslite.className = 'allword';
        allTranslite.innerText = transliteBox
        allTranslite.style.borderRadius = '10px'
        allTranslite.style.border = 'solid'
        allTranslite.style.borderWidth = '1px'
        allTranslite.style.display = 'none'
        allTranslite.style.backgroundColor = 'white'
        allTranslite.style.padding = '10px'
        cloneTranslite.appendChild(allTranslite);
        cloneTranslite.addEventListener('mouseenter', () => {
            allTranslite.style.position = 'absolute';
            allTranslite.style.top = '-65px';
            allTranslite.style.left = '-40px';
            allTranslite.style.display = 'block'
        })
        cloneTranslite.addEventListener('mouseleave', () => {
            allTranslite.style.display = 'none';
        })
        
    } else {
        cloneTranslite.textContent = transliteBox
    }
 
    // cloneWord.textContent = input.value
    // cloneTranslite.textContent = transliteBox
    cloneNumber.textContent = number.length + 1

    const deleteX = clone.querySelector('.deleteX')

    deleteX.addEventListener('click', () => {
        deleteX.parentElement.parentElement.remove()
        let reNumber = document.querySelectorAll('.number')
        for (let i=0; i<reNumber.length; i++) {
            reNumber[i].textContent = i+1;
            console.log(reNumber[i].textContent)
        }
    })
    
    table.appendChild(clone)

    input.value = '';
}

inputButton.addEventListener('click', transliteWord)

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        transliteWord()
    }
})

clean.addEventListener('click', () => {
    window.location.reload();
})

