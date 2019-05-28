---
id: 347
title: Working With Arrays or Lists In MongoDB
date: 2016-10-14T05:45:22+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=347
permalink: /2016/10/14/working-arrays-lists-mongodb/
image: /wp-content/uploads/2015/12/mongodb-logo-rgb.jpeg
categories:
  - Code
  - Content
tags:
  - array
  - list
  - mongo
  - mongodb
---
In a [stackoverflow question](http://stackoverflow.com/questions/35103991/insert-new-documents-or-modify-an-array-field-of-existing-document/35110596#35110596) regarding working with arrays in mongodb documents I replied with the below. I am writing this as a mongodb 101 hoping it may helpful to someone out there. So assuming you want to add values in a an array only if they do not exist as well as create new documents with arrays in them. Okay there is a way in mongodb which I will mention in this reply. I think you should know few commands first that will help you achieve similar result (again there is a simple way just read on)

<!--more-->

Let me start with the first part:

to **update** an element in an array you use dot notation to the index example:

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">collection_name&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="str">"_id"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="pln"> id&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">'$set'&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">"array_name.indexNumber"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="pln"> value&lt;/span>&lt;span class="pun">}})&lt;/span></code></pre>

say we have the following document in collection name _cars_

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">findOne&lt;/span>&lt;span class="pun">():&lt;/span>
&lt;span class="pun">{&lt;/span>&lt;span class="pln">
 _id&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="lit">1&lt;/span>&lt;span class="pln">
 name&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="typ">EvolutionX&lt;/span>&lt;span class="pln">
 brand&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="typ">Mitsubishi&lt;/span>&lt;span class="pln">
 year&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="lit">2012&lt;/span>&lt;span class="pln">
 mods&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="pun">[&lt;/span>&lt;span class="pln"> turbo&lt;/span>&lt;span class="pun">,&lt;/span>&lt;span class="pln"> headlights &lt;/span>&lt;span class="pun">]&lt;/span> 
&lt;span class="pun">}&lt;/span></code></pre>

Say in the above example we want to update _headlights_ with _rearlights_ we do the following (using mongoshell you can drop quotes in key names, **Not** when using the array index though):

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="pln">id&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">1&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="pln">$set&lt;/span>&lt;span class="pun">:{&lt;/span>&lt;span class="str">"mods.1"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"rearlights"&lt;/span>&lt;span class="pun">}})&lt;/span></code></pre>

_1_ is the index to headlights.

**Note** and **be careful** here that if you did not use index inside of an array like

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="pln">id&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">1&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="pln">$set&lt;/span>&lt;span class="pun">:{&lt;/span>&lt;span class="str">"mods"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"rearlights"&lt;/span>&lt;span class="pun">}})&lt;/span></code></pre>

this will overwrite the existing document __id:1_ and it will lose all other attributes or fields inside the document so it will result in the follow:

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">findOne&lt;/span>&lt;span class="pun">():&lt;/span>
&lt;span class="pun">{&lt;/span>&lt;span class="pln">
 _id&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="lit">1&lt;/span>&lt;span class="pln">
 mods&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="pun">[&lt;/span>&lt;span class="pln"> rearlights &lt;/span>&lt;span class="pun">]&lt;/span> 
&lt;span class="pun">}&lt;/span></code></pre>

Now, say we want to add an element _tires_ to _mods_ array you can use **$push** as:

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">collection_name&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="str">"_id"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="pln"> id&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">'$push'&lt;/span>&lt;span class="pun">:&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">"array_name"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="pln"> value&lt;/span>&lt;span class="pun">}})&lt;/span></code></pre>

so it will be

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="str">"_id"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">1&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">"$push"&lt;/span>&lt;span class="pun">:{&lt;/span>&lt;span class="str">"mods"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"tires"&lt;/span>&lt;span class="pun">}})&lt;/span></code></pre>

now say instead of updating _mods_ array you want to remove &#8220;_headlights_&#8220;. In this case you use **$pop**

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="str">"_id"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">1&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">"$pop"&lt;/span>&lt;span class="pun">:{&lt;/span>&lt;span class="str">"mods"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"headlights"&lt;/span>&lt;span class="pun">}})&lt;/span></code></pre>

Now with that in mind. **The easy way**: in mongodb to add to array only if element does not exist you can use **$addToSet**. I love this operator because it will only add to array if the element does not exist. Here is how to use it:

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="str">"_id"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">1&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">"$addToSet"&lt;/span>&lt;span class="pun">:{&lt;/span>&lt;span class="str">"mods"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"headlights"&lt;/span>&lt;span class="pun">}})&lt;/span></code></pre>

Now if _headlights_ is in the array it will not be added, else it will be added to the end of array.

Okay that is the first part of the question. The second part which is initializing a document with an array. Okay there are two thoughts here: the first is you do not have to. using the **addToSet** you can create the array if it does not exist as (assuming __id 2_ exist but **without** _mods_ array):

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="str">"_id"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">2&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">"$addToSet"&lt;/span>&lt;span class="pun">:{&lt;/span>&lt;span class="str">"mods"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"bonnet"&lt;/span>&lt;span class="pun">}})&lt;/span></code></pre>

This will create the array if document **_id:2 exist**. Assuming __id:3_ does not exist you will have plug in a third attribute called **upsert**

<pre class="lang-js prettyprint prettyprinted"><code>&lt;span class="pln">db&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">cars&lt;/span>&lt;span class="pun">.&lt;/span>&lt;span class="pln">update&lt;/span>&lt;span class="pun">({&lt;/span>&lt;span class="str">"_id"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="lit">3&lt;/span>&lt;span class="pun">},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="str">"$addToSet"&lt;/span>&lt;span class="pun">:{&lt;/span>&lt;span class="str">"mods"&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="str">"headlights"&lt;/span>&lt;span class="pun">}},&lt;/span> &lt;span class="pun">{&lt;/span>&lt;span class="pln">upsert&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="kwd">true&lt;/span>&lt;span class="pun">})&lt;/span></code></pre>

this will create a third document with array _mods_ with _headlights_ inside of it and __id:3_. Note though **no other** attributes will be added only the __id_ and _mods_ array

the second thought is when you insert a new document you insert it with empty _mods_ array as _mod:[]_ I hope that helps