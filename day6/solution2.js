// 조작하기 1
// 제출 내역
// 문제 설명
// 정수 n과 문자열 control이 주어집니다. control은 "w", "a", "s", "d"의 4개의 문자로 이루어져 있으며, control의 앞에서부터 순서대로 문자에 따라 n의 값을 바꿉니다.

// "w" : n이 1 커집니다.
// "s" : n이 1 작아집니다.
// "d" : n이 10 커집니다.
// "a" : n이 10 작아집니다.
// 위 규칙에 따라 n을 바꿨을 때 가장 마지막에 나오는 n의 값을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// -100,000 ≤ n ≤ 100,000
// 1 ≤ control의 길이 ≤ 100,000
// control은 알파벳 소문자 "w", "a", "s", "d"로 이루어진 문자열입니다.
// 입출력 예
// n	control	result
// 0	"wsdawsdassw"	-1
// 입출력 예 설명
// 입출력 예 #1

// 수 n은 control에 따라 다음과 같은 순서로 변하게 됩니다.
// 0 → 1 → 0 → 10 → 0 → 1 → 0 → 10 → 0 → -1 → -2 → -1
// 따라서 -1을 return 합니다.
function solution(n, control) {
    // 제한사항 확인
    if (n < -100000 || n > 100000) {
        throw new Error("n은 -100,000 이상 100,000 이하여야 합니다.");
    }
    if (control.length < 1 || control.length > 100000) {
        throw new Error("control의 길이는 1 이상 100,000 이하여야 합니다.");
    }
    if (!/^[wasd]+$/.test(control)) {
        throw new Error("control은 'w', 'a', 's', 'd'로만 이루어져야 합니다.");
    }

    // control 문자열을 하나씩 순회하면서 n의 값을 변경
    for (let char of control) {
        if (char === 'w') {
            n += 1;
        } else if (char === 's') {
            n -= 1;
        } else if (char === 'd') {
            n += 10;
        } else if (char === 'a') {
            n -= 10;
        }
    }
    return n;
}

console.log(solution(0, "wsdawsdassw")); // -1

// 예외 상황
console.log(solution(100001, "wsd")); // Error: n은 -100,000 이상 100,000 이하여야 합니다.
console.log(solution(0, "xwsd")); // Error: control은 'w', 'a', 's', 'd'로만 이루어져야 합니다.
