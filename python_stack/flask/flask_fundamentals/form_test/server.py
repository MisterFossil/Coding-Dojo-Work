from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'keep it secret, keep it safe' # Set a secret key for security purposes

# our index route will handle rendering the form
@app.route('/')
def index():
    return render_template("index.html")

# where the site will go after the user hits the submit button
@app.route('/users', methods=['POST'])
def create_user():
    print("Got POST info")
    print(request.form)
    session['username'] = request.form['name']
    session['useremail'] = request.form['email']
    return redirect("/show")
# added this method to change around redirect to not render a template when the same method has a post request
@app.route('/show')
def show_user():
    return render_template('show.html', name_on_template = session['username'], email_on_template = session['useremail'])

if __name__=="__main__":
    app.run(debug=True)