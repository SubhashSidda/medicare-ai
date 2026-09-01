var firstAidProtocols = {
    en: {
        cardiac: {
            title: "🚑 Preliminary Emergency Actions: Suspected Cardiac / Chest Pain",
            dos: "• Sit down immediately in a resting position; loosen tight clothing around neck/chest.<br>• Take slow, deep breaths.<br>• Do NOT exert physical effort or walk up stairs.<br>• Seek immediate emergency medical attention / Dial 108.",
            donts: "• Do not consume heavy meals or caffeine.<br>• Do not drive yourself to the hospital."
        },
        fever: {
            title: "🌡️ Preliminary Home Care: High Fever & Body Pains",
            dos: "• Keep well hydrated with water, ORS, coconut water, or clear broths.<br>• Apply a damp, room-temperature cloth sponge to forehead and neck.<br>• Rest in a well-ventilated room wearing light cotton clothing.",
            donts: "• Do not take cold/ice water baths.<br>• Avoid self-medicating heavy antibiotic dosages without doctor prescription."
        },
        respiratory: {
            title: "🫁 Preliminary Care: Breathlessness & Severe Cough",
            dos: "• Sit upright (do not lie flat on your back).<br>• Inhale warm steam if nasal congestion is present.<br>• If prescribed a rescue inhaler (e.g. Salbutamol), take prescribed puffs.",
            donts: "• Avoid exposure to dust, incense, smoke, or cold air.<br>• If lips or fingernails turn pale/bluish, proceed to emergency immediately."
        },
        digestive: {
            title: "💧 Preliminary Care: Acute Vomiting / Stomach Upset / Dehydration",
            dos: "• Sip small amounts of Oral Rehydration Solution (ORS) every 10-15 minutes.<br>• Stick to bland fluids (coconut water, rice gruel).",
            donts: "• Do not consume spicy, oily, dairy, or fried foods.<br>• Avoid taking anti-diarrheal pills without physician evaluation."
        },
        general: {
            title: "📋 General Health Advisory Before Doctor Consultation",
            dos: "• Keep your previous medical records, past prescriptions, and lab reports ready.<br>• Note down the exact time your symptoms started and any medicines taken.",
            donts: "• Avoid taking unprescribed painkillers on an empty stomach."
        }
    },
    te: {
        cardiac: {
            title: "🚑 ప్రాథమిక జాగ్రత్తలు: గుండె / ఛాతీ నొప్పి సంకేతాలు",
            dos: "• వెంటనే విశ్రాంతిగా కూర్చోండి; మెడ/ఛాతీ వద్ద ఉన్న బిగుతైన దుస్తులను వదులు చేయండి.<br>• నిదానంగా లోతైన శ్వాస తీసుకోండి. నడవటం లేదా మెట్లు ఎక్కడం అస్సలు చేయవద్దు.<br>• తక్షణమే 108 లేదా సమీప ఆసుపత్రి ఎమర్జెన్సీ విభాగాన్ని సంప్రదించండి.",
            donts: "• స్వయంగా డ్రైవింగ్ చేసుకుంటూ ఆసుపత్రికి వెళ్లవద్దు.<br>• టీ, కాఫీ లేదా భారీ ఆహారం తీసుకోవద్దు."
        },
        fever: {
            title: "🌡️ ప్రాథమిక జాగ్రత్తలు: తీవ్ర జ్వరం & ఒళ్ళు నొప్పులు",
            dos: "• పుష్కలంగా నీరు, ఓఆర్‌ఎస్ (ORS), కొబ్బరి నీళ్లు త్రాగి డీహైడ్రేషన్ నివారించండి.<br>• సాధారణ నీటితో తడిపిన గుడ్డతో నుదురు, మెడపై మెల్లగా తుడవండి.<br>• గాలి వెలుతురు ఉండే గదిలో తేలికపాటి దుస్తులతో విశ్రాంతి తీసుకోండి.",
            donts: "• ఐస్ నీళ్లతో స్నానం చేయవద్దు.<br>• డాక్టర్ సలహా లేకుండా ఇష్టానుసారంగా యాంటీబయాటిక్స్ వాడవద్దు."
        },
        respiratory: {
            title: "🫁 ప్రాథమిక జాగ్రత్తలు: శ్వాస తీసుకోవడంలో ఇబ్బంది & దగ్గు",
            dos: "• వెల్లకిలా పడుకోకుండా నిటారుగా కూర్చోండి.<br>• ముక్కు దిబ్బడగా ఉంటే గోరువెచ్చని ఆవిరి పట్టండి.<br>• ఇంతకు ముందు ఇన్హేలర్ వాడుతున్నట్లయితే డాక్టర్ సూచించిన మోతాదు తీసుకోండి.",
            donts: "• దుమ్ము, పొగ, చల్లని గాలికి దూరంగా ఉండండి.<br>• పెదవులు నీలంగా మారుతుంటే వెంటనే ఎమర్జెన్సీకి వెళ్లండి."
        },
        digestive: {
            title: "💧 ప్రాథమిక జాగ్రత్తలు: వాంతులు, విరేచనాలు & కడుపులో అసౌకర్యం",
            dos: "• ప్రతి 10-15 నిమిషాలకు కొద్దికొద్దిగా ఓఆర్‌ఎస్ (ORS) ద్రావణం లేదా మజ్జిగ త్రాగండి.<br>• గంజి, కొబ్బరి నీళ్లు వంటి తేలికపాటి ద్రవాహారం తీసుకోండి.",
            donts: "• కారం, నూనె, పాల పదార్థాలు మరియు వేపుళ్ళు తినవద్దు."
        },
        general: {
            title: "📋 డాక్టర్‌ను సంప్రదించే ముందు పాటించవలసిన జాగ్రత్తలు",
            dos: "• మీ పాత ప్రిస్క్రిప్షన్లు, ల్యాబ్ రిపోర్టులను సిద్ధంగా ఉంచుకోండి.<br>• సమస్య ఎప్పుడు మొదలైంది, మధ్యలో ఏ మందులు వాడారో డాక్టర్‌కు స్పష్టంగా చెప్పండి.",
            donts: "• ఖాళీ కడుపుతో పెయిన్ కిల్లర్ మాత్రలు వేసుకోవద్దు."
        }
    },
    hi: {
        cardiac: {
            title: "🚑 प्राथमिक आपातकालीन सावधानियां: सीने में दर्द / बेचैनी",
            dos: "• तुरंत आराम से बैठ जाएं; गर्दन और सीने के कपड़े ढीले करें।<br>• गहरी सांसें लें, शारीरिक श्रम या सीढ़ियां चढ़ना बिल्कुल बंद करें।<br>• तुरंत आपातकालीन चिकित्सा सहायता (108) से संपर्क करें।",
            donts: "• खुद गाड़ी चलाकर अस्पताल न जाएं।<br>• भारी भोजन या कैफीन का सेवन न करें।"
        },
        fever: {
            title: "🌡️ प्राथमिक देखभाल: तेज बुखार और बदन दर्द",
            dos: "• ओआरएस (ORS), नारियल पानी और तरल पदार्थों का भरपूर सेवन करें।<br>• माथे पर सामान्य पानी की ठंडी पट्टी रखें।<br>• हवादार कमरे में हल्के सूती कपड़े पहनकर आराम करें।",
            donts: "• बर्फ के ठंडे पानी से न नहाएं।<br>• बिना डॉक्टर की सलाह के एंटीबायोटिक दवाएं न लें।"
        },
        respiratory: {
            title: "🫁 प्राथमिक देखभाल: सांस लेने में तकलीफ और खांसी",
            dos: "• सीधे बैठें (पीठ के बल सपाट न सोएं)।<br>• गर्म पानी की भाप लें। यदि इनहेलर निर्धारित है, तो उसका उपयोग करें।",
            donts: "• धूल, धुएं और ठंडी हवा से बचें।<br>• होंठ नीले पड़ने पर तुरंत इमरजेंसी में जाएं।"
        },
        digestive: {
            title: "💧 प्राथमिक देखभाल: उल्टी, दस्त और पेट दर्द",
            dos: "• हर 15 मिनट में थोड़ा-थोड़ा ओआरएस (ORS) या छाछ पिएं।<br>• हल्का और सुपाच्य भोजन लें।",
            donts: "• तैलीय, मसालेदार और तले हुए भोजन से बचें।"
        },
        general: {
            title: "📋 डॉक्टर से परामर्श से पहले महत्वपूर्ण सावधानियां",
            dos: "• अपने पुराने पर्चे और मेडिकल रिपोर्ट साथ रखें।<br>• लक्षणों की शुरुआत का सही समय याद रखें।",
            donts: "• खाली पेट दर्द निवारक दवाएं न लें।"
        }
    },
    ta: {
        cardiac: {
            title: "🚑 முதலுதவி வழிகாட்டுதல்: நெஞ்சு வலி / இதய அறிகுறிகள்",
            dos: "• உடனடியாக அமர்ந்து ஓய்வெடுங்கள்; இறுக்கமான ஆடைகளைத் தளர்த்தவும்.<br>• ஆழமாக சுவாசிக்கவும். படிக்கட்டுகளில் ஏறவோ நடக்கவோ வேண்டாம்.<br>• உடனடியாக அவசர சிகிச்சைப் பிரிவை (108) அணுகவும்.",
            donts: "• நீங்களே வாகனம் ஓட்டிச் செல்ல வேண்டாம்."
        },
        fever: {
            title: "🌡️ முதலுதவி வழிகாட்டுதல்: அதிக காய்ச்சல் & உடல் வலி",
            dos: "• ORS, இளநீர் மற்றும் திரவங்களை அதிகமாக உட்கொள்ளுங்கள்.<br>• ஈரமான துணியால் நெற்றியில் ஒத்தடம் கொடுக்கவும்.",
            donts: "• மருத்துவர் ஆலோசனையின்றி மருந்துகளை சுயமாக எடுக்க வேண்டாம்."
        },
        respiratory: {
            title: "🫁 முதலுதவி வழிகாட்டுதல்: மூச்சுத் திணறல் & இருமல்",
            dos: "• நேராக நிமிர்ந்து உட்காரவும். வெதுவெதுப்பான நீராவி பிடிக்கவும்.",
            donts: "• தூசி, புகை ஆகியவற்றிலிருந்து விலகி இருக்கவும்."
        },
        digestive: {
            title: "💧 முதலுதவி: வாந்தி & வயிற்றுப்போக்கு",
            dos: "• சிறிது சிறிதாக ORS திரவத்தை அருந்தவும்.",
            donts: "• காரமான மற்றும் எண்ணெயில் பொரித்த உணவுகளைத் தவிர்க்கவும்."
        },
        general: {
            title: "📋 மருத்துவரை சந்திக்கும் முன் முன்னெச்சரிக்கைகள்",
            dos: "• பழைய மருத்துவ அறிக்கைகளை தயாராக வைத்திருக்கவும்.",
            donts: "• வெறும் வயிற்றில் வலி நிவாரணிகளை உட்கொள்ள வேண்டாம்."
        }
    },
    kn: {
        cardiac: {
            title: "🚑 ಪ್ರಾಥಮಿಕ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು: ಎದೆ ನೋವು / ಹೃದಯ ತೊಂದರೆ",
            dos: "• ತಕ್ಷಣ ಕುಳಿತುಕೊಂಡು ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ; ಬಟ್ಟೆಗಳನ್ನು ಸಡಿಲಗೊಳಿಸಿ.<br>• ಯಾವುದೇ ದೈಹಿಕ ಶ್ರಮ ಮಾಡಬೇಡಿ. ತಕ್ಷಣ ತುರ್ತು ಆಸ್ಪತ್ರೆಗೆ (108) ಸಂಪರ್ಕಿಸಿ.",
            donts: "• ಸ್ವತಃ ವಾಹನ ಚಲಾಯಿಸಬೇಡಿ."
        },
        fever: {
            title: "🌡️ ಪ್ರಾಥಮಿಕ ಆರೈಕೆ: ತೀವ್ರ ಜ್ವರ ಮತ್ತು ಮೈಕೈ ನೋವು",
            dos: "• ORS, ಎಳನೀರು ಮತ್ತು ದ್ರವಾಹಾರವನ್ನು ಹೆಚ್ಚಾಗಿ ಸೇವಿಸಿ.<br>• ಹಣೆಯ ಮೇಲೆ ನೀರಿನ ಪಟ್ಟಿ ಇಡಿ.",
            donts: "• ವೈದ್ಯರ ಸಲಹೆಯಿಲ್ಲದೆ ಔಷಧಿ ಸೇವಿಸಬೇಡಿ."
        },
        respiratory: {
            title: "🫁 ಪ್ರಾಥಮಿಕ ಆರೈಕೆ: ಉಸಿರಾಟದ ತೊಂದರೆ ಮತ್ತು ಕೆಮ್ಮು",
            dos: "• ನೆಟ್ಟಗೆ ಕುಳಿತುಕೊಳ್ಳಿ. ಬೆಚ್ಚಗಿನ ಹಬೆ ತೆಗೆದುಕೊಳ್ಳಿ.",
            donts: "• ಧೂಳು ಮತ್ತು ಶೀತ ಗಾಳಿಯಿಂದ ದೂರವಿರಿ."
        },
        digestive: {
            title: "💧 ಪ್ರಾಥಮಿಕ ಆರೈಕೆ: ವಾಂತಿ ಮತ್ತು ಅತಿಸಾರ",
            dos: "• ಆಗಾಗ ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ORS ನೀರನ್ನು ಕುಡಿಯಿರಿ.",
            donts: "• ಎಣ್ಣೆಯುಕ್ತ ಮತ್ತು ಮಸಾಲೆಯುಕ್ತ ಆಹಾರ ತಪ್ಪಿಸಿ."
        },
        general: {
            title: "📋 ವೈದ್ಯರನ್ನು ಭೇಟಿಯಾಗುವ ಮುನ್ನ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು",
            dos: "• ಹಳೆಯ ವೈದ್ಯಕೀಯ ದಾಖಲೆಗಳನ್ನು ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ.",
            donts: "• ಖಾಲಿ ಹೊಟ್ಟೆಯಲ್ಲಿ ನೋವು ನಿವಾರಕ ಮಾತ್ರೆ ತೆಗೆದುಕೊಳ್ಳಬೇಡಿ."
        }
    },
    ml: {
        cardiac: {
            title: "🚑 അടിയന്തര മുൻകരുതലുകൾ: നെഞ്ചുവേദന",
            dos: "• ഉടൻ വിശ്രമിക്കുക; ഇറുകിയ വസ്ത്രങ്ങൾ അയക്കുക.<br>• ആയാസകരമായ ജോലികൾ ഒഴിവാക്കുക. ഉടൻ ആശുപത്രിയിലെത്തുക (108).",
            donts: "• സ്വയം വാഹനം ഓടിക്കരുത്."
        },
        fever: {
            title: "🌡️ പ്രാഥമിക പരിചരണം: കഠിനമായ പനി",
            dos: "• ധാരാളം വെള്ളവും ORS ലായനിയും കുടിക്കുക.<br>• നനഞ്ഞ തുണി കൊണ്ട് ശരീരം തുടയ്ക്കുക.",
            donts: "• ഡോക്ടറുടെ നിർദ്ദേശമില്ലാതെ ആന്റിബയോട്ടിക്കുകൾ കഴിക്കരുത്."
        },
        respiratory: {
            title: "🫁 പ്രാഥമിക പരിചരണം: ശ്വാസതടസ്സവും ചുമയും",
            dos: "• നിവർന്നു ഇരിക്കുക. ചൂടുവെള്ളത്തിൽ ആവി പിടിക്കുക.",
            donts: "• പൊടിയും പുകയും ഒഴിവാക്കുക."
        },
        digestive: {
            title: "💧 പ്രാഥമിക പരിചരണം: ഛർദ്ദിയും വയറിളക്കവും",
            dos: "• കൃത്യമായ ഇടവേളകളിൽ ORS കുടിക്കുക.",
            donts: "• എണ്ണയും എരിവും ഉള്ള ഭക്ഷണങ്ങൾ ഒഴിവാക്കുക."
        },
        general: {
            title: "📋 ഡോക്ടറെ കാണുന്നതിന് മുൻപുള്ള നിർദ്ദേശങ്ങൾ",
            dos: "• മുൻകാല കുറിപ്പടികൾ കയ്യിൽ കരുതുക.",
            donts: "• ഒഴിഞ്ഞ വയറ്റിൽ പെയിൻ കില്ലറുകൾ കഴിക്കരുത്."
        }
    }
};

