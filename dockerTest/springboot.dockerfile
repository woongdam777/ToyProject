FROM openjdk:17

# 작업 디렉토리 설정
WORKDIR /app

# 프로젝트 소스 코드 복사
COPY /home/ubuntu/LAF /app

# Maven 또는 Gradle을 사용하여 애플리케이션 빌드
RUN ./gradlew clean package

# 빌드된 JAR 파일 실행
CMD ["java", "-jar", "build/libs/LAF-0.0.1-SNAPSHOT.jar"]
