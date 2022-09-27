const thinkTextSpan = document.querySelector(".thinktext");
const thinkcursorSpan = document.querySelector(".thinkcursor");


const thinktextArray = ["Hello Everyone!", "Stay Healthy❤️"];
const thinktypingDelay = 200;
const thinkerasingDelay = 100;
const thinknewTextDelay = 2000;
let thinktextArrayIndex1 = 0;
let charIndex1 = 0;

function type1(){
    if(charIndex1 < thinktextArray[thinktextArrayIndex1].length){
        if(!thinkcursorSpan.classList.contains("typing1")) thinkcursorSpan.classList.add("typing1");
        thinkTextSpan.textContent += thinktextArray[thinktextArrayIndex1].charAt(charIndex1);
        charIndex1++;
        setTimeout(type1, thinktypingDelay);

    }
    else{
        thinkcursorSpan.classList.remove("typing1");
        setTimeout(erase1, thinknewTextDelay);
    }
}

function erase1(){
    if(charIndex1 > 0) {
        if(!thinkcursorSpan.classList.contains("typing1")) thinkcursorSpan.classList.add("typing1");
        thinkTextSpan.textContent = thinktextArray[thinktextArrayIndex1].substring(0,charIndex1-1);
        charIndex1--;
        setTimeout(erase1, thinkerasingDelay);
    }
    else{
        thinkcursorSpan.classList.remove("typing1");
        thinktextArrayIndex1++;
        if(thinktextArrayIndex1>=thinktextArray.length) thinktextArrayIndex1=0;
        setTimeout(type1, thinktypingDelay + 1100);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    if(thinktextArray.length) setTimeout(type1, thinknewTextDelay + 250);
});