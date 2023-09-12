from flask import Flask, render_template, request, jsonify
from sklearn.preprocessing import OrdinalEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import pickle
from flask_cors import CORS


app = Flask(__name__)
#CORS(app, origins=["http://localhost:3000"]) # allow request from localhost:3000
CORS(app, resources={r"/prediction": {"origins": "*"}})

@app.route('/', methods=['GET'])
def hello_world():
    return "hello world"


@app.route('/prediction', methods=['POST'])
def predict():
    patientName = request.json['name']
    gender = request.json['gender']
    age =request.json['age']
    hypertension = request.json['hyperTension']
    heartDisease = request.json['heartDisease']
    smoker = request.json['smoker']
    BMI = request.json['BMI']
    HbA1c = request.json['HbA1c']
    glucose = request.json['glucose']

    model = pickle.load(open('/model96.pkl', 'rb'))
    data = [[gender, age, hypertension, heartDisease, smoker, BMI, HbA1c, glucose]]
    result = model.predict(data)
    resultStr = "The model predicted that you might have diabetes. Consult to a doctor for further information" if result == 1 else "The model predicted that you don't have diabetes. Maintain a healthy lifestyle and don't forget to do regular checkup"

    return jsonify({'prediction': "predict"})

if __name__ == '__main__':
    app.run(port=5000, debug = True)