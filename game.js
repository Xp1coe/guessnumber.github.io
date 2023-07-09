function show() {
    let ans = document.querySelector('#answer');
    ans = Math.floor(Math.random() * 20);
    console.log(ans);
    let numpie = document.querySelector('#number').value;
    document.querySelector('#guessedoutput').innerHTML = numpie;
    let check = document.querySelector('#checker');
    let score = document.querySelector('#scored');
    score = 20;
    document.querySelector('#scored').innerHTML = score;
    if (numpie == ans) {
        check = ('correct');
        document.querySelector('#checker').innerHTML = check;
        score = score + 1;
        document.querySelector('#scored').innerHTML = score;
        document.body.style.backgroundColor = 'green';
    }
    else if (numpie == 0 || numpie == NaN || numpie == null) {
        check = ('invalid');
        document.querySelector('#checker').innerHTML = check;
        ans = null;
        document.body.style.backgroundColor = 'black';
    }
    else if (numpie < ans) {
        check = ('too high');
        document.querySelector('#checker').innerHTML = check;
        score = score - 1;
        document.querySelector('#scored').innerHTML = score;
        document.body.style.backgroundColor = 'red';
    }
    else if (numpie > ans) {
        check = ('too low');
        document.querySelector('#checker').innerHTML = check;
        score = score - 1;
        document.querySelector('#scored').innerHTML = score;
        document.body.style.backgroundColor = 'red';
    }
}

function again() {
    document.body.style.backgroundColor = 'black';
    let ans = document.querySelector('#answer');
    let check = document.querySelector('#checker');
    let numpie = document.querySelector('input');
    ans = null;
    check = null;
    numpie = null;
    document.querySelector('#answer').innerHTML = ans;
    document.querySelector('#checker').innerHTML = check;
    document.querySelector('#number').innerHTML = numpie;
    document.querySelector('#guessedoutput').innerHTML = numpie;
    document.querySelector('#scored').innerHTML = score;

}

