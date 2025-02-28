# 🚀 Gym Management API

API desenvolvida com **Node.js**, **TypeScript**, **Express** e **Zod**, seguindo princípios **SOLID** e **Clean Architecture**.


## 📌 API Endpoints Overview

- http://gym-management-iota-sandy.vercel.app/api/v1

| Endpoint                              | Method | Description                           | Auth Required |
|----------------------------------------|--------|---------------------------------------|--------------|
| `/authentication/register`      | POST   | Register a new user                   | ❌           |
| `/authentication/login`         | POST   | Login and get JWT                     | ❌           |
| `/user`                         | DELETE | Delete a user by ID                    | ✅           |
| `/user/all`                      | GET    | Retrieve all users                     | ✅           |


## Autenticação

### POST /authentication/register
- **Resumo**: Registra um novo usuário.
- **Descrição**: Esta rota cria um novo usuário no sistema.
- **Tags**: [Authentication]

#### Body (application/json)
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "age": 0,
  "plan_id": 0
}
```


#### Response (application/json)
```json
{
  "user_id": 0
}
```
---
### POST /authentication/login
- **Resumo**: Login de usuário.
- **Descrição**: Esta rota realiza um login de usuário e retorna o token JWT.
- **Tags**: [Authentication]

#### Body (application/json)
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "age": 0,
  "plan_id": 0
}
```


#### Response (application/json)
```json
{
  "token": "any_jwt_token"
}
```
---
### GET /user/all
- **Resumo**: Listagem de usuários.
- **Descrição**: Lista todos os usuários cadastrados no sistema.
- **Tags**: [User]

### Headers

* **Authorization**: Bearer <SEU_TOKEN_JWT>

#### Response (application/json)
```json
[
  {
    "user_id": 0,
    "name": "string",
    "email": "string",
    "password": "string",
    "age": 0,
    "plan_id": 0
  }
]
```
---
### DELETE /user
- **Resumo**: Remover usuário.
- **Descrição**: Remove um usuário da base de dados.
- **Tags**: [User]

### Headers

* **Authorization**: Bearer <SEU_TOKEN_JWT>

#### Body (application/json)
```json
{
  "user_id": 0,
}
```
