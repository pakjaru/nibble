document.addEventListener("DOMContentLoaded", () => {
  // Set Footer Copyright Year
  const footerYear = document.querySelector('footer span');
  const currentYear = new Date().getFullYear();

  footerYear.textContent = currentYear;
})
