var isRecording = false;
var recognition = null;
var activeFieldId = null;
var activeBtnId = null;
var activeStatusId = null;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        if (activeFieldId) {
            var input = document.getElementById(activeFieldId);
            input.value += (input.value ? " " : "") + transcript;
        }
        stopVoice();
    };

    recognition.onerror = function() {
        stopVoice();
    };
}

function toggleVoice(fieldId, btnId, statusId) {
    if (!recognition) {
        alert("Speech recognition is not supported in this browser. Please use Google Chrome or Edge.");
        return;
    }

    var langMap = {
        en: 'en-US',
        te: 'te-IN',
        hi: 'hi-IN',
        ta: 'ta-IN',
        kn: 'kn-IN',
        ml: 'ml-IN'
    };

    var currentLang = document.getElementById("langSelect").value;
    activeFieldId = fieldId;
    activeBtnId = btnId;
    activeStatusId = statusId;

    if (!isRecording) {
        recognition.lang = langMap[currentLang] || 'en-US';
        recognition.start();
        isRecording = true;
        document.getElementById(btnId).classList.add("recording");
        document.getElementById(statusId).innerText = "Listening...";
    } else {
        recognition.stop();
        stopVoice();
    }
}

function stopVoice() {
    isRecording = false;
    if (activeBtnId) {
        document.getElementById(activeBtnId).classList.remove("recording");
        document.getElementById(activeStatusId).innerText = "Voice Dictate";
    }
}
