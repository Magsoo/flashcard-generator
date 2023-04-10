let btn = document.getElementById("generate-button");
let modal = document.getElementById("progress-bar-modal");
let span = document.getElementsByClassName("close")[0];

btn.onclick = openModal = () => {
    modal.style.display = 'block';
}

span.onclick = closeModal = () => {
    modal.style.display = 'none';
}