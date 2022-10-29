const btn = document.querySelector(".btn");
const form = document.querySelector(".form");
const userPassTextEl = document.querySelector(".user-pass__text");
const copyBtn = document.querySelector(".user-pass__btn");
const rangeInput = document.querySelector(".range");
const lenghtNumberTextEl = document.querySelector(".length__num");
let passSettings;
let userPass;
const checkSettings = () => {
  return {
    uppercase: form["uppercase"].checked,
    lowercase: form["lowercase"].checked,
    numbers: form["numbers"].checked,
    symbols: form["symbols"].checked,
    length: form["range"].value,
  };
};
const generatePassword = ({
  uppercase,
  lowercase,
  numbers,
  symbols,
  length,
}) => {
  let userTempPass = "";
  for (let i = 0; i < length; i++) {
    if (uppercase) {
      userTempPass += getASCIICode(65, 90);
    }
    if (lowercase) {
      userTempPass += getASCIICode(97, 122);
    }
    if (numbers) {
      userTempPass += getASCIICode(48, 57);
    }
    if (symbols) {
      userTempPass += getASCIICode(33, 47);
    }
  }
  userTempPass = getShufflePass(userTempPass, length);
  console.log(userTempPass);
  return userTempPass;
};
const getShufflePass = (str, length) => {
  return [...str]
    .sort(() => Math.random() - 0.5)
    .slice(0, length)
    .join("");
};
const getRandomNumberFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const getASCIICode = (from, to) => {
  return String.fromCharCode(getRandomNumberFromInterval(from, to));
};
const handleUserPass = () => {
  passSettings = checkSettings();
  userPass = generatePassword(passSettings);
  userPassTextEl.innerHTML = userPass;
};
btn.addEventListener("click", () => {
  handleUserPass();
});
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(userPassTextEl.innerText);
});
rangeInput.addEventListener("input", () => {
  lenghtNumberTextEl.innerHTML = rangeInput.value;
});
window.addEventListener("DOMContentLoaded", () => {
  handleUserPass();
});
/* particles background js */
window.onload = function () {
  Particles.init({
    selector: ".background",
    connectParticles: true,
    color: "#000000",
    speed: "3",
    minDistance: 200,
    maxParticles: 100,
    sizeVariations: 1,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 30,
        },
      },
      {
        breakpoint: 1240,
        options: {
          maxParticles: 50,
        },
      },
      {
        breakpoint: 420,
        options: {
          maxParticles: 10,
        },
      },
    ],
  });
};
/* particles background js */
