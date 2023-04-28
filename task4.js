function solution(A) {
    // Step 1: Calculate the total pollution emitted by all factories.
    let totalPollution = A.reduce((a, b) => a + b, 0);

    // Step 2: Sort the array in descending order of pollution.
    A.sort((a, b) => b - a);

    // Step 3: Keep applying filters until the total pollution is reduced by at least half.
    let filtersNeeded = 0;
    let currentPollution = totalPollution;
    let i = 0;
    while (currentPollution >= totalPollution / 2 && currentPollution >= totalPollution - A[i] / Math.pow(2, filtersNeeded)) {
        currentPollution -= A[i] / Math.pow(2, filtersNeeded);
        filtersNeeded++;
        i++;
    }
    return filtersNeeded;
}
