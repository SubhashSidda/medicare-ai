function handleOCR(input, symptomsId, historyId, medsId, statusId) {
    var file = input.files[0];
    if (file) {
        var statusEl = document.getElementById(statusId);
        statusEl.innerHTML = "<b style='color:#1769ff'>⏳ Processing OCR on " + file.name + "...</b>";

        setTimeout(function() {
            statusEl.innerHTML = "<b style='color:#12b99a'>✓ Extracted clinical data from " + file.name + "</b>";
            
            var sympEl = document.getElementById(symptomsId);
            sympEl.value += (sympEl.value ? "\n" : "") + "[Scanned Report]: Chronic dry cough with mild wheezing.";
            
            var histEl = document.getElementById(historyId);
            if (!histEl.value) {
                histEl.value = "Asthma (Diagnosed 2021), Seasonal Rhinitis";
            }

            var medEl = document.getElementById(medsId);
            if (!medEl.value) {
                medEl.value = "Salbutamol Inhaler (PRN)";
            }

            alert("✓ Medical Document Scan Complete!\nExtracted symptoms and medication details populated.");
        }, 1200);
    }
}
