const form = document.querySelector("#answer-form");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const selected = document.querySelectorAll('input[name="answer"]:checked');

  if (selected.length === 0) {
    message.textContent = "Please select an option before submitting.";
    return;
  }

  message.textContent = "Your selection has been recorded.";
});
