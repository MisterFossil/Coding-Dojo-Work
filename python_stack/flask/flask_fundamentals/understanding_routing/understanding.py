from flask import Flask
app = Flask(__name__)

# display "Hello World" when localhost:5000/ is...invoked? started? its the landing page, so hopefully this will display by default
@app.route('/')
def hello_world():
    return 'Hello World!'

# display "Dojo!" when at address localhost:5000/dojo
@app.route('/dojo')
def disp_dojo():
    return 'Dojo!'

# create 1 URL pattern and function that can handle a few examples
@app.route('/say/<name>')
def disp_name(name):
    nameStr = 'Hi ' + name.title() + "!"
    return nameStr

@app.route('/repeat/<num>/<repStr>')
def repeat(num, repStr):
    repeatThis = repStr * int(num) 
    return repeatThis


# Forgot this the first time
app.run(debug=True)