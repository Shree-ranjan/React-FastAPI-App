from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import new_data


class Patients(BaseModel):
    id: int
    name: str
    age: int | None = None
    gender: str | None = None


class Vaccines(BaseModel):
    id: int
    name: str
    manufacture: str | None = None


class Centers(BaseModel):
    id: int
    name: str
    location: str | None = None


app = FastAPI()


origins = ["*", "localhost:5173", "localhost:5174"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/patients")
async def get_patients():
    return new_data.patients


@app.get("/patients/{id}")
async def get_patients_id(id):
    return dict(new_data.patients[int(id)-1])


@app.get("/vaccines")
async def get_vaccines():
    return new_data.vaccines


@app.get("/vaccines/{id}")
async def get_vaccines_id(id):
    return dict(new_data.vaccines[int(id)-1])


@app.get("/centers")
async def get_centers():
    return new_data.centers


@app.get("/centers/{id}")
async def get_centers_id(id):
    return dict(new_data.centers[int(id)-1])


@app.post("/new_patient")
async def add_patient(patient: Patients):
    patient_dict = dict(patient)
    return patient_dict


@app.post("/new_vaccine")
async def add_vaccine(vaccine: Vaccines):
    vaccine_dict = dict(vaccine)
    return vaccine_dict


@app.post("/new_center")
async def add_center(center: Centers):
    center_dict = dict(center)
    return center_dict


@app.put("/put_patient/{id}")
async def put_patient(patient: Patients):
    result = {**dict(patient)}
    return result
