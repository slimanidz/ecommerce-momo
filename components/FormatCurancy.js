const CURRENCY_FORMATTER = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
//   new Intl.NumberFormat(undefined, {        Pour afficher le $ de gouche
//   currency: "EUR", // USD
//   style: "currency",
// });
const FormatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};

export default FormatCurrency;
