const weightInp = document.querySelector(".weight") as HTMLInputElement;
const heightInp = document.querySelector(".height") as HTMLInputElement;
const but = document.querySelector(".calc-but") as HTMLButtonElement;
const container = document.querySelector(".container") as HTMLDivElement;
const resElement = document.createElement("div") as HTMLDivElement;

but.addEventListener("click", (e): void => {
  e.preventDefault();
  const calc: number =
    (+weightInp.value / +heightInp.value / +heightInp.value) * 10000;
  resElement.innerHTML = ``;
  if (weightInp.value && heightInp.value) {
    showResult(calc);
    but.textContent = "Calculate";
  } else {
    but.textContent = `Enter your ${
      weightInp.value === "" ? "Weight" : "Height"
    }`;
  }
});
const showResult = (res: number): void => {
  const showRes: string = res.toString().substring(0, 4);
  resElement.className = `result`;
  resElement.innerHTML = `
  <img src="/src/images/arrow.svg"
    alt="res-image"
    class="arrow-image">
<img src="/src/images/bmi-res.jpg"
  alt="res-image"
  class="res-image">
  <h2>Your BMI : <strong>${showRes}</strong></h2>
  <p>If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to 24.9, it falls within the Healthy Weight range. If your BMI is 25.0 to 29.9, it falls within the overweight range.
    </p>
  `;
  container.appendChild(resElement);
};
