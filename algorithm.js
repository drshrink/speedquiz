let bank = {
    numberList:['1','2','3','4','5','6','7','8','9','0'],
    symbolList:['!','@','#','$','%','^','&','*','\(','\)'],
    list:['1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','\(','\)'],
    sequence:[1.1,0.9,0.8,1.2,0.9,1.1,1.1,0.9,0.8,1.2],
    response:[],
    speed:0.066,
    current:'1',
}

function getRandom(l) {
    var item = l[Math.floor(Math.random()*l.length)];
    return item;
}
function pass() {
    console.log('waiting...')
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
    for(let i = 0; i < bank.sequence.length; i++) {
        console.log('index : ',i);
        // show number/symbol
        bank.current = getRandom(bank.list);
        var d = document.querySelector('#stimulus');
        d.innerHTML = bank.current;
        await sleep(66);
        d.innerHTML = '+';
        // hide and show +
        await sleep(bank.sequence[i]*1000)
    }
}


// window.setTimeout(alert('hello'), 2000);
// let human = {
//     age:10,
//     die: function() {
//         alert('dead')
//     }
// }