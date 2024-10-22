# 문자열 돌리기
# 제출 내역
# 문제 설명
# 문자열 str이 주어집니다.
# 문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

# 제한사항
# 1 ≤ str의 길이 ≤ 10

# 입출력 예
# 입력 #1

# abcde
# 출력 #1

# a
# b
# c
# d
# e

# 입력 받기
str_input = input()

# 제한사항 확인
if 1 <= len(str_input) <= 10:
    # 문자열을 한 글자씩 줄바꿈하여 출력
    for char in str_input:
        print(char)
else:
    print("문자열의 길이가 제한사항을 초과했습니다.")