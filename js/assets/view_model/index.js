'use strict';

import model from '../model/index.js';

const inputStr = document.getElementById('inputStr');
const modeBtn = document.getElementById('modeBtn');
const modeEl = document.getElementById('mode');
const resultStr = document.getElementById('resultStr');

modeBtn.addEventListener('click', changeModeString);

function changeModeString(){
    const result = new model(inputStr.value, modeEl.value).changeMode();
    resultStr.innerHTML = `Result: ${result}`;
}
