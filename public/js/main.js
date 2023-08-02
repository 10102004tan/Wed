const bannerTextMain = document.querySelector(".banner__text--main");
const reviewsItem = document.querySelectorAll(".reviews__item");
const reviewsCircle = document.querySelectorAll(".reviews-select__circle");

const arrayText = ["UX/UI designer","Font-end developer","Photograpphy lover"]

let i = 0;

let runText = setTimeout (function time1(){

    bannerTextMain.textContent = arrayText[i];

    i++;
    if (i > 2)
    {
        i = 0 ;
    }

    runText = setTimeout(time1, 500);

},500)


let j = 2;
let runItem = setTimeout(function time2(){

    if (j == 1)
    {
        // reviewsItem[0].style.display = "block";
        // reviewsItem[0].style.animation = "animation5 4s alternate 1 cubic-bezier(0.42, 0, 0.58, 1) forwards";
        // reviewsItem[1].style.display = "none"
        j++;

        setItem(0,1);


    }
    else{
        // reviewsItem[1].style.display = "block";
        // reviewsItem[1].style.animation = "animation5 4s alternate 1 cubic-bezier(0.42, 0, 0.58, 1) forwards";
        // reviewsItem[0].style.display = "none"
        setItem(1,0);
        j = 1;

    }

    runItem = setTimeout(time2, 4000)
    
},4000)


function setItem(i,j){
    reviewsItem[i].style.display = "block";
    reviewsItem[i].style.animation = "animation5 4s alternate 1 cubic-bezier(0.42, 0, 0.58, 1) forwards";
    reviewsItem[j].style.display = "none"
    reviewsCircle[i].style.width = "2rem";
    reviewsCircle[j].style.width = "1rem";
    reviewsCircle[i].style.backgroundColor = "#df291c";
    reviewsCircle[j].style.backgroundColor = "#fff";
    reviewsCircle[i].style.transition =  "all 0.5s ease";


}