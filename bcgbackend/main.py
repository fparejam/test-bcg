import logging
from typing import List
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configuración de registro
logging.basicConfig(level=logging.DEBUG)

# Configuración CORS
origins = ["http://localhost:3000", "http://localhost:8000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Datos hardcoded
data = [
    {"id": 1, "nombre": "Juan", "apellido": "Pérez", "email": "juan@ejemplo.com"},
    {"id": 2, "nombre": "María", "apellido": "García", "email": "maria@ejemplo.com"},
    {"id": 3, "nombre": "Pedro", "apellido": "Jiménez", "email": "pedro@ejemplo.com"}
]

# Endpoint GET para obtener los datos
@app.get("/api/data")
def read_data() -> List:
    logging.debug("GET /api/data")
    return data

# Endpoint PUT para actualizar un dato específico
@app.put("/api/data/{data_id}")
def update_data(data_id: int, request_body: dict):
    logging.debug(f"PUT request body: {request_body}")
    logging.debug(f"PUT /api/data/{data_id}")
    for d in data:
        if d["id"] == data_id:
            d["nombre"] = request_body["nombre"]
            d["apellido"] = request_body["apellido"]
            d["email"] = request_body["email"]
            return {"message": f"Objeto con id {data_id} actualizado correctamente"}
    return {"message": f"No se encontró un objeto con id {data_id}"}
