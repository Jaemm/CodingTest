# n의 배수
# 제출 내역
# 문제 설명
# 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

# 제한사항
# 2 ≤ num ≤ 100
# 2 ≤ n ≤ 9
# 입출력 예
# num	n	result
# 98	2	1
# 34	3	0
# 입출력 예 설명
# 입출력 예 #1

# 98은 2의 배수이므로 1을 return합니다.
# 입출력 예 #2

# 32는 3의 배수가 아니므로 0을 return합니다.
def solution(num, n):
    # 제한사항 검증
    if not (2 <= num <= 100 and 2 <= n <= 9):
        return "num은 2 이상 100 이하, n은 2 이상 9 이하의 값이어야 합니다."
    
    # num이 n의 배수인지 확인하여 결과 반환
    return 1 if num % n == 0 else 0

# 예시 테스트
print(solution(98, 2))  # 출력: 1
print(solution(34, 3))  # 출력: 0
