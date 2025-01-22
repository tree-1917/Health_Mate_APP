FROM nginx:latest

# Copy static files
COPY ./ui_service/* /usr/share/nginx/html

# Copy the Nginx configuration
COPY ./nginx.conf /etc/nginx/nginx.conf

