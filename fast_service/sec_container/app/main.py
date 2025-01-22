# === Main === # 
# => libs <= # 
from fastapi import FastAPI 


# => app <= # 
app = FastAPI()



# => app routes <= # 
@app.get("/")
async def root():
    return {"message": "Hello World"}

# => health <= # 
@app.get("/health")
def health_check():
    return {"status": "OK"}
