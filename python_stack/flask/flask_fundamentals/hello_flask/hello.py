from flask import Flask, render_template  # Import Flask to allow us to create our app, render_template is required to have flask display HTML files
app = Flask(__name__)     # Create a new instance of the Flask class called "app"


@app.route('/')           # The "@" decorator associates this route with the function immediately following
def index():
    return render_template('index.html', phrase="hello", times=5) # Formerly returned a string, now it returns the html file index.html

@app.route('/success')    # THe route may need to be declared IMMEDIATELY before the function you want to associate with the route
def success():
    return "success"

@app.route('/hello/<name>') # for a route '/hello/___/' anything after the '/hello/' gets passed as a variable 'name'
def hello(name):
    print(name)
    return "Hello, " + name

@app.route('/users/<username>/<id>') # for a route 'users/___/___', two parameters in the url get passed as username and id
def show_user_profile(username, id):
    print(username)
    print(id)
    return "username: " + username + ", id: " + id

@app.route('/lists')
def render_lists():
    # Soon enough, we'll get data from a database, but for now, we're hard coding data
    student_info = [
        {'name' : 'Michael', 'age' : 35 },
        {'name' : 'John', 'age' : 30 },
        {'name' : 'Mark', 'age' : 25 },
        {'name' : 'KB', 'age' : 27 },
    ]
    return render_template("lists.html", random_numbers = [3,1,5], students = student_info)


# Should be the very last statement (may not need the the IF statement)    
if __name__=="__main__":
    app.run(debug=True)