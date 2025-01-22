# BaseImage
FROM python:3.11-slim 

# Working 
WORKDIR /app 

# Copy the requirements file 
COPY requirements.txt . 

# Install Python dependencies 
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the application code 
COPY . . 

# Expose the application port 
EXPOSE 8001 

# Command to run the app
CMD ["gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "app.main:app", "--bind" , "0.0.0.0:8001"]




