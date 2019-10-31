from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', x=8, y=8)

@app.route('/<int:ynum>')
def showY(ynum):
    return render_template('index.html', x=8, y=ynum)

@app.route('/<int:ynum>/<int:xnum>')
def showXY(ynum, xnum):
    return render_template('index.html', x=xnum, y=ynum)





if __name__ == '__main__':
    app.run(debug=True)