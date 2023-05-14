const inputRef = document.querySelector("#validation-input");
const dataLength = inputRef.getAttribute("data-length");

function handleInputBlur(event) {
  const input = event.currentTarget;
  const inputValue = input.value.trim();

  if (inputValue.length === Number(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

inputRef.addEventListener("blur", handleInputBlur);
