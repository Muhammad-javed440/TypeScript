function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    console.log("\n".concat(city, " is in ").concat(country, ".\n"));
}
// cities with default country name
describe_city("Lahore");
describe_city("Karachi");
// city with country passed as argument
describe_city("New dehli", "India");
