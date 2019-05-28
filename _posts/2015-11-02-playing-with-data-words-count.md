---
id: 252
title: 'Playing with Data: Words Count'
date: 2015-11-02T15:08:14+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=252
permalink: /2015/11/02/playing-with-data-words-count/
image: /wp-content/uploads/2015/11/documetnWords.jpg
categories:
  - Code
  - Content
tags:
  - bigdata
  - 'c#'
  - scripting
  - wordcount
---
The [last time](http://ibrahimokdad.com/2015/08/31/intro-to-playing-with-data-determining-hacker-in-a-log-with-openrefine/) we started playing around with data using OpenRefine; Today we will try to do something a little different. This time we are not going to use a tool, instead we will start creating our own scripts to get things done.

Now. It is almost a must when it comes to bigdata that one knows his ways with programming because at times you will not find a tool that does exactly what you need. There are tasks that can be finished way faster if you just code something and get it over with.

In my work there was a time when I had to analyze some documents as part of a bigger project we had to study the trending articles and such; to learn how those articles were structured. Some articles used fancy and complicated words which made them achieve less than the simple articles and posts especially ones that used informal language.

<!--more-->

Let us take that as an example and work from there. So the scenario is:

We have number of documents let us as start with text documents. We want to process them and calculate word frequencies in the text file(s).

To start solving the problem, first let us create a pseudo code and work on that.

so:

<pre>define regex
Open file
while it is not end of line
  {
   read line
   convert punctuation to empty string or space
   list of words = regex.match AND group
   dictionary = list of words and their frequencies
  }
store dictionary to file
file.close
</pre>

So things are getting easier now. We just need to open the file we want to read from. read the lines. replace any punctuation since that can skew results. convert words to list and their counts. Convert list to dictionary for for key value operations. Once that is out of the way. We can add further features such as a settings files to read the files names from that file without the need to modify the code it self.

You see up to this point I did not mention &#8220;the&#8221; programming language to use. Because at this point you do not need a specific one. feel free to use any language you are familiar with. This is an important point: there is no need to follow the hype if you can get things done with what you know do so. I randomly chose c# for now. Later on if you are following my posts I will be using another language which I will detail on on the upcoming posts.

try to get the above requirement done and test it. If you get stuck I have posted some code to [github here](https://github.com/ibininja/WordFrequenciesUnicode).