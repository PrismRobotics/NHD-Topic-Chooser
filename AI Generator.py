import google.generativeai as genai
from browser import document


API = "AIzaSyDABPIwb1sMDdqm4r11_a_LCkRuFtvZHxk"

genai.configure(api_key=API) # Tells gen AI which API to use
model = genai.GenerativeModel('gemini-pro') # Assigns which model is in use and names it model
chat = model.start_chat(history=[])
response = chat.send_message("You are a personal digital assistant, built into a pair of smart glasses. Your name is SPECTRUM. You are a little bit like JARVIS from Iron Man. You are kind and friendly. Please say hello in a kind, creative, and short way. Come up with something new every time. Do not say anything else.")

document <= response.text