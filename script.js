
function count() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (height > 10) {
        document.getElementById("message").innerHTML = "Tinggi harus dalam meter!"
    } else {
        const result = (weight / (height * height)).toFixed(1);

        document.getElementById("imt").innerHTML = result;

        if (result < 18.5) {
            document.getElementById("status").innerHTML = "Underweight";
            document.getElementById("message").innerHTML = "Wah, perlu naikin berat badan nih"
        } else if (result > 18.5 && result < 22.9) {
            document.getElementById("status").innerHTML = "Normal";
            document.getElementById("message").innerHTML = "Keren! Pertahanin ya."
        } else if (result > 22.9 && result < 29.9) {
            document.getElementById("status").innerHTML = "Overweight";
            document.getElementById("message").innerHTML = "Harus mulai diet nih. xixixi"
        } else if (result > 29.9) {
            document.getElementById("status").innerHTML = "Obesitas";
            document.getElementById("message").innerHTML = "Kamu harus diet!"
        }
    }
}
