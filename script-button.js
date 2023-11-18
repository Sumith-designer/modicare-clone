const plus_1 = document.querySelector(".plus-1"),
minus_1 = document.querySelector(".minus-1"),
num_1 = document.querySelector(".num-1");

const plus_2 = document.querySelector(".plus-2"),
minus_2 = document.querySelector(".minus-2"),
num_2 = document.querySelector(".num-2");

const plus_3 = document.querySelector(".plus-3"),
minus_3 = document.querySelector(".minus-3"),
num_3 = document.querySelector(".num-3");

const plus_4 = document.querySelector(".plus-4"),
minus_4 = document.querySelector(".minus-4"),
num_4 = document.querySelector(".num-4");

const plus_5 = document.querySelector(".plus-5"),
minus_5 = document.querySelector(".minus-5"),
num_5 = document.querySelector(".num-5");

const plus_6 = document.querySelector(".plus-6"),
minus_6 = document.querySelector(".minus-6"),
num_6 = document.querySelector(".num-6");

const plus_7 = document.querySelector(".plus-7"),
minus_7 = document.querySelector(".minus-7"),
num_7 = document.querySelector(".num-7");

const plus_8 = document.querySelector(".plus-8"),
minus_8 = document.querySelector(".minus-8"),
num_8 = document.querySelector(".num-8");

let a , b , c , d , e , f , g , h;
a=b=c=d=e=f=g=h=1;

// button 1

plus_1.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ? "0" + a : a;
    num_1.innerHTML = a;
});

minus_1.addEventListener("click", ()=>{
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num_1.innerHTML = a;
    }
});

// button 2

plus_2.addEventListener("click", ()=>{
    b++;
    b = (b < 10) ? "0" + b : b;
    num_2.innerHTML = b;
});

minus_2.addEventListener("click", ()=>{
    if (b > 1) {
        b--;
        b = (b < 10) ? "0" + b : b;
        num_2.innerHTML = b;
    }
});

// button 3

plus_3.addEventListener("click", ()=>{
    c++;
    c = (c < 10) ? "0" + c : c;
    num_3.innerHTML = c;
});

minus_3.addEventListener("click", ()=>{
    if (c > 1) {
        c--;
        c = (c < 10) ? "0" + c : c;
        num_3.innerHTML = c;
    }
});

// button 4

plus_4.addEventListener("click", ()=>{
    d++;
    d = (d < 10) ? "0" + d : d;
    num_4.innerHTML = d;
});

minus_4.addEventListener("click", ()=>{
    if (d > 1) {
        d--;
        d = (d < 10) ? "0" + d : d;
        num_4.innerHTML = d;
    }
});

// button 5

plus_5.addEventListener("click", ()=>{
    e++;
    e = (e < 10) ? "0" + e : e;
    num_5.innerHTML = e;
});

minus_5.addEventListener("click", ()=>{
    if (e > 1) {
        e--;
        e = (e < 10) ? "0" + e : e;
        num_5.innerHTML = e;
    }
});

// button 6

plus_6.addEventListener("click", ()=>{
    f++;
    f = (f < 10) ? "0" + f : f;
    num_6.innerHTML = f;
});

minus_6.addEventListener("click", ()=>{
    if (f > 1) {
        f--;
        f = (f < 10) ? "0" + f : f;
        num_6.innerHTML = f;
    }
});

// button 7

plus_7.addEventListener("click", ()=>{
    g++;
    g = (g < 10) ? "0" + g : g;
    num_7.innerHTML = g;
});

minus_7.addEventListener("click", ()=>{
    if (g > 1) {
        g--;
        g = (g < 10) ? "0" + g : g;
        num_7.innerHTML = g;
    }
});

// button 8

plus_8.addEventListener("click", ()=>{
    h++;
    h = (h < 10) ? "0" + h : h;
    num_8.innerHTML = h;
});

minus_8.addEventListener("click", ()=>{
    if (h > 1) {
        h--;
        h = (h < 10) ? "0" + h : h;
        num_8.innerHTML = h;
    }
});