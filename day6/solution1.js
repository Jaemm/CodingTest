// 마지막 두 원소
// 제출 내역
// 문제 설명
// 정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 
// 마지막 원소에서 그전 원소를 뺀 값을 
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 
// return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num_list의 길이 ≤ 10
// 1 ≤ num_list의 원소 ≤ 9
// 입출력 예
// num_list	result
// [2, 1, 6]	[2, 1, 6, 5]
// [5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]
// 입출력 예 설명
// 입출력 예 #1

// 마지막 원소인 6이 그전 원소인 1보다 크기 때문에 6 - 1인 5를 추가해 return합니다.
// 입출력 예 #2

// 마지막 원소인 5가 그전 원소인 7보다 크지 않기 때문에 5의 두 배인 10을 추가해 return합니다.

function solution(num_list) {
    // 제한사항 확인
    if (num_list.length < 2 || num_list.length > 10) {
        throw new Error("num_list의 길이는 2 이상 10 이하이어야 합니다.");
    }

    for (let num of num_list) {
        if (num < 1 || num > 9) {
            throw new Error("num_list의 원소는 1 이상 9 이하이어야 합니다.");
        }
    }

    const last = num_list[num_list.length - 1];       // 마지막 원소
    const secondLast = num_list[num_list.length - 2]; // 그 전 원소

    if (last > secondLast) {
        num_list.push(last - secondLast); // 마지막 원소가 더 크면 차이 추가
    } else {
        num_list.push(last * 2); // 그렇지 않으면 두 배한 값 추가
    }

    return num_list;
}

console.log(solution([2, 1, 6])); // [2, 1, 6, 5]
console.log(solution([5, 2, 1, 7, 5])); // [5, 2, 1, 7, 5, 10]

// 예외 상황
console.log(solution([0, 5])); // Error: num_list의 원소는 1 이상 9 이하이어야 합니다.
console.log(solution([1]));    // Error: num_list의 길이는 2 이상 10 이하이어야 합니다.
