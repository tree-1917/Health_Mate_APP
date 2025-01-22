# === Main === # 
# => libs <= # 
from fastapi import FastAPI 


# => app <= # 
app = FastAPI()



# => app routes <= # 
@app.get("/")
async def root():
    return {"message": "Hello World"}
