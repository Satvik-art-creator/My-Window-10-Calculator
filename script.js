const select = (selector) => document.querySelector(selector);

const ans = select("#display_ans");

const showAns = select("#showAns");
const clearAns = select("#clearAns");
const remove = select("#removeEachLetter");

var sq = select("#square");
const rt = select("#root");

let clickTime = 0;

let leng = ans.value.length - 1;


showAns.addEventListener("click", () => {  
    if(ans.value == ""){
        ans.value = "";
    } else{
        if(clickTime === 1){
            ans.value = Math.sqrt(ans.value.slice(1,ans.value.length));
            clickTime = 0;
        } else if(clickTime === 2 ) {
            ans.value = ans.value.slice(0,leng) ** 2;
            clickTime = 0;
        } else{
            ans.value = eval(ans.value);
        }

        clickTime = 0;
    }
});

clearAns.addEventListener("click", () => {
    ans.value = "";
});

remove.addEventListener("click", () => {
    ans.value = ans.value.slice(0,leng);
});

rt.addEventListener("click", () => {
    ans.value = `√${ans.value}`;
    clickTime+=1;
});

sq.addEventListener("click", () => {
    ans.value = sq.value.replace("x", ans.value);
    clickTime+=2;
});
