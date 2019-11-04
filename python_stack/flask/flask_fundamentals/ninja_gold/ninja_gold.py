# importing flask to run the webserver, and need to play with a bit of data and keep some data between redirects, so we need session, and going to play with form so we need redirect
from flask import Flask, render_template, session, redirect, request
from datetime import datetime # I want to display the date and time on activities
import random
app = Flask(__name__)
app.secret_key = "ninja stalks in the darkness"

# the only page that should render
@app.route('/')
def landing():
    if 'gold' not in session:
        session['gold'] = 0
    if 'activity' not in session:
        session['activity'] = []
    return render_template('index.html', gold = session['gold'], activities = session['activity'])

# the "backend" where we take in the actions and input of the user and the variables in post and work them to display back to the main page, making a "game" out of it
@app.route('/process_money', methods=['post'])
def ninja_gold():
    loc = request.form['location']
    gold = 0
    now = datetime.now()
    day_time = now.strftime("%Y/%m/%d (%I:%M %p)").lower()
    # gold & activity generation engine: 
    if loc == 'farm':
        gold += random.randint(10,20)
        session['gold'] += gold
        session['activity'].append(f"<div class='earn'>Earned {gold} gold from the {loc}! {day_time}</div>")
    elif loc == 'cave':
        gold += random.randint(5,10)
        session['gold'] += gold
        session['activity'].append(f"<div class='earn'>Earned {gold} gold from the {loc}! {day_time}</div>")
    elif loc == 'house':
        gold += random.randint(2,5)
        session['gold'] += gold
        session['activity'].append(f"<div class='earn'>Earned {gold} gold from the {loc}! {day_time}</div>")
    elif loc == 'casino':
        if random.randint(1,2) % 2 == 0:
            gold += random.randint(0,50)
            session['gold'] += gold
            session['activity'].append(f"<div class='earn'>Earned {gold} gold from the {loc}! {day_time}</div>")
        else:
            gold += random.randint(0,50)
            session['gold'] -= gold
            session['activity'].append(f"<div class='lost'>Oops...lost {gold} gold from the {loc}! {day_time}</div>")

            
    if loc == 'reset':
        session['gold'] = 0
        session['activity'] = []

    return redirect('/')




# Need this for every web server to run
if __name__ == '__main__':
    app.run(debug=True)