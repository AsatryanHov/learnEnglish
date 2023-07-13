document.addEventListener("DOMContentLoaded", function() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabs = document.querySelectorAll(".tab");

  // Add event listener to each tab button
  tabButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      // Remove 'active' class from all buttons and tabs
      tabButtons.forEach(function(btn) {
        btn.classList.remove("active");
      });
      tabs.forEach(function(tab) {
        tab.classList.remove("active");
      });

      // Add 'active' class to the clicked button and corresponding tab
      this.classList.add("active");
      tabs[index].classList.add("active");
    });
  });
});
