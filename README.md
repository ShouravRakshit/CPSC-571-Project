# Project Title
Recommending Movie Actors To Match Role Descriptions

Our team’s research focus is an improvement on existing implementations of Recommendation Systems that make use of free-text user input. The use-case we will be deploying this solution in is recommending actors based on role descriptions, but overall the solution will be capable of being deployed for any recommendation working off of free-text input. The motivation behind this is that with the large number of movies and potential actors it becomes hard to find actors that match role descriptions as finding the best (available) actor from a sea of actors is nearly impossible for a human. With this recommendation system this reduces the need for searching and reviewing just put in the role description and our system will provide a list of acceptable actors that can work in the role description.

## Tech Stack

**Client:** React, Material-UI, HTML, CSS, Vite

**Server:** Django
**Database:** SQLite

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL` - The URL of the backend server.

## Run Locally
Clone the project

```bash
  git clone [https://link-to-project](https://github.com/ShouravRakshit/CPSC-571-Project.git)
```
## Backend Setup
## Setup the virtual environment
   Unix/MacOS:
```bash
    python3 -m env .env
    source env/Scripts/activate
```
 Windows:
```bash
    py -m env env
    env\Scripts\activate.bat
```

## Go to the backend folder
```bash
    cd backend
```

# Install dependencies

```bash
    pip install -r requirements.txt
```

# Database Setup:

```bash
    python manage.py migrate
```

# Create a Superuser: If you want to access Django admin

```bash
    python manage.py createsuperuser
```

# Start the server
```bash
    python manage.py runserver
```

## Client-Side Setup
Make sure you have [Node.js](https://nodejs.org/) installed on your machine. My Node.js version is v21.2.0 and NPM version is 10.5.0. (optional) \n
Go to the client directory and follow these instructions

```bash
   cd frontend
```

# Install Dependencies
```bash
   npm install
```
# Run the Development Server
```bash
   npm run dev
```
Appendix
Any additional information goes here

Authors
Shourav Rakshit Ivan, 
License
MIT

Feedback
If you have any feedback, please reach out to us at shouravivan@gmail.com

