# === Main === # 
# => lib <= # 
from fastapi import FastAPI

# => app <= # 
app = FastAPI() 


# => app routes <= # 
@app.get("/")
async def root(): 
    return {"Version": "ML0.0"}


# => health <= # 
@app.get("/health")
def health_check():
    return {"status": "OK"}
