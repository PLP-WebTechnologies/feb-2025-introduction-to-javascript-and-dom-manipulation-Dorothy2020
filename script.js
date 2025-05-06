function changeText() {
    document.getElementById("main-title").textContent = "Text Changed via JavaScript!";
  }
  
  function changeStyle() {
    const desc = document.getElementById("description");
    desc.classList.toggle("highlight");
  }
  
  function toggleElement() {
    const existing = document.getElementById("new-element");
    if (existing) {
      existing.remove();
    } else {
      const newElement = document.createElement("div");
      newElement.id = "new-element";
      newElement.textContent = "I'm a new element added to the DOM!";
      document.body.appendChild(newElement);
    }
  }
  