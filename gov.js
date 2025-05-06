
    // Tab Switcher
    function showTab(tabId, event) {
      const tabs = document.querySelectorAll(".tab-content");
      const buttons = document.querySelectorAll(".tab-button");
      
      tabs.forEach(tab => tab.classList.remove("active"));
      buttons.forEach(button => button.classList.remove("active"));

      document.getElementById(tabId).classList.add("active");
      event.target.classList.add("active");
    }

    // Toggle FAQ Answer
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach(question => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === "none" ? "block" : "none";
      });
    });
 