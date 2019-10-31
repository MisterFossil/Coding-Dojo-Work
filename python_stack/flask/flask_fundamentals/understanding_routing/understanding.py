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

@app.route('/repeat/<int:num>/<repStr>')
def repeat(num, repStr):
    repeatThis = repStr * int(num) 
    return repeatThis

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
# OR @app.errorhandler(error num code goes here)
# Error Codes:
# 404 - Not Found
# 403 - Forbidden
# 410 - Gone
# 500 - Internal Server Error
def wrongPage(path):
    return "Sorry! No response. Try again"


# Forgot this the first time
if __name__=="__main__":
    app.run(debug=True)