let modelName = "XYZ";
let duration = 0;

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    console.log("function is being called");
    console.log("value of modelName is " + modelName);

    if (modelName === "XYZ") {
        costLabel.textContent = duration * 100;
        console.log("xyz if true");
    }

    if (modelName === "CPRG") {
        costLabel.textContent = duration * 213;
        console.log("CPRG if true");
    }

}

let modelButton = document.getElementById("model-button");

function changeModel() {
    console.log("function changeModel is execting");
    let modelSpan = document.getElementById("model-text");
    if (modelName === "XYZ") {
        modelName = "CPRG";
        console.log("switching from XYZ to CPRG");
        modelSpan.textContent = "Model CPRG";
    }
    else {
        modelName = "XYZ";
        console.log("switching from CPRG to XYZ");
        modelSpan.textContent = "Model XYZ";
    }
    recalculate();
}

modelButton.addEventListener("click", changeModel);

let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationSpan = document.getElementById("duration-text");
    duration = prompt("Please enter the duration(days):", "0");
    if (duration == null || duration < 0) {
        duration = 0;
    }
    durationSpan.textContent = duration;
    recalculate();
}

durationButton.addEventListener("click", changeDuration);