window.onload = main;

function main(){
	var A = [];
	var total = 0;
	var N = prompt("Give the size of the array");
	for(var n = 0; n < N; n++){		
		A.push(+prompt("Give value for A"));
	}
	var k = +prompt("Give value for k");
	var m = +prompt("Give value for m");
	
	alert(example(A, k, m));

	function solution(A, k, m){
		var result = 0, leftPos, rightPos;
		var pref = [0];

		for(var i = 1; i <= N; i++){
			pref[i] = pref[i-1] + A[i-1];
		}

		for(var p = 0; p <= min(m, k); p++){
			leftPos = k - p;
			rightPos = min(N-1, max(k, k + m - 2 * p));
			result = max(result, countTotal(pref, leftPos, rightPos));
		}

		for(p = 0; p <= min(m, N - k - 1); p++){
			rightPos = k + p;
			leftPos = max(0, min(k, k - (m - 2 * p)));
			result = max(result, countTotal(pref, leftPos, rightPos));
		}

		return result;
	}

	function min(a, b){
		if(a <= b) return a;
		else return b;
	}
		
	function max(a, b){
		if(a >= b) return a;
		else return b;
	}

	function countTotal(arr, left, right){
		return arr[right+1] - arr[left];
	}

}