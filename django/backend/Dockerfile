FROM python:latest
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY requirements.txt /backend/requirements.txt
RUN apt-get update
RUN pip install -r requirements.txt

COPY . .
