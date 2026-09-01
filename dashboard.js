function updateDashboard() {
    var p1Count = 0;
    var p2Count = 0;
    var completed = 0;
    var review = 0;

    for (var i = 0; i < patients.length; i++) {
        var p = patients[i];
        if (p.triageLevel === "P1-Emergency") p1Count++;
        else if (p.triageLevel === "P2-Urgent") p2Count++;

        if (p.status === "Completed") completed++;
        else review++;
    }

    document.getElementById("statP1Count").innerHTML = p1Count;
    document.getElementById("statP2Count").innerHTML = p2Count;
    document.getElementById("total").innerHTML = patients.length;
    document.getElementById("completed").innerHTML = completed;
    document.getElementById("review").innerHTML = review;
    document.getElementById("summaries").innerHTML = summaries;

    var recent = document.getElementById("recent");
    if (patients.length === 0) {
        recent.innerHTML = "No patient records yet.";
    } else {
        var html = "";
        for (var i = 0; i < patients.length && i < 5; i++) {
            var pItem = patients[i];
            var pBadgeClass = pItem.triageLevel === "P1-Emergency" ? "badge-p1" : (pItem.triageLevel === "P2-Urgent" ? "badge-p2" : "badge-p3");
            html += 
                "<div class='patient'>" +
                    "<div><b>" + pItem.name + "</b> " +
                    "<span class='triage-badge " + pBadgeClass + "'>" + (pItem.triageLevel || 'P3-Routine') + "</span><br>" +
                    "<small>" + pItem.id + " • Age " + pItem.age + " • " + pItem.symptoms.substring(0, 32) + "...</small></div>" +
                    "<button class='view' onclick='viewPatient(" + i + ")'>View Chart</button>" +
                "</div>";
        }
        recent.innerHTML = html;
    }

    renderTriageQueue();

    var myVisits = patients.filter(function(p) { return p.name.toLowerCase().indexOf("suresh") !== -1 || p.phone === "9876543210"; });
    document.getElementById("patStatVisits").innerHTML = myVisits.length;
    document.getElementById("patStatMeds").innerHTML = myVisits.length > 0 ? "1 Active" : "0";
    document.getElementById("patStatAllergies").innerHTML = myVisits.length > 0 ? "Penicillin" : "None";
    document.getElementById("patStatLastDate").innerHTML = myVisits.length > 0 ? myVisits[0].date : "None";

    var patRecent = document.getElementById("patRecentList");
    if (myVisits.length === 0) {
        patRecent.innerHTML = "No visits on record.";
    } else {
        var pHtml = "";
        for (var j = 0; j < myVisits.length; j++) {
            pHtml += 
                "<div class='patient'>" +
                    "<div><b>Consultation (" + myVisits[j].date + ")</b><br>" +
                    "<small>Dr. Sharma • " + myVisits[j].symptoms.substring(0, 35) + "...</small></div>" +
                    "<button class='view' onclick='viewPatient(" + patients.indexOf(myVisits[j]) + ")'>View Slip & Advice</button>" +
                "</div>";
        }
        patRecent.innerHTML = pHtml;
    }

    renderPatientTimelineView(myVisits);
}

function renderTriageQueue() {
    var triageBox = document.getElementById("triageQueueList");
    if (!triageBox) return;

    if (patients.length === 0) {
        triageBox.innerHTML = "<p style='color:#8995a8; padding:10px;'>No patients currently waiting in triage queue.</p>";
        return;
    }

    var sortedPatients = patients.slice().sort(function(a, b) {
        var rank = { "P1-Emergency": 1, "P2-Urgent": 2, "P3-Routine": 3 };
        return (rank[a.triageLevel] || 3) - (rank[b.triageLevel] || 3);
    });

    var tHtml = "";
    for (var i = 0; i < sortedPatients.length; i++) {
        var pt = sortedPatients[i];
        var cardClass = pt.triageLevel === "P1-Emergency" ? "triage-p1" : (pt.triageLevel === "P2-Urgent" ? "triage-p2" : "triage-p3");
        var badgeClass = pt.triageLevel === "P1-Emergency" ? "badge-p1" : (pt.triageLevel === "P2-Urgent" ? "badge-p2" : "badge-p3");

        tHtml += 
            "<div class='triage-card " + cardClass + "'>" +
                "<div>" +
                    "<div style='display:flex; align-items:center; gap:8px; margin-bottom:4px;'>" +
                        "<h4 style='margin:0; font-size:15px;'>" + pt.name + " (" + pt.age + "y / " + pt.gender + ")</h4>" +
                        "<span class='triage-badge " + badgeClass + "'>" + (pt.triageLevel || 'P3-Routine') + "</span>" +
                    "</div>" +
                    "<p style='margin:0; font-size:12.5px; color:#334155;'><b>Reported Complaint:</b> " + pt.symptoms + "</p>" +
                    "<small style='color:#64748b;'>ABHA/Phone: " + (pt.phone || 'N/A') + " • Arrival: " + pt.date + " • Known Allergies: " + (pt.allergies || 'None') + "</small>" +
                "</div>" +
                "<div>" +
                    "<button class='view' onclick='viewPatient(" + patients.indexOf(pt) + ")' style='padding:8px 14px; font-size:12px;'>Attend Patient ➔</button>" +
                "</div>" +
            "</div>";
    }
    triageBox.innerHTML = tHtml;
}

