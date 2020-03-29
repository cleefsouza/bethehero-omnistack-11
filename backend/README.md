# backend

#### DEPENDÊNCIAS

```json
{
  "cors": "^2.8.5",
  "express": "^4.17.1",
  "knex": "^0.20.13",
  "sqlite3": "^4.1.1",
  "nodemon": "^2.0.2"
}
```

#### ROTAS

###### SESSIONS

```http
POST /sessions HTTP/1.1
Content-Type: application/json
Host: localhost:3333
Content-Length: 22

{
	"id" : "5255cd18"
}
```

###### PERFIL

```http
GET /perfil HTTP/1.1
Authorization: 5255cd18
Host: localhost:3333
```

###### CASOS

```http
GET /casos?page=1 HTTP/1.1
Host: localhost:3333
```

```http
POST /casos HTTP/1.1
Content-Type: application/json
Authorization: 5255cd18
Host: localhost:3333
Content-Length: 70

{
	"titulo": "Caso 1",
	"descricao": "Lorem ipsum ...",
	"valor": 25
}
```

```http
DELETE /casos/2 HTTP/1.1
Authorization: 5255cd18
Host: localhost:3333
```

###### ONGS

```http
GET /ongs HTTP/1.1
Host: localhost:3333
```

```http
POST /ongs HTTP/1.1
Content-Type: application/json
Host: localhost:3333
Content-Length: 115

{
	"nome": "APAD",
	"email": "contato@apad.com.br",
	"whatsapp": "47000000",
	"cidade": "Rio do Sul",
	"uf": "SC"
}
```
