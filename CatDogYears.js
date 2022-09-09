
describe("Example Tests", function() {

    it("one", function() {
        Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
    });

    it("two", function() {
        Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
    });

    it("ten", function() {
        Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
    });

});

var humanYearsCatYearsDogYears = function(humanYears) {
    let catYears = 0
    let dogYears = 0
    let k = humanYears;
    while (k != 2) { dogYears += 5, catYears += 4, k--
    }
    if (k = 2) {
        dogYears = dogYears + 9; catYears = catYears + 9;
    }
    dogYears = dogYears + 15; catYears = catYears + 15;
}

return [humanYears, catYears, dogYears];

}