function renderPatientTimelineView(myVisits) {
    var timelineBox = document.getElementById("patFullTimelineBox");
    if (!timelineBox) return;

    if (myVisits.length === 0) {
        timelineBox.innerHTML = "<p style='color:#8995a8;'>No historical consultation timeline found.</p>";
        return;
    }

    var tHtml = "";
    for (var i = 0; i < myVisits.length; i++) {
        var v = myVisits[i];
        tHtml += 
            "<div class='timeline-item'>" +
                "<h4>📅 Visit Date: " + v.date + " (Case ID: " + v.id + ") — <span class='triage-badge " + (v.triageLevel === 'P1-Emergency' ? 'badge-p1' : 'badge-p2') + "'>" + (v.triageLevel || 'P3-Routine') + "</span></h4>" +
                "<p style='font-size:13px; margin:4px 0;'><b>Reported Symptoms:</b> " + v.symptoms + "</p>" +
                "<p style='font-size:12px; color:#68758a;'>Duration: " + (v.duration || "N/A") + " | Severity: " + v.severity + "</p>" +
                "<p style='font-size:12px; color:#12b99a;'><b>Prescriptions & Meds:</b> " + (v.medications || "None") + "</p>" +
                "<div style='margin-top:8px; background:#f4f7fb; padding:10px; border-radius:8px; font-size:11px;'>" +
                    v.aiSummary +
                "</div>" +
            "</div>";
    }
    timelineBox.innerHTML = tHtml;
}

function displayPatients(prefix) {
    var isPat = (prefix === 'pat');
    var list = document.getElementById(isPat ? "patientListPat" : "patientListDoc");
    var search = document.getElementById(isPat ? "searchPat" : "searchDoc").value.toLowerCase();
    var html = "";

    for (var i = 0; i < patients.length; i++) {
        var p = patients[i];

        if (isPat && p.name.toLowerCase().indexOf("suresh") === -1 && p.phone !== "9876543210") {
            continue;
        }

        if (
            p.name.toLowerCase().indexOf(search) === -1 &&
            p.symptoms.toLowerCase().indexOf(search) === -1 &&
            p.id.toLowerCase().indexOf(search) === -1
        ) {
            continue;
        }

        var badgeClass = p.triageLevel === "P1-Emergency" ? "badge-p1" : (p.triageLevel === "P2-Urgent" ? "badge-p2" : "badge-p3");

        html += 
            "<div class='patient'>" +
                "<div>" +
                    "<b>" + p.name + "</b> " +
                    "<span class='triage-badge " + badgeClass + "'>" + (p.triageLevel || 'P3-Routine') + "</span><br>" +
                    "<small>" + p.id + " • Age " + p.age + " • " + p.gender + " • Date: " + p.date + "</small><br>" +
                    "<small style='color:#1769ff;'>Symptoms: " + p.symptoms + "</small>" +
                "</div>" +
                "<button class='view' onclick='viewPatient(" + i + ")'>" + (isPat ? "View Slip" : "View Chart") + "</button>" +
            "</div>";
    }

    if (html === "") {
        html = "<p style='color:#8995a8; padding:10px;'>No matching records found.</p>";
    }

    list.innerHTML = html;
}

function viewPatient(index) {
    var p = patients[index];
    var modal = document.getElementById("patientModal");
    var modalName = document.getElementById("modalPatientName");
    var content = document.getElementById("modalContent");

    modalName.innerText = "Clinical Case Sheet: " + p.name + " (" + p.id + ")";

    content.innerHTML = 
        "<div style='display:flex; justify-content:space-between; margin-bottom:14px; font-size:12px; color:#68758a;'>" +
            "<span>Age/Gender: <b>" + p.age + "y / " + p.gender + "</b></span>" +
            "<span>Contact/ABHA: <b>" + (p.phone || "N/A") + "</b></span>" +
            "<span>Priority: <b class='triage-badge " + (p.triageLevel === 'P1-Emergency' ? 'badge-p1' : 'badge-p2') + "'>" + (p.triageLevel || 'P3-Routine') + "</b></span>" +
        "</div>" +

        "<div class='timeline-item'>" +
            "<h4>🕒 Chief Complaint & Consultation (" + p.date + ")</h4>" +
            "<p style='font-size:13px; margin-top:4px;'><b>Symptoms:</b> " + p.symptoms + "</p>" +
            "<p style='font-size:12px; color:#68758a;'>Duration: " + (p.duration || "N/A") + " | Severity: " + p.severity + "</p>" +
        "</div>" +

        "<div class='timeline-item' style='border-color:#12b99a;'>" +
            "<h4>📑 Longitudinal History & Medications</h4>" +
            "<p style='font-size:12px; margin-top:4px;'><b>Past History:</b> " + (p.history || "No significant history recorded") + "</p>" +
            "<p style='font-size:12px;'><b>Active Medications:</b> " + (p.medications || "None") + "</p>" +
            "<p style='font-size:12px; color:#b91c1c;'><b>Allergies:</b> " + (p.allergies || "No Known Drug Allergies (NKDA)") + "</p>" +
        "</div>" +

        "<div style='margin-top:16px; background:#f4f7fb; padding:14px; border-radius:10px; font-size:12px;'>" +
            "<h4 style='color:#1769ff; margin-bottom:6px;'>✦ AI Clinical Intake & First-Aid Summary</h4>" +
            "<div>" + p.aiSummary + "</div>" +
        "</div>";

    modal.style.display = "flex";
}

function closeModalDirect() {
    document.getElementById("patientModal").style.display = "none";
}

function closeModal(event) {
    if (event.target.id === "patientModal") {
        document.getElementById("patientModal").style.display = "none";
    }
}
