# Coderoom: The Admin
This is the official repository of Coderoom's Admin Panel.

Coderoom is an educational platform designed for coding courses in institutions.
Coderoom allows teachers to create coding tests inside classrooms and students to 
attempt these tests in given time frame and allowed programming languages. Coderoom 
provides learboard for both individual tests and entire class. Coderoom also supports dynamic
points system. Coderoom also has an admin panel to prevent unwanted teacher creation.


## Deploy Coderoom-Frontend

### Prerequisites 
- Docker
### Steps to follow

1. Clone this repository
```bash
git clone https://www.github.com/nileshphapale142/coderoom-admin
```

2. Change working directory
```bash
cd coderoom-admin
```

3. Create  .env.production files
```bash
touch .env.production
```

5. Add environment variables in .env.production
```
BACKEND_API_URL="http://localhost:8080"
NODE_ENVIRONMENT="production"
```

Replace necessary details above.

6. Make sure coderoom network is created in docker
```bash
docker network create coderoom
```

7. Build and start the frontend server container
```bash
docker compose up -d
```

8. Admin server will be running on [`http://localhost:5000`](http://localhost:5000). 
Make sure you have backend server running on [`http://localhost:8080`](http://localhost:8080).