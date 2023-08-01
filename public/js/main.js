const bannerTextMain = document.querySelector(".banner__text--main");

const arrayText = ["UX/UI designer","Font-end developer","Photograpphy lover"]

let i = 0;

let runText = setTimeout (function time(){

    bannerTextMain.textContent = arrayText[i];

    i++;
    if (i > 2)
    {
        i = 0 ;
    }

    runText = setTimeout(time, 1500);

},1500)