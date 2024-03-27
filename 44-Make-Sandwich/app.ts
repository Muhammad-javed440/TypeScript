function makeSandwich(item:string[]){
    console.log('   \nMaking your sandwich with:   \n');
    item.forEach(Element=>{
        console.log(`- ${Element}`); 
    })
    console.log('    Enjoy your sandwich !    ');
}
makeSandwich(['Chicken','Butter','Peanut']);
makeSandwich(['Jelly','Potato','Peanut','Chicken']);
makeSandwich(['Beef','Butter','Cheese']);