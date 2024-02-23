//Think of something you could store in a array. For example, you could make a
// list of mountains, rivers, countries, cities, languages, or anything 
//else you’d like. Write a program that creates a list containing these items.
    // Create a list of countries
    
    let countries: string[] = [
        "pakistan",
        "Uk",
        "Russia",
        "France",
        "Canada",
        "Japan",
        "Afghanistan",
        "India",
        "China",
        "U.A.E"
    ];

    // Print the list of countries
    console.log("List of countries:");
    countries.forEach(country => {
        console.log(country);
    })