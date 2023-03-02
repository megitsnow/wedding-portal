"""Script to seed database."""

import os
import json
from random import choice, randint
from datetime import datetime
import sys

import crud
import model
import server

os.system("dropdb wedding_portal_database")
os.system("createdb wedding_portal_database")

model.connect_to_db(server.app)
model.db.create_all()

for n in range(10):
    fname = f'user{n}'
    lname = 'test'
    email = f"user{n}@test.com"  
    password = "test"

    user = crud.create_user(fname, lname, email, password)
    model.db.session.add(user)
    
model.db.session.commit()