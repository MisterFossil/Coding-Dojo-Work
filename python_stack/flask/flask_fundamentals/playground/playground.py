# need this for every flask usage
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/') 
def index():
    return render_template('index.html', repeat=0, color='lightblue')

@app.route('/play')
def gettingStarted():
    return render_template('index.html',repeat=3, color='lightblue')

@app.route('/play/<num>')
def xBoxes(num):
    return render_template('index.html',repeat=int(num), color='lightblue')

@app.route('/play/<num>/<color>')
def xColorBoxes(num, color):
    return render_template('index.html',repeat=int(num), color=color)








if __name__ == '__main__':
    app.run(debug=True)