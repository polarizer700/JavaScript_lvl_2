let box = document.getElementsByClassName('box');

let textBefore = document.getElementById('text-box__before');
let textAfter = document.getElementById('text-box__after');

let openNextEx = () => {
    box.style.display = 'block';

};

let changeText = () => {
    let str = textBefore.textContent;
    console.log(str);

    textAfter.innerText = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');
};
