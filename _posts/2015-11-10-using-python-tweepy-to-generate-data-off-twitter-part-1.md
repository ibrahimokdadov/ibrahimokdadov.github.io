---
id: 262
title: Using python (tweepy) to generate data off Twitter Part 1
date: 2015-11-10T11:50:57+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=262
permalink: /2015/11/10/using-python-tweepy-to-generate-data-off-twitter-part-1/
image: /wp-content/uploads/2015/11/power-plant.jpg
categories:
  - Code
  - Content
tags:
  - data generation
  - python
  - tweepy
  - twitter
---
So far we started creating our own scripts to process a given document. In the [previous post](http://ibrahimokdad.com/2015/11/02/playing-with-data-words-count/) the script we created basically scans through a given document and calculates the frequency of each word in that given document. That is to analyze and study the trending posts and the likes; to understand and learn what works and what not and what kind of language is highly perceived by the audience.

Today We will look into gathering or generating data to work on. We will be using social media. Precisely Twitter.  
We will be using python to crawl some tweets which we will study later on. (this will be left for future posts).  
Gathering tweets will be done in steps, in this first part we will retrieve our own timeline.

<!--more-->

To gather tweets there are some requirements that has to be sufficed; starting with:  
&#8211; You have a twitter account.  
&#8211; You have python installed (I will be demonstrating using Python 3.4).  
&#8211; Internet connection.  
&#8211; Most importantly is a happy face.

So take your time and get those things ready.

I believe you are all set now.  
&#8211; Now to access Twitter we need to use their API and there are many ready libraries or Wrappers for python that takes care of connecting and communicating with Twitter&#8217;s API, the best *at least for me is called **[Tweepy](https://github.com/tweepy/tweepy)** there is also [twitter1.-](https://pypi.python.org/pypi/twitter) in the Python Package Index.

Let us go ahead and install **tweepy**:

Installation:

Open CMD and navigate to python&#8217;s folder

<pre>c:\Python34\Scripts&gt;</pre>

and type in

<pre>pip3.4.exe install tweepy.</pre>

That is all. To confirm all is running; just start the python 3.4 shell and type:

<pre>import tweepy</pre>

if no errors show you are good to go. Here is how it shows:  
[<img class="alignnone wp-image-264 size-full" src="http://ibrahimokdad.com/wp-content/uploads/2015/11/Verify_Tweepy.png" alt="Tweepy installation verified screen shot" width="676" height="343" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/11/Verify_Tweepy.png 676w, http://ibrahimokdad.site/wp-content/uploads/2015/11/Verify_Tweepy-300x152.png 300w" sizes="(max-width: 676px) 100vw, 676px" />](http://ibrahimokdad.com/wp-content/uploads/2015/11/Verify_Tweepy.png)

With that out of the way. We need to head to twitter developer area and create an app to obtain tokens and keys.

navigate to [Twitter&#8217;s application manager](https://apps.twitter.com/) and create a new app:

[<img class="alignnone wp-image-265 size-large" src="http://ibrahimokdad.com/wp-content/uploads/2015/11/twitter_app_manager-1024x518.png" alt="Twitter application manager snap shot" width="700" height="354" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/11/twitter_app_manager-1024x518.png 1024w, http://ibrahimokdad.site/wp-content/uploads/2015/11/twitter_app_manager-300x152.png 300w, http://ibrahimokdad.site/wp-content/uploads/2015/11/twitter_app_manager.png 1181w" sizes="(max-width: 700px) 100vw, 700px" />](http://ibrahimokdad.com/wp-content/uploads/2015/11/twitter_app_manager.png)

Fill in the required details. Once that is done, you will get to use the keys and tokens provided in the created app. It should be straight forward. All would be visible once you are inside of the created app.

Now we are ready. We have the keys and tokens to access Twitter. We have **tweepy** installed all that is left is we create the code to connect and retrieve the data.

Create an empty .py file. Set four variables with will hold the consumer key and  the secret API key, also the tokens (scroll down to generate encase there weren&#8217;t any)

it should be as:

<pre>consumer_key='------------------------------'
consumer_secret='---------------------------'
access_token='------------------------------'
access_token_secret='-----------------------'
</pre>

Now add at the very top, the **tweepy** module important methods that we would be using. They are the _OAuthHandler_, _StreamListener_ and _Stream_.

<pre>from tweepy import OAuthHandler
from tweepy import Stream
from tweepy.streaming import StreamListener</pre>

Now we have all the necessary requirements. So let us go ahead and set the identifications and authentication of our application:

<pre>auth = OAuthHandler(consumer_key, consumer_secret)
 auth.set_access_token(access_token, access_token_secret)</pre>

a quick recap, we have imported the necessary methods to use to connect to twitter and set the necessary authentication codes. Now we read our timeline

we tell **tweepy** to use the credentials to connect to the API and ask for own timeline.

<pre>api = tweepy.API(auth)
timeline_tweets = api.home_timeline()</pre>

now timeline_tweets contain the tweets and we just loop through and print them as such:

<pre>count =0 
for tweet in public_tweets:
 count +=1
 print ("tweet", count, tweet.text, "\n", "----"*8)
</pre>

Voila that is all. You now have your timeline tweets you can do whatever you like with them. You see the process of generating data is quite straight forward. The question that remains is what can you do with that data.

So that is it for the first part, in the next parts we will be doing other manipulations with twitter. so stay tuned