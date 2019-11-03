from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'this is the secret key for counter'


# landing page/index
@app.route('/')
def counter():
    print(session)
    if 'actual_count' in session:
        session['actual_count'] += 1
    else:
        print(session)
        session['actual_count'] = 1

    if 'count' in session:
        print('key exists!')
        session['count'] += 1
        print(session)
    else:
        print("key 'count' does NOT exist")
        session['count'] = 1
        print(session)
    return render_template('index.html',counter=session['count'], actual=session['actual_count'])

@app.route('/destroy_session', methods=['post'])
def destroy():
    session.pop('count')
    return redirect('/')

@app.route('/plus2', methods=['post'])
def plus2():
    session['count'] += 1
    return redirect('/')

@app.route('/incX', methods=['post'])
def incX():
    print(request.form)
    count = request.form['howmuch']
    session['count'] += int(count) -1    
    return redirect('/')

# Last Sensei bonus
# >>> base64.urlsafe_b64decode('eyJhY3R1YWxfY291bnQiOjQsImNvdW50Ijo2fQ===')
# b'{"actual_count":4,"count":6}'
# >>> 



# must have for every application
if __name__ == '__main__':
    app.run(debug=True)