import smtplib
    from email.message import EmailMessage
    from email.utils import formataddr
    from email.header import Header
    from flask import Flask, render_template
    import cgi
    
    
def sendEmailF(

):

    msg = EmailMessage()
    msg['Subject'] = '[Daovers \'JOIN US\' form]'
    msg['From'] = str(Header('Name Surname'))
    msg['To'] = 'akan97@gmail.com'
    msg.set_content('TEST BODY')

    form = cgi.FieldStorage()
    se = form.getvalue()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login('testdaosmtpjs@gmail.com', 'txmtxonzsnrirwec')
        smtp.send_message(msg)

    print("sent")

if __name__ == '__main__':
    sendEmail()