function generateAI(prefix) {
    var isPat = (prefix === 'pat');
    
    var name = document.getElementById(isPat ? "patName" : "name").value;
    var age = document.getElementById(isPat ? "patAge" : "age").value;
    var gender = document.getElementById(isPat ? "patGender" : "gender").value;
    var symptoms = document.getElementById(isPat ? "patSymptoms" : "symptoms").value;
    var duration = document.getElementById(isPat ? "patDuration" : "duration").value;
    var severity = document.getElementById(isPat ? "patSeverity" : "severity").value;
    var history = document.getElementById(isPat ? "patHistory" : "history").value;
    var medications = document.getElementById(isPat ? "patMeds" : "medications").value;
    var allergies = document.getElementById(isPat ? "patAllergies" : "allergies").value;

    if (name === "" || age === "" || symptoms === "") {
        alert("Please enter Name, Age and Symptoms first.");
        return;
    }

    var symptomLower = symptoms.toLowerCase();
    
    // 1. Triage Urgency Calculation (P1, P2, P3)
    var emergencyKeywords = [
        "chest pain", "angina", "breathless", "shortness of breath", "dyspnea", 
        "slurred speech", "facial droop", "stroke", "hemiplegia", "syncope", 
        "unconscious", "stridor", "cyanosis", "severe bleeding", "గుండె నొప్పి", "ఛాతీ నొప్పి", "छाती में दर्द", "ശ്വാസംമുട്ടൽ"
    ];
    var urgentKeywords = ["fever", "vomiting", "dizziness", "severe pain", "జ్వరం", "వాంతులు", "बुखार", "കടുത്ത പനി"];

    var isP1Emergency = emergencyKeywords.some(function(k) { return symptomLower.indexOf(k) !== -1; }) || severity === "Severe";
    var isP2Urgent = !isP1Emergency && (urgentKeywords.some(function(k) { return symptomLower.indexOf(k) !== -1; }) || severity === "Moderate");
    
    var triageLevel = isP1Emergency ? "P1-Emergency" : (isP2Urgent ? "P2-Urgent" : "P3-Routine");

    // 2. Select Relevant First-Aid Guidance
    var langProtocols = firstAidProtocols[currentLang] || firstAidProtocols.en;
    var selectedProtocol = langProtocols.general;

    if (isP1Emergency) {
        if (symptomLower.indexOf("breath") !== -1 || symptomLower.indexOf("cough") !== -1 || symptomLower.indexOf("ശ്വാസം") !== -1) {
            selectedProtocol = langProtocols.respiratory;
        } else {
            selectedProtocol = langProtocols.cardiac;
        }
    } else if (symptomLower.indexOf("fever") !== -1 || symptomLower.indexOf("జ్వరం") !== -1 || symptomLower.indexOf("बुखार") !== -1 || symptomLower.indexOf("பனி") !== -1) {
        selectedProtocol = langProtocols.fever;
    } else if (symptomLower.indexOf("vomit") !== -1 || symptomLower.indexOf("stomach") !== -1 || symptomLower.indexOf("వాంతులు") !== -1 || symptomLower.indexOf("വയറിളക്കം") !== -1) {
        selectedProtocol = langProtocols.digestive;
    }

    // 3. Drug-Allergy & Interaction Check
    var allergyLower = allergies.toLowerCase();
    var medsLower = medications.toLowerCase();
    var isPenicillinAllergy = allergyLower.indexOf("penicillin") !== -1 || allergyLower.indexOf("amoxicillin") !== -1;
    var isContraindicatedMed = (isPenicillinAllergy && (medsLower.indexOf("amox") !== -1 || medsLower.indexOf("augmentin") !== -1 || medsLower.indexOf("penicillin") !== -1));

    // 4. Build Output HTML
    var alertHTML = "";
    if (isP1Emergency) {
        alertHTML += "<div class='alert-badge alert-critical'>🚨 <strong>P1 EMERGENCY PRIORITY DETECTED:</strong> Immediate clinician evaluation & stabilization needed!</div>";
    } else if (isP2Urgent) {
        alertHTML += "<div class='alert-badge alert-warning'>⚠️ <strong>P2 URGENT QUEUE:</strong> Moderate to high clinical attention needed soon.</div>";
    }

    if (isContraindicatedMed) {
        alertHTML += "<div class='alert-badge alert-critical'>⛔ <strong>FATAL CONTRAINDICATION:</strong> Active medication directly conflicts with recorded Penicillin allergy!</div>";
    }

    // 5. First-Aid Advisory Section (Patient Focused)
    var firstAidHTML = 
        "<div class='first-aid-box'>" +
            "<h4><i class='fa-solid fa-shield-heart'></i> " + selectedProtocol.title + "</h4>" +
            "<b>✓ Recommended Actions (Do's):</b><br>" + selectedProtocol.dos + "<br><br>" +
            "<b>✕ Critical Warnings (Don'ts):</b><br>" + selectedProtocol.donts +
        "</div>";

    // 6. Clinical Summary (Doctor Focused)
    var structuredSummary = 
        alertHTML +
        (isPat ? firstAidHTML : "") +
        "<div style='border-bottom:1px solid #e2e8f0; padding-bottom:8px; margin:10px 0 8px;'>" +
            "<span style='color:#1769ff; font-weight:bold; font-size:13px;'>✦ Standardized Clinical Intake Summary & Triage Tag</span>" +
        "</div>" +
        "<b>Patient:</b> " + name + " (" + age + "y, " + gender + ") | <b>Urgency Level:</b> <span class='triage-badge badge-" + (isP1Emergency ? 'p1' : (isP2Urgent ? 'p2' : 'p3')) + "'>" + triageLevel + "</span><br>" +
        "<b>Symptoms:</b> " + symptoms + "<br>" +
        "<b>Duration:</b> " + (duration || "Not specified") + " | <b>Severity:</b> " + severity + "<br>" +
        "<b>Medical History:</b> " + (history || "None recorded") + "<br>" +
        "<b>Active Medications:</b> " + (medications || "None") + "<br>" +
        "<b>Allergies:</b> " + (allergies || "No Known Drug Allergies (NKDA)") + "<br><br>" +
        (!isPat ? firstAidHTML : "") +
        "<div style='font-size:11px; color:#64748b; background:#f8fafc; padding:6px 10px; border-radius:6px; margin-top:8px;'>" +
            "🔒 <strong>Clinical Responsibility:</strong> AI provides preliminary guidance & automated urgency scoring. Treatment & final diagnosis remain with the doctor." +
        "</div>";

    var resultDiv = document.getElementById(isPat ? "resultPat" : "resultDoc");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = structuredSummary;

    summaries++;
    saveState();
    updateDashboard();

    return { 
        isEmergency: isP1Emergency, 
        triageLevel: triageLevel, 
        structuredSummary: structuredSummary,
        firstAidTitle: selectedProtocol.title 
    };
}
