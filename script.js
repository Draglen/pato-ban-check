const answer = document.getElementById("answer");
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1; // Gennaio è 0

if (day === 20 && month === 1) {
  answer.textContent = "NO";
  answer.classList.add("no");
} else {
  answer.textContent = "SÌ";
  answer.classList.add("si");
}
