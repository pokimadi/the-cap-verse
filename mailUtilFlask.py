from flask import Flask
from flask import renderer_template
from flask import request, jsonify
import smtplib
from email.message import EmailMessage
from email.utils import formataddr
from email.header import Header
from flask import Flask, render_template, request, redirect, session
import cgi

app = Flask(__name__)

@app.route('/send_message', methods=['GET', 'POST'])
def index(
    
):
   # mail = request.args.get('mail')
   # name = request.args.get('name')
   # body = request.args.get('message')
    
    msg = EmailMessage()
    msg['Subject'] = '[JOIN DAOVERSE]'
    msg['From'] = str(Header('{}').format(''))
    msg['To'] = 'akan97@gmail.com'
    msg.set_content('TEST BODY')
    
    # form = cgi.FieldStorage()
    # form.getvalue()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login('testdaosmtpjs@gmail.com', 'txmtxonzsnrirwec')
        smtp.send_message(msg)
    
    return render_template('index.html');
    

if __name__ == '__main__':
    app.run()
    