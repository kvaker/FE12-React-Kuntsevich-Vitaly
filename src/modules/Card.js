class Card {
    constructor(taskName, isDone, rootElement) {
    }
    this Card = document.createElement("div");
    this Card.innerText = `Tsk ${taskName}, is ${isDone ? "done" : "note done"}`
    rootElement.appendChild(this.Card);
    }