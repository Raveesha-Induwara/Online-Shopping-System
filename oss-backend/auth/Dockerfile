# Run stage
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copy the JAR file from the build stage
COPY target/*.jar app.jar

# Debugging: List the contents of the /app directory
RUN ls -la /app

EXPOSE 8088
ENTRYPOINT ["java","-jar","app.jar"]