const turkeyMap = document.getElementById("turkey-map");
const provinces = document.querySelectorAll("#turkey-map path");
const parties2023 = document.getElementById("parties2023");
const userMsg = document.querySelector(".msg");
const saveBtn = document.getElementById("btn-save");
const clearBtn = document.getElementById("btn-clear");

let selectedParty;

parties2023.addEventListener("change", function () {
    selectedParty = this.value;
});

provinces.forEach(function (province) {
    province.addEventListener("click", function () {
        provinces.forEach(function (otherProvinces) {
            otherProvinces.style.fill = "#fff";
        });
        switch (selectedParty) {
            case "ap":
                this.style.fill = "#D1050C";
                break;
            case "akp":
                this.style.fill = "#ff8700";
                break;
            case "anap":
                this.style.fill = "#FBBA00";
                break;
            case "btp":
                this.style.fill = "#FF4747";
                break;
            case "bbp":
                this.style.fill = "#E31E24";
                break;
            case "chp":
                this.style.fill = "#ED1822";
                break;
            case "deva":
                this.style.fill = "#006D9E";
                break;
            case "dp":
                this.style.fill = "#EE151F";
                break;
            case "dsp":
                this.style.fill = "#16c0ed";
                break;
            case "emep":
                this.style.fill = "#FF0000";
                break;
            case "gelecek":
                this.style.fill = "#2db34a";
                break;
            case "gencp":
                this.style.fill = "#FD0000";
                break;
            case "hdp":
                this.style.fill = "#90268F";
                break;
            case "iyip":
                this.style.fill = "#44B2E3";
                break;
            case "hudapar":
                this.style.fill = "#00964C";
                break;
            case "memleket":
                this.style.fill = "#1D5FA4";
                break;
            case "millet":
                this.style.fill = "#113256";
                break;
            case "mhp":
                this.style.fill = "#C8102E";
                break;
            case "myp":
                this.style.fill = "#201A4A";
                break;
            case "sp":
                this.style.fill = "#CF3338";
                break;
            case "sol":
                this.style.fill = "#0069B4";
                break;
            case "tdp":
                this.style.fill = "#D51B26";
                break;
            case "tip":
                this.style.fill = "#B61F23";
                break;
            case "tkh":
                this.style.fill = "#A60402";
                break;
            case "tkp":
                this.style.fill = "#A60402";
                break;
            case "vatan":
                this.style.fill = "#E30513";
                break;
            case "yrefah":
                this.style.fill = "#ED1D24";
                break;
            default:
                this.style.fill = "";
        }
    });
});

function checkXY(text, bbox) {
    return bbox.x <= text.x && bbox.x + bbox.width >= text.x + text.getComputedTextLength() &&
        bbox.y <= text.y && bbox.y + bbox.height >= text.y - text.getBBox().height / 2;
}

provinces.forEach(function (province) {
    const bbox = province.getBBox();
    const name = province.getAttribute("title");
    const x = bbox.x + bbox.width / 2;
    const y = bbox.y + bbox.height / 2;
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("text-anchor", "middle");
    text.textContent = name;
    text.setAttribute("font-size", "5px");
    text.setAttribute("font-family", "Arial, sans-serif");
    turkeyMap.appendChild(text);
});

parties2023.addEventListener("change", function () {
    const selectedOption = parties2023.options[parties2023.selectedIndex];
    const selectedParty = selectedOption.text;
    userMsg.innerHTML = `Oy vereceğiniz parti:&nbsp;<b>${selectedParty}</b>`;
});

clearBtn.addEventListener("click", function () {
    provinces.forEach(function (province) {
        province.style.fill = "#fff";
    });

    parties2023.selectedIndex = 0;
    userMsg.innerHTML = "";
});

document.getElementById("btn-save").onclick = function () {
    const selectBox = document.getElementById("parties2023");
    const saveButton = document.getElementById("btn-save");
    const clearButton = document.getElementById("btn-clear");
    selectBox.style.display = "none";
    saveButton.style.display = "none";
    clearButton.style.display = "none";

    const screenshotTarget = document.querySelector(".container");

    html2canvas(screenshotTarget).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        let anchor = document.createElement("a");
        anchor.setAttribute("href", base64image);
        anchor.setAttribute("download", "benim-secimim.png");
        anchor.click();
        anchor.remove();

        clearButton.style.display = "block";
        selectBox.style.display = "block";
        saveButton.style.display = "block";
    });
};