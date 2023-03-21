function countPositivesSumNegatives(input) {

    function countPositivesSumNegatives(input) {
        if (input === null || input.length === 0) {
            return [];
        }

        let positiveCount = 0;
        let negativeSum = 0;

        for (let num of input) {
            if (num > 0) {
                positiveCount += 1;
            } else if (num < 0) {
                negativeSum += num;
            }
        }

        return [positiveCount, negativeSum];
    }

}