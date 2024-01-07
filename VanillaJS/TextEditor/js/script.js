"use strict";

const optionsBtn = document.querySelectorAll(".option-button");
const advancedOptionsBtn = document.querySelectorAll(".adv-option-button");
const fontName = document.querySelector("#fontName");
const fontSize = document.querySelector("#fontSize");
const textArea = document.querySelector("#text-input");
const linkBtn = document.querySelector("#createLink");
const alignBtns = document.querySelectorAll(".align");
const spacingBtns = document.querySelectorAll(".spacing");
const formatBtns = document.querySelectorAll(".format");
const scriptBtns = document.querySelectorAll(".script");

const fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];

const highlighter = (className, needToRemove) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {
            if(needToRemove) {
                let alreadyActive = false;

                if(button.classList.contains("active")) {
                    alreadyActive = true;
                }
                removeHighlighter(className);

                if(!alreadyActive) {
                    button.classList.add("active");
                }
            } else {
                // 토글 : 클래스가 이미 존재하면 제거하고, 존재하지 않으면 추가
                button.classList.toggle("active");
            }
        })
    })
}
const removeHighlighter = (className) => {
    className.forEach((button) => {
        button.classList.remove("active");
    })
}

const modifyText = (command, defaultUI, value) => {
    document.execCommand(command, defaultUI, value);
}

optionsBtn.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
})

advancedOptionsBtn.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
    });
})

linkBtn.addEventListener("click", () => {
    let userLink = prompt("Enter a URL?");
    if(/http/i.test(userLink)) {
        modifyText(linkBtn.id, false, userLink);
    } else {
        userLink = `http://${userLink}`;
        modifyText(linkBtn.id, false, userLink);
    }
})

const initializer = () => {
    highlighter(alignBtns, true);
    highlighter(spacingBtns, true);
    highlighter(formatBtns, false);
    highlighter(scriptBtns, true);

    fontList.map((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    for(let i=0; i<7; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSize.appendChild(option);
    }

    fontSize.value = 3;
}

// 웹페이지 리소스가 다 로드되면 실행
window.onload = initializer();