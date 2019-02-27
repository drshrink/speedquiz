let bank = {
    numberList:['1','2','3','4','5','6','7','8','9','0'],
    symbolList:['!','@','#','$','%','^','&','*','\(','\)'],
    list:['1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','\(','\)'],
    sleepIntervalSequence:[1100,900,800,1200,900,1100,1100,900,800,1200], //milliseconds
    displayInterval:66, //milliseconds
    responseSequence:[],
    current:'1',
}
let global = {
    session:0,
    isSessionRunning:false,
}
let timer = {
    startTime:undefined,
}

class Response {
    constructor(time,response) {
        this.time = time;
        this.response = response;
    }
}

function getRandom(l) {
    var item = l[Math.floor(Math.random()*l.length)];
    return item;
}
function log(content) {
    var el = document.querySelector("textarea.debug");
    el.textContent = el.textContent + '\n' + content;
    console.log(content);
}
// function sleep(milliseconds) {
//     var myVar;
//     myVar = setTimeout(pass, milliseconds);
//     //clearTimeout(myVar);
// }
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function start() {
    bank.responseSequence = [];
    timer.startTime = undefined;
    timer.startTime = new Date();
    global.session++; log('session start : ' + global.session)
    global.isSessionRunning = true;
    for(let i = 0; i < bank.sleepIntervalSequence.length; i++) {
    //for(let i = 0; i < 1; i++) {
        log('sequence : '+i)
        log('sleep time : '+bank.sleepIntervalSequence[i])
        log('display time : '+bank.displayInterval)
        if(!global.isSessionRunning) {
            log('session has stopped. session : ' + global.session);
            return;
        }
        // show number/symbol
        bank.current = getRandom(bank.list);
        var d = document.querySelector('#stimulus');
        d.innerHTML = bank.current;
        await sleep(bank.displayInterval);
        d.innerHTML = '+';
        // hide and show +
        await sleep(bank.sleepIntervalSequence[i])
    }
    global.isSessionRunning = false;
}

async function stop() {
    global.isSessionRunning = false;
    bank.responseSequence = [];
}

function symbol_choice() {
    var res = new Response(Date.now()-timer.startTime,'symbol')
    bank.responseSequence.push(res)
}

function number_choice() {
    var res = new Response(Date.now()-timer.startTime,'number')
    bank.responseSequence.push(res)
}

// window.setTimeout(alert('hello'), 2000);
// let human = {
//     age:10,
//     die: function() {
//         alert('dead')
//     }
// }