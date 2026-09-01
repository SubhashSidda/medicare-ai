function toggleChatWindow() {
    var chatWindow = document.getElementById("floatingChatWindow");
    chatWindow.classList.toggle("chat-window-hidden");
}

function handleChatKey(event) {
    if (event.key === "Enter") {
        sendChatMessage();
    }
}

function sendQuickPrompt(text) {
    document.getElementById("chatInputText").value = text;
    sendChatMessage();
}

function sendChatMessage() {
    var inputEl = document.getElementById("chatInputText");
    var query = inputEl.value.trim();
    if (!query) return;

    var messagesBox = document.getElementById("chatMessages");

    var userMsgDiv = document.createElement("div");
    userMsgDiv.className = "chat-msg user-msg";
    userMsgDiv.innerHTML = "<div class='msg-content'>" + query + "</div>";
    messagesBox.appendChild(userMsgDiv);

    inputEl.value = "";
    messagesBox.scrollTop = messagesBox.scrollHeight;

    setTimeout(function() {
        var botResponse = generateBotResponse(query.toLowerCase());
        var botMsgDiv = document.createElement("div");
        botMsgDiv.className = "chat-msg bot-msg";
        botMsgDiv.innerHTML = "<div class='msg-content'>" + botResponse + "</div>";
        messagesBox.appendChild(botMsgDiv);
        messagesBox.scrollTop = messagesBox.scrollHeight;
    }, 600);
}

function generateBotResponse(query) {
    if (query.indexOf("chest") !== -1 || query.indexOf("నొప్పి") !== -1 || query.indexOf("दर्द") !== -1 || query.indexOf("வலி") !== -1) {
        return "🚨 <b>Urgent Advisory:</b> For chest pain or tightness, sit down immediately, loosen tight clothes, and avoid walking. Seek emergency care (Dial 108) immediately.";
    } else if (query.indexOf("fever") !== -1 || query.indexOf("జ్వరం") !== -1 || query.indexOf("बुखार") !== -1 || query.indexOf("பனி") !== -1) {
        return "🌡️ <b>Fever Care:</b> Drink plenty of water and ORS. Apply a cool wet cloth to forehead. Consult doctor if temperature exceeds 102°F.";
    } else if (query.indexOf("ocr") !== -1 || query.indexOf("report") !== -1 || query.indexOf("upload") !== -1) {
        return "📷 <b>OCR Scanner:</b> Click the report upload box in the intake form to automatically extract text from previous doctor slips or lab PDFs.";
    } else if (query.indexOf("triage") !== -1 || query.indexOf("priority") !== -1) {
        return "⚡ <b>Smart Triage:</b> Patients with severe cardiac/respiratory symptoms are tagged P1 Emergency and placed on top of doctor queue.";
    } else {
        return "💡 <b>MediCare AI Advisor:</b> I can help check symptoms, advise on preliminary first-aid, or guide you through case documentation. Feel free to describe your symptoms!";
    }
}

function toggleChatVoice() {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert("Speech recognition is not supported in this browser.");
        return;
    }
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var chatRec = new SpeechRecognition();
    chatRec.lang = document.getElementById("langSelect").value === 'te' ? 'te-IN' : 'en-US';
    chatRec.start();

    chatRec.onresult = function(event) {
        document.getElementById("chatInputText").value = event.results[0][0].transcript;
        sendChatMessage();
    };
}
