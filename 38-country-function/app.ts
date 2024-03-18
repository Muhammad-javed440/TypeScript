function  describe_city(city: string,country: string="pakistan"):void{
    console.log(`\n${city} is in ${country}.\n`);
}
// cities with default country name
describe_city("Lahore");
describe_city("Karachi");

// city with country passed as argument
describe_city("New dehli", "India");