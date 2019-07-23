// console.log("this is main script of javascrip");

// const amountToConvert = document.getElementById("amount").value;
// console.log("amountToConvertamountToConvert", amountToConvert);
document.getElementById("amount").focus();

const usdExchangeRate = 23216;
const eurExchangeRate = 26130.8;

//Format number to desired currency
function currencyFormater(type, value) {
  const formater = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formater.format(value);
}

/***************************************************** */
/*Convert vnd to usd and reverse START */
/************************************ */
function vndToUsd(amountToConvert) {
  return amountToConvert / usdExchangeRate;
}
function usdToVnd(amountToConvert) {
  return amountToConvert * usdExchangeRate;
}

/************************************* */
/*Convert vnd to usd and reverse END */
/***************************************************** */
function convertCurrency() {
  const amountToConvert = document.getElementById("amount").value;
  // console.log("amountToConvertamountToConvert", amountToConvert);

  const fromCurrency = document.getElementById("convertFrom").value;
  // console.log("fromCurrencyfromCurrency", fromCurrency);

  const toCurrency = document.getElementById("convertTo").value;
  // console.log("toCurrencytoCurrency", toCurrency);

  let amountResult = 0;
  if (fromCurrency === "vnd" && toCurrency === "usd") {
    amountResult = vndToUsd(amountToConvert);
  }

  if (fromCurrency === "usd" && toCurrency === "vnd") {
    amountResult = usdToVnd(amountToConvert);
  }

  //printed result to screen
  document.getElementById("convertedResult").innerHTML = `${currencyFormater(
    fromCurrency,
    amountToConvert
  )}  is equal to ${currencyFormater(toCurrency, amountResult)}`;
  console.log("clicked");
}

// function getConversion(from, to){
//   var xhr = new XMLHttpRequest();
//   xhr.open(
//     "GET",
//   )
// }
