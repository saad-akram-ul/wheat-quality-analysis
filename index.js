function analyzeWheat() {

    let moisture = parseFloat(
        document.getElementById("moisture").value
    );

    let protein = parseFloat(
        document.getElementById("protein").value
    );

    let result = document.getElementById("result");

    if (isNaN(moisture) || isNaN(protein)) {
        result.innerHTML = "Please enter all values.";
        result.style.color = "red";
        return;
    }

    let grade = "";

    if (moisture <= 12 && protein >= 12) {
        grade = "🌾 Grade A - Excellent Quality Wheat";
    }
    else if (moisture <= 14 && protein >= 10) {
        grade = "🌾 Grade B - Good Quality Wheat";
    }
    else {
        grade = "🌾 Grade C - Low Quality Wheat";
    }

    result.innerHTML = grade;
    result.style.color = "green";
}