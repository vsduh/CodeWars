


var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0
    let dogYears = 0

    for (let k = humanYears;k != 2;k--) { dogYears += 5, catYears += 4};
    if (k == 2) {
        dogYears = dogYears + 9;
        catYears = catYears + 9;

        dogYears = dogYears + 15;
        catYears = catYears + 15;


        return [humanYears, catYears, dogYears];
    }
}







