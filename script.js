const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const icon = document.querySelector(".icon");
const firstIcon = document.querySelector(".icon-first ");
const iconSecond = document.querySelector(".icon-second ");
const thirdIcon = document.querySelector(".third-icon");

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
  thirdIcon.classList.add("active");
  firstIcon.classList.remove("active");
  iconSecond.classList.add("active");

  question.innerHTML = "I Love You Too ;)";
});

noBtn.addEventListener("mouseover", () => {
  question.innerHTML = "Do you love me ?";
  removeIcon();
  const i =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const j =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Oh No Sh*t((";
});

const removeIcon = () => {
  thirdIcon.classList.add("active");
  firstIcon.classList.add("active");
  iconSecond.classList.remove("active");
};
