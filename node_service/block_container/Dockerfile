#Base Image 
FROM node:16-slim

# Set Working directory 
WORKDIR /app 

# Copy package.json 
COPY package*.json ./

# Install dependencies 
RUN npm install 


# Copy the app files 
COPY ./app ./app

# Expose the port 
EXPOSE 3001 

# Command to run the application 
CMD ["node", "app/app.js"]

