---
id: 9
title: CSS Text Rotation
date: 2013-06-26T18:59:31+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://medinanet.org/ibrahimokdad/?p=9
permalink: /2013/06/26/css-text-rotation/
categories:
  - Code
tags:
  - css
  - rotation
  - text
  - trick
---
This is a neat simple trick from a2zwebhelp.com. I found out about the site from a twitter connection user:@silverlight513

.CSS Code:

<pre>.myDate{
    width: 100px;
    height: 100px;
    display: block;
    border: 1px solid #ccc;
    font-family: verdana, Arial;
    background-color: #FAFAFA;
}
.day{
    width: 70px;
    height:50px;
    display: block;
    float: left;
    color: #777;
    font-size: 45px;
    font-weight: bold;
}
.month{
    width: 70px;
    height:50px;
    display: block;
    float: left;
    color: #666;
    font-size: 40px; 
}

.year{
    width:30px;
    height: 52;
    display:block;
    float: left;
    -webkit-transform: rotate(-90deg); 
    -moz-transform: rotate(-90deg); 
    color: #333333;
    font-size: 31px;
    margin-top: 3px;
    font-weight: bold;
}</pre>

.Html

<pre>&lt;div class="myDate"&gt;
  &lt;span&gt;31&lt;/span&gt; 
  &lt;span&gt;Jul&lt;/span&gt; 
  &lt;span&gt;2013&lt;/span&gt;
&lt;/div&gt;</pre>

Here is the link -you can see the output reflected nicely

<http://www.a2zwebhelp.com/css-sample-code>