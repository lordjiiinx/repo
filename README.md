# docked
The project requires one to have a docker desktop debian distribution installed. 
Run docker compose up --watch and ensure you are in the directory where compose yaml file is (www folder).
Once the containers are running please execute the following commands in the terminal :
                         .docker exec -it www-backend-1 /bin/bash
                         .python3 manage.py migrate
                         .python3 manage.py createsuperuser
Create a super user then use the credentials(email password) to login to the admin site. The admin site url is localhost/api/admin/
Create a new application with the following settings:

                                   Setting Up a New Application
To begin, navigate to the Django admin panel and create a new application with the following configuration:
Leave the client_id and client_secret fields unchanged.
Set the user field to your superuser.
Leave the redirect_uris field blank.
Set the client_type field to confidential.
Set the authorization_grant_type field to ‘Resource owner password-based’.
Optionally, you can set the name field to a name of your choice.
In your new application, you will see a Hash client secret checkbox. Do not select that checkbox as the client secret will be hashed and I have not yet worked on a fix for that. It turns out that when hashed, the convert-token response is invalid.

Copy and paste the client id and secret to the client id and secret parameters of the fetch function of the auth/page.js screen in the front folder and the application will be good to go.
