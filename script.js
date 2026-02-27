const form = document.querySelector(".study-form");
const logsList = document.getElementById("logs-list");

const completionRateEl = document.getElementById("completionRate");
const topFriction = document.getElementById("topFriction");
const worstTime = document.getElementById("worstTime");
const smartInsights = document.getElementById("smartInsights");

let sessions = [];

form.addEventListener("submit",function (e){
    e.preventDefault();

    const subject = document.getElementById("subject").value;
    const time = document.getElementById("time").value;
    const sessionTime = document.getElementById("session").value;
    const sessionStatus = document.querySelector("input[name='status']:checked").value;
    const frictionBoxes = document.querySelectorAll("input[name='friction']:checked");

    let frictions= [];
    frictionBoxes.forEach(function (box){
        frictions.push(box.value);
    });

    const newSession = {
        subject: subject,
        time: time,
        sessionTime: sessionTime,
        sessionStatus: sessionStatus,
        frictions: frictions
    };

    sessions.push(newSession);

    displayLogs();
    analyseData();

    form.reset();
});