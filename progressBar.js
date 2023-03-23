const ourField = document.querySelector(".our-field")
const progressBar = document.querySelector(".progress-inner")
const progress = document.querySelector(".progress")
const errorMsg = document.querySelector(".error")
const box = document.querySelector(".box")
const nextValueWithZero = document.querySelector(".nextValueWithZero")
const emptySpace = document.querySelector(".empty-space")

ourField.addEventListener("input", formHandler)

function formHandler() {
  errorMsg.textContent = ""

  const pattern = /^[0-9]+$/ // pattern to check if the value is numeric

  if (!ourField.value) {
    progressBar.style.transform = "scaleX(0)"
  }

  if (ourField.value > 1000) {
    errorMsg.textContent = "allowed Values upto 1000 !!"
  }
  if (!ourField.value.match(pattern)) {
    errorMsg.textContent = "Invalid value !!"
    // add animation classes on Error
    progressBar.classList.add("progress-inner-on-error")
    progress.classList.add("progress-on-error")
    box.classList.add("box-on-error")
    // remove animation classes to apply animation on next error
    setTimeout(() => {
      progressBar.classList.remove("progress-inner-on-error")
      progress.classList.remove("progress-on-error")
      box.classList.remove("box-on-error")
    }, 405)
  }

  fieldValue = parseInt(ourField.value, 10)

  nextValueWithZero.textContent = ` / ${nearestNextValueWithZero(fieldValue)}` // located above progress-bar
  if (isNaN(nearestNextValueWithZero(fieldValue))) nextValueWithZero.textContent = "" // if the input Field is Blank

  progressBar.style.transform = `scaleX(${fieldValue / nearestNextValueWithZero(fieldValue)})`
}

function nearestNextValueWithZero(theValue) {
  return parseInt((theValue + 10) / 10) * 10
}
