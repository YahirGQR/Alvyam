console.log("Página ALVYAM cargada correctamente");

// Modo oscuro
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");
  btn.id = "darkModeToggle";
  btn.innerHTML = "🌙";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    btn.innerHTML = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
});
