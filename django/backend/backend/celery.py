from celery import Celery

app = Celery(
    'backend',
    broker= 'amqp://guest:guest@localhost:5672//'

    
    


)
if __name__ == '__main__':
    app.start()
