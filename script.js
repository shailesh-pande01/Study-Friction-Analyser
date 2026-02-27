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
    // analyseData();

    form.reset();
});

function displayLogs(){
    logsList.innerHTML = "";

    if(sessions.length === 0){
        logsList.innerHTML = "<li>No logs yet</li>";
    }

    sessions.forEach(function(session){
        let li = document.createElement("li");

        li.style.borderBottom = "1px solid #eee";
        li.style.padding = "15px"

        li.innerHTML = `
        <strong>${session.subject}</strong> | ${session.time} mins <br>
        ${session.sessionTime} | ${session.sessionStatus} <br>
        Frictions: ${session.frictions.length > 0 ? session.frictions.join(", ") : "None"}
        `
        logsList.appendChild(li);
    })
}