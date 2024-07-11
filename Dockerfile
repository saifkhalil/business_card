# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /usr/src/backend

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3-pip python3-dev weasyprint build-essential \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY requirements.txt /usr/src/backend/
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /usr/src/app
COPY . /usr/src/backend/

# Expose port 8090 to the host
EXPOSE 8090

# Command to run the application
CMD ["gunicorn", "--workers=3", "--bind=0.0.0.0:8090", "core.wsgi:application"]
