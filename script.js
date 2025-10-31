let count = 0;

function clickMe() {
    count++;
    document.getElementById("count").textContent = count;
    console.log("Clicked! Current count:", count);
}