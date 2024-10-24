// 수열과 구간 쿼리 3
// 제출 내역
// 문제 설명
// 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.

// 각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.

// 위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 1 ≤ arr의 길이 ≤ 1,000
// 0 ≤ arr의 원소 ≤ 1,000,000
// 1 ≤ queries의 길이 ≤ 1,000
// 0 ≤ i < j < arr의 길이
// 입출력 예
// arr	queries	result
// [0, 1, 2, 3, 4]	[[0, 3],[1, 2],[1, 4]]	[3, 4, 1, 0, 2]
// 입출력 예 설명
// 입출력 예 #1

// 각 쿼리에 따라 arr가 다음과 같이 변합니다.
// arr
// [0, 1, 2, 3, 4]
// [3, 1, 2, 0, 4]
// [3, 2, 1, 0, 4]
// [3, 4, 1, 0, 2]
// 따라서 [3, 4, 1, 0, 2]를 return 합니다.

function solution(arr, queries) {
    // 제한사항 체크
    if (arr.length < 1 || arr.length > 1000) {
        throw new Error("arr의 길이는 1 이상 1000 이하여야 합니다.");
    }
    if (queries.length < 1 || queries.length > 1000) {
        throw new Error("queries의 길이는 1 이상 1000 이하여야 합니다.");
    }
    for (const val of arr) {
        if (val < 0 || val > 1000000) {
            throw new Error("arr의 원소는 0 이상 1,000,000 이하여야 합니다.");
        }
    }

    // 쿼리 처리
    for (let [i, j] of queries) {
        if (i < 0 || j >= arr.length || i >= j) {
            throw new Error("쿼리의 인덱스는 0 ≤ i < j < arr.length 여야 합니다.");
        }
        // i와 j의 값 교환
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}
console.log(solution([0, 1, 2, 3, 4], [[0, 3], [1, 2], [1, 4]]));
// 출력: [3, 4, 1, 0, 2]
