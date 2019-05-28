---
id: 307
title: From SELECT in SQL to find() command in mongodb (NOSQL)
date: 2016-01-26T08:34:56+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=307
permalink: /2016/01/26/from-select-in-sql-to-find-command-in-mongodb-nosql/
image: /wp-content/uploads/2015/12/mongodb-logo-rgb.jpeg
categories:
  - Code
  - Content
tags:
  - find
  - mongodb
  - select
---
In one of the questions in stackoverflow about understanding the mongodb select query (find command in mongodb) I replied with the content below. The reason I am posting this here is to document it for other users who might need this piece of information.

Note: Consider the version you are running. Since the latest version has new features and functions.

To verify pymongo version you are using execute the following:

<pre class="lang-py prettyprint prettyprinted"><code>&lt;span class="kwd">import&lt;/span>&lt;span class="pln"> pymongo
pymongo&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">version&lt;/span></code></pre>

Now. Regarding the select query you asked for. As far as I can tell the code you presented is fine. Here is the select structure in mongodb.

First off it is called **find()**.

In pymongo; if you want to select specific rows( **not** really **rows** in mongodb they are called documents. I am saying rows to make it easy to understand. I am assuming you are comparing mongodb to SQL); alright so If you want to select specific document from the table (called **collection**in mongodb) use the following structure (I will use **random** as collection name; also assuming that the random table has the following attributes: **age:10, type:ninja, class:black, level:1903**):

`db.random.find({ "age":"10" })` This will return all documents that have age 10 in them.

you could add more conditions simply by separating with **commas**

`db.random.find({ "age":"10", "type":"ninja" })` This will select all data with age 10 and type ninja.

if you want to get all data just leave empty as:

<pre class="lang-py prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">random&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">find&lt;/span>&lt;span class="pun">({})&lt;/span></code></pre>

Now the previous examples display everything (age, type, class, level and _id). If you want to display**specific** attributes say only the age you will have to add another argument to find called **projection**

eg: (1 is show, 0 is do not show):

<pre class="lang-py prettyprint prettyprinted"><code>&lt;span class="pun">{&lt;/span>&lt;span class="str">'age'&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">1&lt;/span>&lt;span class="pun">}&lt;/span> </code></pre>

Note here that this returns **age** as well as **_id**. _id is always returned by default. You have to explicitly tell it not to returning it as:

<pre class="lang-py prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">random&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">find&lt;/span>&lt;span class="pun">({&lt;/span> &lt;span class="str">"age"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"10"&lt;/span>&lt;span class="pun">,&lt;/span> &lt;span class="str">"name"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"ninja"&lt;/span>  &lt;span class="pun">},&lt;/span>  &lt;span class="pun">{&lt;/span>&lt;span class="str">"age"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">1&lt;/span>&lt;span class="pun">,&lt;/span> &lt;span class="str">"_id"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">0&lt;/span>&lt;span class="pun">}&lt;/span> &lt;span class="pun">)&lt;/span></code></pre>

I hope that could get you started. Take a look at the documentation is very thorough.