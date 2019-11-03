from flask import Flask, render_template, request, redirect
app = Flask('__name__')

@app.route('/')
def index():
    return render_template('index.html')

# where the site will go after the user hits submit
@app.route('/result', methods=['POST'])
def results():
    print("Got POST info")
    print(request.form)
    form_dict = request.form
    return render_template('result.html', results = form_dict)








if __name__ == '__main__':
    app.run(debug=True)