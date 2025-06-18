from twilio.rest import Client
from decouple import config

def sending_sms(phone_num,otp):

    account_sid = config('account_sid')

    auth_token = config('auth_token')

    client = Client(account_sid, auth_token)

    message = client.messages.create(
        from_='+16166916629',
        to=f'{phone_num}',
        body=f'Your OTP for verification is {otp}'
        )

