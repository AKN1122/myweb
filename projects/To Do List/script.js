let display = document.querySelector(".input");
let to_do = document.querySelector(".to-do");
document.querySelector(".btn").addEventListener("click",() => {
    list(display.value)
    display.value=""
})
to_do.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    e.target.closest(".container1").style.textDecoration = 
      e.target.checked ? "line-through" : "none";
  }
});
function list(text) {
    to_do.insertAdjacentHTML("beforeend",`<div class="container1">
            <div class="box1"><input type="checkbox" name="checkbox" id="checkbox"></div>
            <div class="box2">${text}</div>
        </div>`)
        saveTasks()
}
function saveTasks() {
    let tasks = [];
    document.querySelectorAll(".container1 .box2").forEach(task => {
        tasks.push(task.innerText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
window.addEventListener("load", () => {
    let saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.forEach(task => list(task));
});

