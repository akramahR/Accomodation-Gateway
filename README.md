# Accommodation Management System

This project implements a microservices architecture for an accommodation management system, consisting of the following services:
- **Accommodation Gateway** (API Gateway)
- **Guest Service**
- **Review Service**
- **Room Booking Service**

All services are developed in **.NET 7**, containerized using **Docker**, and orchestrated using **Docker Compose** for ease of deployment.

## Prerequisites

Before setting up the system, ensure the following software is installed on your machine:
- [Docker](https://docs.docker.com/get-docker/)
- [.NET 7 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) (optional)(for development purposes only, if you want to run the services locally)

## System Setup

### Step 1: Clone the Repositories

Clone all the required repositories into the same folder on your local machine:

```bash
git clone https://github.com/akramahR/Accomodation-Gateway.git
git clone https://github.com/akramahR/GuestService.git
git clone https://github.com/akramahR/ReviewService.git
git clone https://github.com/akramahR/RoomBookinService.git
```

### Step 2: Navigate to the API Gateway

After cloning the repositories, navigate to the **Accommodation Gateway** directory:

```bash
cd Accomodation-Gateway
```

### Step 3: Build and Start the System

Run the following command to build and start the system using Docker Compose:

```bash
docker-compose up --build
```

This command will:
- Build Docker images for the **Accommodation Gateway** and the three microservices.
- Start all services in separate containers.
- Automatically configure routing and communication between services.

### Step 4: Access the Services

Once the system is up and running, you can access the services via the following URLs:

- **Accommodation Gateway** (API Gateway):  
  [http://localhost:5157](http://localhost:5157)

- **Guest Service**:  
  [http://localhost:5158](http://localhost:5158)

- **Review Service**:  
  [http://localhost:5159](http://localhost:5159)

- **Room Booking Service**:  
  [http://localhost:5160](http://localhost:5160)

These ports can be configured from the `docker-compose.yml` file located in the **Accommodation Gateway** directory.

## Swagger API Documentation

Each service provides its own Swagger UI for API documentation and testing. You can explore the available endpoints and test them interactively:

- **Guest Service Swagger**:  
  [http://localhost:5158/swagger](http://localhost:5158/swagger)

- **Review Service Swagger**:  
  [http://localhost:5159/swagger](http://localhost:5159/swagger)

- **Room Booking Service Swagger**:  
  [http://localhost:5160/swagger](http://localhost:5160/swagger)

## Configuration

By default, the API Gateway runs on port `5157`, and the microservices run on ports `5158`, `5159`, and `5160`. These can be modified in the **Accommodation Gateway**'s `docker-compose.yml` file if needed:

```yaml
# Example of service port configuration in docker-compose.yml
services:
  roombookingservice:
    image: roombookingservice:latest
    container_name: roombookingservice
    build:
      context: ../RoomBookinservice  
      dockerfile: RoomBookinService/Dockerfile
    ports:
      - "5158:80"
    networks:
      - microservices-net
    environment:
      - ASPNETCORE_URLS=http://+:80
      - ASPNETCORE_ENVIRONMENT=Docker
```
change ports "5158:80" to "{your-port}:80"
## Stopping the System

To stop the running containers, press `CTRL + C` in the terminal where the system is running, or run the following command in the **Accommodation Gateway** directory:

```bash
docker-compose down
```

This will stop and remove the containers without deleting the images.
