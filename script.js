const convertButton =
    document.getElementById("convertButton");

const copyButton =
    document.getElementById("copyButton");

const clearButton =
    document.getElementById("clearButton");

const input =
    document.getElementById("input");

const output =
    document.getElementById("output");

const output1 =
    document.getElementById("output1");

const output2 =
    document.getElementById("output2");

convertButton.addEventListener(
    "click",
    convert
)

copyButton.addEventListener(
    "click",
    copyText
);

clearButton.addEventListener(
    "click",
    clearAll
);

input.addEventListener(
    "input",
    autoResize
);

input.addEventListener(
    "input",
    convert
);

function convert(){
    let ans1 = "";
    let ans2 = "";
    let word;

    for(word of input.value){
        if(word === "S" || word === "s"){
            ans1 += " ";
            ans2 += "SPACE　";
        }
        else if(word === "T" || word === "t"){
            ans1 += "\t";
            ans2 += "TAB　";
        }
        else if(word === "L" || word === "l"){
            ans1 += "\n";
            ans2 += "改行　";
        }
        
    }
    output1.value = ans1; 
    output2.value = ans2;
    autoResizeOutput();
}

function copyText(){
    output1.select();
    document.execCommand("copy");
}

function clearAll(){
    input.value = "";
    output1.value = "";
    output2.value = "";
    input.style.height = "auto";
    output1.style.height = "auto";
    output2.style.height = "auto";
}

function autoResize(){
    input.style.height = "auto";
    input.style.height =
        input.scrollHeight + "px";
}

function autoResizeOutput(){

    output.style.height = "auto";

    output.style.height =
        output.scrollHeight + "px";
}
