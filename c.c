#include <stdio.h>
#include <string.h>

#define MAX_NAME_LENGTH 20 // 이름 길이
#define MAX_STUDENTS 10 // 최대 학생수
#define MAX_SUBJECTS 3 // 과목 개수
typedef struct {
    char name[MAX_NAME_LENGTH + 1]; // 학생이름
    int num; // 학생 번호
    int scores[MAX_SUBJECTS]; // 국어, 영어, 수학 성적
} Student;
Student students[MAX_STUDENTS]; // 전체 학생 목록을 담는 배열과 현재 등록된 학생 수

// 초기화 함수
void initialize() {
    for (int i = 0; i < MAX_STUDENTS; i++) {
        students[i].num = -1;
        for (int j = 0; j < MAX_SUBJECTS; j++) {
            students[i].scores[j] = -1;
        }
    }
    // 예시 학생 추가
    strcpy(students[0].name, "홍길동");
    students[0].num = 1;
    students[0].scores[0] = 90;
    students[0].scores[1] = 80;
    students[0].scores[2] = 75;
    strcpy(students[1].name, "고길동");
    students[1].num = 2;
    students[1].scores[0] = 70;
    students[1].scores[1] = 50;
    students[1].scores[2] = 100;
    strcpy(students[2].name, "이영희");
    students[2].num = 3;
    students[2].scores[0] = 100;
    students[2].scores[1] = 70;
    students[2].scores[2] = 70;
}

// 학생 추가 함수
void addStudent() {
    // 추가하는 학생 번호 / 존재하거나 최대 학생수 초과할시 경고
    int num;
    printf("추가할 학생 번호(1~%d): ", MAX_STUDENTS);
    scanf("%d", &num);
    if (num < 1 || num > MAX_STUDENTS || students[num - 1].num != -1) {
        printf("유효하지 않은 학생 번호입니다.\n");
        return;
    }
    students[num - 1].num = num;

    printf("이름: ");
    scanf("%s", students[num - 1].name);
    // 국어, 영어, 수학 0점 부터 100점까지 입력 가능 / 잘못 입력시 초기화
    for (int i = 0; i < MAX_SUBJECTS; i++) {
        printf("%s 성적: ", (i == 0) ? "국어" : (i == 1) ? "영어" : "수학");
        scanf("%d", &students[num - 1].scores[i]);

        if (students[num - 1].scores[i] < 0 || students[num - 1].scores[i] > 100) {
            printf("유효하지 않은 성적입니다. 다시 입력해주세요\n");
            students[num - 1].scores[i] = -1;
            i--;
            // 유효하지 않은 성적이 입력되었으므로 현재 성적을 다시 입력받기 위해 인덱스 감소
            // 성적이 유효하면 다음 성적 입력 받기
        }
    }
    printf("학생 추가 완료!\n");
}

// 학생 제거 함수
void removeStudent() {
    int num;
    printf("삭제할 학생 번호(1~%d): ", MAX_STUDENTS);
    scanf("%d", &num);
    if (num < 1 || num > MAX_STUDENTS || students[num - 1].num == -1) {
        printf("유효하지 않은 학생 번호이거나 데이터가 없습니다.\n");
        return;
    }
    students[num - 1].num = -1; // 초기화
    printf("학생 삭제 완료!\n");
}

// 학생 조회 함수
void findStudent() {
    int num;
    printf("조회할 학생 번호(1~%d): ", MAX_STUDENTS);
    scanf("%d", &num);
    if (num < 1 || num > MAX_STUDENTS || students[num - 1].num == -1) {
        printf("유효하지 않은 학생 번호이거나 데이터가 없습니다.\n");
        return;
    }
    printf("\n--- 학생 정보 ---\n");
    printf("번호: %d\n", students[num - 1].num);
    printf("이름: %s\n", students[num - 1].name);
    printf("국어 성적: %d\n", students[num - 1].scores[0]);
    printf("영어 성적: %d\n", students[num - 1].scores[1]);
    printf("수학 성적: %d\n", students[num - 1].scores[2]);
    printf("-----------------\n");
}

// 전체 학생 목록 출력 함수
void listStudents() {
    printf("\n--- 전체 학생 목록 ---\n");
    printf("%4s %8s %8s %4s %4s\n", "번호", "이름", "국어", "영어", "수학");

    for (int i = 0; i < MAX_STUDENTS; i++) {
        if (students[i].num != -1) {
            printf("%3d %11s %4d %4d %5d\n",
                    students[i].num,
                    students[i].name,
                    students[i].scores[0],
                    students[i].scores[1],
                    students[i].scores[2]);
        }
    }
    printf("------------------------\n");
}

int main() {
    int select;

    initialize(); // 초기화 함수 호출
    do {
        printf("\n--- 성적 관리 프로그램 ---\n");
        printf("1. 학생 추가\n");
        printf("2. 학생 삭제\n");
        printf("3. 학생 조회\n");
        printf("4. 전체 학생 목록\n");
        printf("0. 종료\n");
        scanf("%d", &select);

        switch (select) {
            case 1: addStudent(); break; // 학생 추가 함수호출
            case 2: removeStudent(); break; // 학생 제거 함수호출
            case 3: findStudent(); break; // 학생 조회 함수호출
            case 4: listStudents(); break; // 전체 학생 목록 출력 함수호출
            case 0: printf("프로그램 종료\n"); break;
            default: printf("잘못된 선택입니다. 다시 선택해주세요.\n");
        }
    } while (select != 0);

    return 0;
}