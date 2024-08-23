const element = document.getElementById("pb-container");

element.addEventListener("mouseover", function () {
  // Prüfen, ob das Element die Klasse 'hovered' bereits hat
  if (!element.classList.contains("hovered")) {
    element.classList.add("hovered");

    // Optional: Klasse nach Ende der Animation entfernen, wenn du die Animation wiederholen möchtest
    element.addEventListener(
      "animationend",
      function () {
        element.classList.remove("hovered");
      },
      { once: true },
    );
  }
});
