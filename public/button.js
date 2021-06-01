
document.getElementById("button").addEventListener("click", event => {
    let title = event.target.value;
    console.log(title);
    console.log(event);
})