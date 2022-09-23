let btn = document.getElementsByClassName('btn')
let operator = document.getElementsByClassName('oprator')

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        if (btn[i].innerHTML == '=') {
            try {
                let input = document.getElementById('inputField');
                input.value = math.evaluate(input.value);
            }
            catch {
                document.getElementById('inputField').value = "Bohot tez ho rahe ho!! XD";
            }
        }
        else if (btn[i] != '=')
            document.getElementById('inputField').value += btn[i].innerHTML
    });
}

for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', () => {
        document.getElementById('inputField').value += operator[i].innerHTML
    });
}

document.getElementById('clr').addEventListener('click',clr);

function clr(){
    document.getElementById('inputField').value = '';
}