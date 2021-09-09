# DataGrad

Link to the Platform: https://datagrad.netlify.app/

## Vision
With the availability of numerous paid and free resources on the internet, it becomes overwhelming for students to
learn new skills. DataGrad aims to bridge the gap between top MOOCs like Coursera, Udacity, EdX, and students eager to learn new skills. One only has to enter their level and the skill they want to learn, and DataGrad presents the Top 5 relevant courses carefully picked from various sites to them. The application will be beneficial for college students learning new skills, working professionals trying to upskill, 
and women on career breaks to revise concepts before re-joining. 

## Model Description
### User-End:
The model takes the skill the user wants to learn and their level as input and presents the Top 5 relevant courses and medium articles to them as output.

### Recommender System:
A content-based [recommender system](/Recommender&#32;System/Recommender&#32;System.ipynb) built using the Python libraries - [NumPy](https://numpy.org/), [Pandas](https://pandas.pydata.org/), 
and [strsim](https://pypi.org/project/strsim/). The model works on the concept of cosine similarity between the skill 
input by the user and the [database](/Recommender&#32;System/Dataset.csv) cleaned using Microsoft Excel and filtered based on the level of course/ article required. The modular approach makes it easier to deploy the model.

### Website:
Built using [HTML](https://devdocs.io/html/), [CSS](https://devdocs.io/css/), [ReactJS](https://reactjs.org/docs/getting-started.html), and [Bootstrap](https://getbootstrap.com/) on the frontend and 
[Flask](https://flask.palletsprojects.com/en/2.0.x/) on the backend, the website plays a significant role in the UI/UX experience. 
[ParticleJS](https://vincentgarreau.com/particles.js/) is used to add animations that are pleasing to the eye.

## How to Use the Platform?

The Home Page of the Platform showcases DataGrad's Logo and is connected to the Explore, How to Use, Contact, and Team pages.

<img src="https://user-images.githubusercontent.com/74901388/132686148-3725016e-3de7-470a-bc96-58acce67fa39.png" width="600" height="300" alt="Home Page"/>

The How to Use Page presents a manual to use the Platform. The steps are given below:

<img src="https://user-images.githubusercontent.com/74901388/132686227-9edeea45-a9da-4122-91e9-96494a21de01.png" width="650" height="300" alt="How to Use"/>

The Explore Page has two options for Optimization. High Optimization refers to the skills related to which there are many courses in our database.

If the user opts for High Optimization, they have to select the skill they want to learn and their level from the select boxes. In case they have done any previous course related to the skill, they may enter that in order to get similar courses.

<img src="https://user-images.githubusercontent.com/74901388/132686292-0810106e-90a0-42b7-88f2-8c2147a380c0.png" width="600" height="300" alt="Optimization Yes"/>

If the user opts not to go for High Optimization, they have to enter the skill they want to learn and select their level from the select box. 

<img src="https://user-images.githubusercontent.com/74901388/132686362-83850327-618c-4f23-9557-483c97ef14bf.png" width="600" height="300" alt="Optimization No"/>

In either case, when the user selects/enters the options in the relevant fields, the courses are suggested as follows:

<img src="https://user-images.githubusercontent.com/74901388/132686430-85000902-9e50-4ee6-bdb3-08a958aa0de3.png" width="900" height="300" alt="Courses"/>

Behind every card, when the user clicks on the 'Check Out More' option, more courses offered by the University are displayed as follows. The user can toggle back using the 'Back to Course' option.

<img src="https://user-images.githubusercontent.com/74901388/132686468-7b9f601f-2cdf-4fc7-80f1-6d6362fe24d4.png" width="900" height="300" alt="Back of the Card"/>

The Contact Page is for the users to write us their queries. We are still expanding our database, so if the courses recommended do not match one's expectations, we would really appreciate if they send us your query through the contact form and become a part of our family.

<img src="https://user-images.githubusercontent.com/74901388/132686531-7c14e260-7b0a-43ef-84eb-c93911ab77fc.png" width="600" height="300" alt="Contact Page"/>


## TechStack
### For the Machine Learning Model:
***Data Wrangling:***

Microsoft Excel

***Data Manipulation:***

[NumPy](https://numpy.org/) &nbsp; [Pandas](https://pandas.pydata.org/)

***Recommender System:***

[strsim](https://pypi.org/project/strsim/)

### For the Website:

***Front-End:***

[HTML](https://devdocs.io/html/) &nbsp; [CSS](https://devdocs.io/css/) &nbsp; [Bootstrap](https://getbootstrap.com/) &nbsp; [ReactJS](https://reactjs.org/docs/getting-started.html) &nbsp; [ParticleJS](https://vincentgarreau.com/particles.js/)


***Back-End:***

[Flask](https://flask.palletsprojects.com/en/2.0.x/)


## The Team

<img src="https://user-images.githubusercontent.com/74901388/132686589-826b1e7f-4d07-48a0-be77-645355ccf997.png" width="1200" height="320" alt="Contact Page"/>



