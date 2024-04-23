//Cities: Write a function called descrbe_city() that accepts the name of a city and its country. The function 
//should print a simple sentence, such as karachi ia in pakistan. Give the parmeter for the country a default 
// value. Call your function for three different cities, at least one of which is not in the default country.
function descrbe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    console.log("".concat(city, " is in ").concat(country));
}
descrbe_city('karachi');
descrbe_city('france', 'europe');
descrbe_city('lohore', ' punjab');
