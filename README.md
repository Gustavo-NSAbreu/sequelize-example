# Run this application

## Required software

**You must have Docker and Docker Compose installed.**


## Running
Run:
```ps
docker compose up
```

## Access the database using psql
Run:
```ps
docker exec -it sequelize-example-database psql -h localhost -p 5432 -d sequelize-example -U postgres
```