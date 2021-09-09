import pandas as pd
from sklearn import neighbors, datasets
from numpy.random import permutation
import matplotlib.pyplot as plt
import numpy as np
import string
from sklearn import svm
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_recall_fscore_support
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from similarity.cosine import Cosine
import random
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request, make_response, jsonify
import itertools
import re
from flask import send_from_directory
import os

pd.set_option('display.max_colwidth', None)





app = Flask(__name__)
CORS(app)


def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response


def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


def course_difficulty(level, df):
    data = df.copy().loc[df['Difficulty Level'] == level]
    data['index'] = np.arange(0, data.shape[0])
    return data


def remove_punctuations(text):
    text = str(text)
    for punctuation in string.punctuation:
        text = text.replace(punctuation, '')
    return text


def recommender_course(name):
    cosine = Cosine(2)
    df["name"] = name
    df["p0"] = df["name"].apply(lambda s: cosine.get_profile(s))
    df["p1"] = (df["Course Name"]).apply(lambda s: cosine.get_profile(s))
    df["cosine_sim"] = [cosine.similarity_profiles(
        p0, p1) for p0, p1 in zip(df["p0"], df["p1"])]
    df.drop(["p0", "p1"], axis=1, inplace=True)
    return df


def recommender_system(skill, data):
    cosine = Cosine(2)
    data["skill"] = skill
    data["p0"] = data["skill"].apply(lambda s: cosine.get_profile(s))
    data["p1"] = data["new_column"].apply(lambda s: cosine.get_profile(s))
    data["cosine_sim2"] = [cosine.similarity_profiles(
        p0, p1) for p0, p1 in zip(data["p0"], data["p1"])]
    data.drop(["p0", "p1"], axis=1, inplace=True)
    return data


def medium_recommender_system(skill, medium):
    cosine = Cosine(2)
    medium["skill_provided"] = skill
    medium["p0"] = medium["skill_provided"].apply(
        lambda s: cosine.get_profile(s))
    medium["p1"] = medium["Skills"].apply(lambda s: cosine.get_profile(s))
    medium["cosine_sim"] = [cosine.similarity_profiles(
        p0, p1) for p0, p1 in zip(medium["p0"], medium["p1"])]
    medium.drop(["p0", "p1"], axis=1, inplace=True)
    return medium


def more_courses_from_university(data, df):
    for i in range(5):
        university = data.iloc[i, 1]
        for j in range(12, 15, 1):
            course = str(df.loc[df['University / Industry Partner Name']
                         == university, 'Course Name'].sample())
            if((data.iloc[i, 0] == course) and (course.strip() != '')):
                j = j-1
                continue
            course = course[(
                re.search(r'(\d)[^\d]*$', course).start()+1):course.find('Name:')]
            course = course.strip()
            j = j+3
            link = str((df.loc[((df['Course Name'] == course) & (
                df['University / Industry Partner Name'] == university)), 'Course URL']))
            link = link[link.find('http'):link.find('Name:')]
            link = link.strip()
            if ('http' not in link):
                j = j-4
                continue
            data.iloc[i, j-3] = course
            data.iloc[i, j] = link


@app.route('/', methods=['GET'])
def hello():
    return jsonify({"response": "This is DataGrad Backend"})

@app.route('/favicon.ico') 
def favicon(): 
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  response.headers.add('Access-Control-Allow-Credentials', 'true')
  return response

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():

    if request.method == 'POST':

        user = request.get_json(force=True)

        skill = user['skill']
        level = user['level']
        ctr = user['ctr']

        

        df = pd.read_csv(
            "https://raw.githubusercontent.com/DataGradOrg/DataGrad/main/Recommender%20System/data.csv", encoding='cp1252')

        if(ctr == True):
            final = recommender_course(skill)
            final = final.sort_values('cosine_sim', ascending=False)
            df = final[0:1000]
            data = course_difficulty(level, df)
            data['final'] = data['all_skill'] + \
                data['Course Description'] + data['Course Name']
            data['new_column'] = data['final'].apply(remove_punctuations)
            final = recommender_system(skill, data)
            data = data.sort_values('cosine_sim2', ascending=False)
            data = data[0:8].sample(n=5)

            data['Course 1'] = ""
            data['Course 2'] = ""
            data['Course 3'] = ""
            data['Course 1 Link'] = ""
            data['Course 2 Link'] = ""
            data['Course 3 Link'] = ""

            more_courses_from_university(data, df)

        else:

            data = course_difficulty(level, df)
            data['final'] = data['all_skill'] + \
                data['Course Description'] + data['Course Name']
            data['new_column'] = data['final'].apply(remove_punctuations)
            final = recommender_system(skill, data)
            data = data.sort_values('cosine_sim2', ascending=False)

            data = data[0:8].sample(n=5)

            data['Course 1'] = ""
            data['Course 2'] = ""
            data['Course 3'] = ""
            data['Course 1 Link'] = ""
            data['Course 2 Link'] = ""
            data['Course 3 Link'] = ""

            more_courses_from_university(data, df)

        courses = list(data[0:5]['Course Name'])
        courses_links = list(data[0:5]['Course URL'])
        courses_levels = list(data[0:5]['Difficulty Level'])
        courses_orgs = list(data[0:5]['University / Industry Partner Name'])
        courses_desc = list(data[0:5]['Course Description'])
        courses_ratings = list(data[0:5]['Course Rating'])
        courses_skill_gained = list(data[0:5]['all_skill'])

        course_1 = list(data[0:5]['Course 1'])
        course_2 = list(data[0:5]['Course 2'])
        course_3 = list(data[0:5]['Course 3'])

        course_1_links = list(data[0:5]['Course 1 Link'])
        course_2_links = list(data[0:5]['Course 2 Link'])
        course_3_links = list(data[0:5]['Course 3 Link'])




        final = []

        one = list(itertools.chain(courses, courses_links))
        two = list(itertools.chain(courses_levels, courses_orgs))
        three = list(itertools.chain(courses_desc, courses_ratings))
        four = list(itertools.chain(courses_skill_gained, course_1))
        five = list(itertools.chain(course_2, course_3))
        six = list(itertools.chain(course_1_links, course_2_links))

        l1 = list(itertools.chain(one, two))
        l2 = list(itertools.chain(three, four))
        l3 = list(itertools.chain(five, six))
        l4 = list(itertools.chain(l1, l2))

        l5 = list(itertools.chain(l3, l4))

        final = list(itertools.chain(l5, course_3_links))

        return (jsonify(final))


if __name__ == "_main_":
    app.run(debug=True)