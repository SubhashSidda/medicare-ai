var currentRole = "doctor";
var currentPatientUser = "Suresh Rao";

var patients = JSON.parse(localStorage.getItem("medicare_patients")) || [
    {
        id: "MC-101",
        name: "Suresh Rao",
        age: "52",
        gender: "Male",
        phone: "9876543210",
        symptoms: "Severe crushing chest pain radiating to left shoulder with sweating",
        duration: "2 hours",
        severity: "Severe",
        triageLevel: "P1-Emergency",
        history: "Hypertension (5 years)",
        medications: "Amlodipine 5mg",
        allergies: "Penicillin",
        status: "Needs Review",
        aiSummary: "[EMERGENCY]: Suspected Acute Coronary Syndrome. Penicillin allergy flagged. Immediate ECG required.",
        date: new Date().toLocaleDateString()
    },
    {
        id: "MC-102",
        name: "Lakshmi Devi",
        age: "38",
        gender: "Female",
        phone: "9123456780",
        symptoms: "High fever for 3 days with severe chills and dry cough",
        duration: "3 days",
        severity: "Moderate",
        triageLevel: "P2-Urgent",
        history: "No prior chronic illness",
        medications: "Paracetamol 650mg",
        allergies: "None",
        status: "Completed",
        aiSummary: "[INSPECTION]: Viral pyrexia with respiratory infection. Blood counts recommended.",
        date: new Date().toLocaleDateString()
    },
    {
        id: "MC-103",
        name: "Anand Kumar",
        age: "26",
        gender: "Male",
        phone: "9988776655",
        symptoms: "Mild skin itching and rash after outdoor trek",
        duration: "1 day",
        severity: "Mild",
        triageLevel: "P3-Routine",
        history: "None",
        medications: "None",
        allergies: "None",
        status: "Completed",
        aiSummary: "[ROUTINE]: Contact dermatitis symptoms. Topical soothing lotion advised.",
        date: new Date().toLocaleDateString()
    }
];

var summaries = parseInt(localStorage.getItem("medicare_summaries")) || 3;

function saveState() {
    localStorage.setItem("medicare_patients", JSON.stringify(patients));
    localStorage.setItem("medicare_summaries", summaries);
}
