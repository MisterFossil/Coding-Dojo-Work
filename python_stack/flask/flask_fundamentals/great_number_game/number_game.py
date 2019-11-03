from flask import Flask, render_template, redirect, request, session
import random
app = Flask(__name__)
app.secret_key = "I'm a lumberjack"

@app.route('/')
def numberGame():
    if 'number' not in session:
        session['number'] = random.randint(1,20)
    else:
        pass

    if 'numGuesses' not in session:
        session['numGuesses'] = 0

    if 'win' not in session:
        session['win'] = False

    if session['win']:
        session['win'] = False
        guesses = session['numGuesses']
        session['numGuesses'] = 0

    return render_template('index.html', result = session['result'], numGuess = guesses)

@app.route('/guess', methods=['post'])
def guess():
    print(session)
    print(request.form)
    session['guess'] = int(request.form['guess'])
    if session['guess'] == session['number']:
        print('You win!')
        session['result'] = "You win!"
        session.pop('number')
        session['win'] = True
    elif session['guess'] > session['number']:
        print('Too high')
        session['result'] = 'Too high'
    elif session['guess'] < session['number']:
        print('Too low')
        session['result'] = 'Too low'

    session['numGuesses'] += 1

    return redirect('/')



# Need this to run the web server
if __name__=='__main__':
    app.run(debug=True)