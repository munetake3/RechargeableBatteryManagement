FROM maven:3.9.8-amazoncorretto-21

# Expose the port
EXPOSE 8080

# Set the working directory
WORKDIR /app

# Copy the source code to the working directory
COPY . /app

# Build the application
RUN mvn package

# Run the application
CMD ["mvn", "spring-boot:run"]
