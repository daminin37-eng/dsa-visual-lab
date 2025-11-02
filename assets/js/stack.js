let stack = [];

function renderStack() {
    const area = document.getElementById("stackArea");
    area.innerHTML = "";

    stack.forEach(item => {
        let div = document.createElement("div");
        div.className = "stack-box";
        div.textContent = item;
        area.appendChild(div);
    });
}

function log(msg) {
    const logBox = document.getElementById("logBox");
    logBox.innerHTML += msg + "<br>";
    logBox.scrollTop = logBox.scrollHeight;
}

function pushStack() {
    const val = document.getElementById("stackValue").value;
    if(val === "") return alert("Enter a value");
    stack.push(val);
    renderStack();
    log("✅ Pushed: " + val);
    document.getElementById("stackValue").value = "";
}

function popStack() {
    if(stack.length === 0) return alert("Stack empty!");
    let val = stack.pop();
    renderStack();
    log("❌ Popped: " + val);
}

function resetStack() {
    stack = [];
    renderStack();
    log("🔄 Stack Reset");
}
