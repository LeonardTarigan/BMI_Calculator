function count() {
    let weight = document.querySelector(".weight-in").value;
    let height = document.querySelector(".height-in").value;
    let status = document.querySelector(".status-out");
    let message = document.querySelector(".message-out");
    let index = document.querySelector(".index-out");

    status.innerHTML = "-";
    index.innerHTML = "-";

    if (isNaN(height) || isNaN(weight)) {
        message.innerHTML = "Input harus berupa angka!"
    } else {
        if (height > 10) {
            message.innerHTML = "Tinggi harus dalam meter!";
        } else {
            let result = (weight / (height * height)).toFixed(1);

            index.innerHTML = result;

            if (result < 18.5) {
                status.innerHTML = "Underweight";
                message.innerHTML = "Wah, perlu naikin berat badan nih";
            } else if (result > 18.5 && result < 22.9) {
                status.innerHTML = "Normal";
                message.innerHTML = "Keren! Pertahankan ya.";
            } else if (result > 22.9 && result < 29.9) {
                status.innerHTML = "Overweight";
                message.innerHTML = "Harus mulai diet nih. xixixi";
            } else if (result > 29.9) {
                status.innerHTML = "Obesitas";
                message.innerHTML = "Kamu harus diet!";
            }
        }
    }
}
