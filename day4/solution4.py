# 조건 문자열
# 제출 내역
# 문제 설명
# 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

# 두 수가 n과 m이라면
# ">", "=" : n >= m
# "<", "=" : n <= m
# ">", "!" : n > m
# "<", "!" : n < m
# 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

# 제한 사항
# 1 ≤ n, m ≤ 100
# 입출력 예
# ineq	eq	n	m	result
# "<"	"="	20	50	1
# ">"	"!"	41	78	0
# 입출력 예 설명
# 입출력 예 #1

# 20 <= 50은 참이기 때문에 1을 return합니다.
# 입출력 예 #2

# 41 > 78은 거짓이기 때문에 0을 return합니다.
# ※ 2023.05.31 테스트 케이스가 수정되었습니다. 기존에 제출한 코드가 통과하지 못할 수도 있습니다.
def solution(ineq, eq, n, m):
    # 조건 비교에 따른 결과 반환
    if ineq == "<":
        if eq == "=":
            return 1 if n <= m else 0
        elif eq == "!":
            return 1 if n < m else 0
    elif ineq == ">":
        if eq == "=":
            return 1 if n >= m else 0
        elif eq == "!":
            return 1 if n > m else 0

# 예시 테스트
print(solution("<", "=", 20, 50))  # 출력: 1
print(solution(">", "!", 41, 78))  # 출력: 0
