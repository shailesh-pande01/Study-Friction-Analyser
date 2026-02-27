const form = document.querySelector(".study-form");
const logsList = document.getElementById("logs-list");

const completionRateEl = document.getElementById("completionRate");
const topFrictionEl = document.getElementById("topFriction");
const worstTimeEl = document.getElementById("worstTime");
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
    });
}

function analyseData(){
    let completedCount = 0;
    let frictionCount = {};
    let timeCount = {Morning:0,Evening:0,Night:0};

    sessions.forEach(function(session){
        if(session.sessionStatus === "completed"){
            completedCount++;
        }

        session.frictions.forEach(function(friction){
            if(!frictionCount[friction]){
                frictionCount[friction] = 1;
            }else{
                frictionCount[friction]++;
            }
        });


        if(session.sessionStatus === "not-done"){
            timeCount[session.sessionTime]++;
        }
    });

    let completionRate = Math.round((completedCount/sessions.length)*100);
    completionRateEl.textContent = completionRate + "%";

    let topFriction = "-";
    let maxFriction = 0;

    for(let key in frictionCount){
        if(frictionCount[key] > maxFriction){
            maxFriction = frictionCount[key];
            topFriction = key;
        }
    }
    topFrictionEl.textContent = topFriction;

    let worstTime = "-";
    let maxTime = 0;

    for(let key in timeCount){
        if(timeCount[key] > maxTime){
            maxTime = timeCount[key];
            worstTime = key;
        }
    }
    worstTimeEl.textContent = worstTime;

    generateSmarInsigts(completionRate,topFriction,worstTime);
}

function generateSmarInsigts(rate,friction,worst){
    let message = "";
    if(rate < 50){
        message = "Your completion rate is low. Reduce study time and focus on consistency.";
    }else if(rate>=50 && rate<80){
        message  = "Good progress. Try improving weak times.";
    }else{
        message = "Excellent discipline! Keep going.";
    }

    if(friction !== "-"){
        message += ` Biggest obstacle: ${friction}.`
    }

    if(worst !== "-"){
        message += `Most sessions fail during ${worst}. Adjust that time.`
    }

    smartInsights.textContent = message;
}