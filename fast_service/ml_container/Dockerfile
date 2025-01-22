# Base Image 
FROM python:3.11-slim 

# Set the working directory 
WORKDIR /app 

# Copy the requirements file 
COPY requirements.txt . 

# Install Python dependencies 
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the application code 
COPY . . 

# Expose the application port 
EXPOSE 8002 

# Command to run the app 
CMD ["gunicorn", "-w", "4", "-k", "uvicorn.workers.UvicornWorker", "app.main:app", "--bind", "0.0.0.0:8002"]


