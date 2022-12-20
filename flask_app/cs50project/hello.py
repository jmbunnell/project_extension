#cs50 final project
import os
import sqlite3

from datetime import date
from flask import Flask, flash, redirect, render_template, request, session
from tempfile import mkdtemp


app = Flask(__name__)
@app.route('/')
def hello_world():
    return render_template("layout.html")