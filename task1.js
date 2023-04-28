function solution(A) {
    let n = A.length;
    let increasing = Array(n).fill(1);
    let decreasing = Array(n).fill(1);
    
    // Calculate longest increasing subsequence ending at each index
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (A[i] > A[j] && increasing[i] < increasing[j] + 1) {
                increasing[i] = increasing[j] + 1;
            }
        }
    }
    
    // Calculate longest decreasing subsequence starting at each index
    for (let i = n - 2; i >= 0; i--) {
        for (let j = n - 1; j > i; j--) {
            if (A[i] > A[j] && decreasing[i] < decreasing[j] + 1) {
                decreasing[i] = decreasing[j] + 1;
            }
        }
    }
    
    // Find longest spike
    let maxSpike = 0;
    for (let i = 0; i < n; i++) {
        if (increasing[i] + decreasing[i] - 1 > maxSpike) {
            maxSpike = increasing[i] + decreasing[i] - 1;
        }
    }
    
    return maxSpike;
}