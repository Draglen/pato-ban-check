const answer = document.getElementById("answer");

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;

// Traduzioni
const translations = {
  it: { yes: "SÌ", no: "NO" },
  en: { yes: "YES", no: "NO" }
};

const userLang = navigator.language.startsWith("it") ? "it" : "en";
const { yes, no } = translations[userLang];

const isBirthday = (day === 20 && month === 1);

answer.textContent = isBirthday ? no : yes;
answer.classList.add(isBirthday ? "no" : "si");
