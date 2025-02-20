document.addEventListener("DOMContentLoaded", function () {
    const fruitSelect = document.getElementById("fruit");

    fruitSelect.addEventListener("change", function () {
        var fruit = fruitSelect.value;
        document.getElementById("result").textContent = "선택한 과일은: " + fruit;
    });
});