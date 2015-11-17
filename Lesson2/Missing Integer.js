Ticket ID: trainingJFESKA-VMY

function solution(A) {
    var index;
    
    if(A.length === 1){
        if(A[0] > 0) return A[0] + 1;
        else return 1;
    }
    
    for(var i = 0; i < A.length; i++){
        if(A[i] <= 0) A.splice(i, 1);
    }
    
    var N = A.length;
    var count = [];
    
    for(i = 0; i < N; i++){
        count[i] = 0;
    }
    
    for(i = 0; i < N; i++){
        index = A[i] - 1;
        if(count[index] === 0) count[index] = 1;
    }
    
    if(count.indexOf(0) > -1) return count.indexOf(0) + 1;
    else return N + 1;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Write a function:

function solution(A);

that, given a non-empty zero-indexed array A of N integers, returns the minimal positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
