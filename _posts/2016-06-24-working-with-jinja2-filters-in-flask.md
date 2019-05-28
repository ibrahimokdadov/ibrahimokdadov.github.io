---
id: 338
title: Working with Jinja2 Filters in Flask
date: 2016-06-24T11:05:56+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=338
permalink: /2016/06/24/working-with-jinja2-filters-in-flask/
image: /wp-content/uploads/2016/06/jinja2.png
categories:
  - Code
  - Content
tags:
  - flask
  - jinja2
  - python
  - template filters
---
Jinja is a template engine used with python the lastest as of the day of this post is jinja2. It is very friendly and very handy. One of its features is the filters.

Filters are basically used to modify variables in Jinja.  Let us assume you have a flask application called _application_. In it there is _app.py_ and _templates_ folder that contains _index.html_ as:

<span style="color: #008000;"><code>application&lt;br />
|_app.py&lt;br />
|_templates</code></span>  
 <span style="color: #008000;"><code>    |_index.html</code></span>

In _app.py_ you have the following:

<span style="color: #993300;"><code>from flask import Flask, render_template&lt;br />
__author__ = 'ibininja'&lt;br />
app = Flask(__name__)</code></span>

<span style="color: #993300;"><code>@app.route('/')&lt;br />
def index():&lt;br />
return render_template("index.html", name="ibrahim")</code></span>

<span style="color: #993300;"><code>if __name__ == "__main__":&lt;br />
app.run(port=5555, debug=True)</code></span>

In _index.html_ you have:

<span style="color: #993300;"><code>&lt;code>&lt;!DOCTYPE html&gt;&lt;br />
&lt;html lang="en"&gt;&lt;br />
&lt;head&gt;&lt;br />
&lt;meta charset="UTF-8"&gt;&lt;br />
&lt;title&gt;Title&lt;/title&gt;&lt;br />
&lt;/head&gt;&lt;br />
&lt;body&gt;&lt;br />
&lt;h1&gt; {{name}}&lt;/h1&gt;&lt;br />
This is a sample page&lt;br />
&lt;/body&gt;&lt;br />
&lt;/html&gt;</code></code></span>``

You will see that in _index.html_ the _<h1>_ tag contains _{{name}}_. That is the way a variable is displayed in jinja2.

The way you would use a variable is using the {{ variable_name }}. To modify it you add the pipe symbol : &#8220;_|_&#8221; followed by the _filter name_. The _filter name_ can either be one of the built-ins or a custom one. Follow the video below on how that can be done: