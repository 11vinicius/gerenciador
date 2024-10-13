
//inicia o projeto
docker compose up --build -d

//roda migration
docker exec -it app npx prisma migrate dev