// Currency quote of the day
const USD = 5.7;
const EUR = 5.98;
const GBP = 7.19;

// Getting values ​​from forms
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Input only receive numeric values
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Getting the submit event on form
form.onsubmit = (event) => {
  event.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

// Curreny converter function
function convertCurrency(amount, price, symbol) {
  try {
    //Show the selected currency
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //Showing the converted result
    let total = amount * price;
    total = formatCurrencyBRL(total);
    result.textContent = total;

    // Apply the class that shows the footer
    footer.classList.add("show-result");
  } catch (error) {
    // Remove the class that shows the footer
    console.log(error);
    footer.classList.remove("show-result");
    alert("Nao foi possivel realizar a conversão");
  }
}

// Format the value to BRL currency (R$)
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
