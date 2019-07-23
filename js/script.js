// console.log("this is main script of javascrip");

// const amountToConvert = document.getElementById("amount").value;
// console.log("amountToConvertamountToConvert", amountToConvert);
document.getElementById("amount").focus();

// const usdExchangeRate = 23216;
// const eurExchangeRate = 26130.8;

//Format number to desired currency
function currencyFormater(type, value) {
  console.log("Currency Formatter Tupe: ", type);
  console.log("value", value);

  const formater = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formater.format(value);
}

/***************************************************** */
/*Convert vnd to usd and reverse START */
/************************************ */
// function vndToUsd(amountToConvert) {
//   return amountToConvert / usdExchangeRate;
// }
// function usdToVnd(amountToConvert) {
//   return amountToConvert * usdExchangeRate;
// }

/************************************* */
/*Convert vnd to usd and reverse END */
/***************************************************** */

/***************************************************** */
/*Convert vnd to eur and reverse START */
/************************************* */
// function vndToEur(amountToConvert) {
//   return amountToConvert / eurExchangeRate;
// }
// function eurToVnd(amountToConvert) {
//   return amountToConvert * eurExchangeRate;
// }

// console.log("amountResult", amountResult);

/************************************* */
/*Convert vnd to eur and reverse END */

function convertCurrency() {
  const amountToConvert = document.getElementById("amount").value;
  // console.log("amountToConvertamountToConvert", amountToConvert);

  const fromCurrency = document.getElementById("convertFrom").value;
  // console.log("fromCurrencyfromCurrency", fromCurrency);

  const toCurrency = document.getElementById("convertTo").value;
  // console.log("toCurrencytoCurrency", toCurrency);

  const amountResult = getConversion(fromCurrency, toCurrency);
  // console.log(amountResult);

  //printed result to screen
  // document.getElementById("convertedResult").innerHTML = `${currencyFormater(
  //   fromCurrency,
  //   amountToConvert
  // )}  is equal to ${currencyFormater(toCurrency, amountResult)}`;
  // console.log("clicked");
}

function updateResults(from, to, conversionRate) {
  const value = document.getElementById("amount").value;
  console.log("value redf 13", value);
  console.log("value redf 13 conversionRate", conversionRate);
  const convertedValue = conversionRate * value;
  console.log("superman", convertedValue);
  const formattedCurrency = currencyFormater(to.toUpperCase(), convertedValue);
  document.getElementById("convertedResult").innerHTML = `${currencyFormater(
    from,
    value
  )}  is equal to ${formattedCurrency}`;
  // document.getElementById("convertedResult").innerHTML = formattedCurrency;
  // return formattedCurrency;
}

function getConversion(from, to) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=9a02420c4a5e378f2215`
  );
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      console.log("sjksjsjs", response);
      const conversionRate =
        response[`${from.toUpperCase()}_${to.toUpperCase()}`];
      updateResults(from, to, conversionRate);
    } else {
      alert("Request failed.  Returned status of " + xhr.status);
    }
  };
  xhr.send();
}
