let p1 = "";
let p2 = "";
let opt;

function nhanphim(btn) {
    const pre = btn.innerText
    const resultInput = document.getElementById('resultInput')
    if (isNaN(pre)) {
        if (pre == 'C') {
            p1 = "";
            p2 = "";
            opt = undefined
            resultInput.value = '';
            return;
        }
        if (pre == '=') {
            const result = perform;
            (p1, p1, opt)
            resultInput.value = result
            p1 = "";
            p2 = "";
            otp = undefined;
        } else {
            opt = pre;
        }
    } else {
        if (opt) {
            p2 += pre;
            resultInput.value = p2;
        } else {
            p1 += pre;
            resultInput.value = p1;
        }
    }
}

function perform(orand1, orand2, otor) {
    orand1 = Number(orand1);
    orand2 = Number(orand2);
    switch (otor) {
        case '+':
            return orand1 + orand2
        case '-':
            return orand1 - orand2
        case 'x':
            return orand1 * orand2
        case ':':
            return orand1 / orand2
    }

}