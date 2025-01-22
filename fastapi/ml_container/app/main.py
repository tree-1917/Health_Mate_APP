# === Main === # 
# => lib <= # 
from fastapi import FastAPI

# => app <= # 
app = FastAPI() 


# => app routes <= # 
@app.get("/")
async def root(): 
    return {"Version": "ML0.0"}
