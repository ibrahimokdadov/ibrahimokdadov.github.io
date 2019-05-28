---
id: 153
title: Why am I using white payments?
date: 2014-12-17T07:21:14+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=153
permalink: /2014/12/17/why-am-i-using-white-payments/
suevafree_template:
  - full
image: /wp-content/uploads/2014/12/white_main.png
categories:
  - Code
  - Content
tags:
  - ecommerce
  - gateway
  - gcc
  - online payment
  - payment
  - store
  - white
  - whitepayments
---
There are many options that we can choose from. The most prominent one is Paypal. we choose white for two simple reasons Simple and Support.

I sent out an email to the founder [Yazin](http://yazins.com/) asking him for instructions on how to use [whitepayments](https://whitepayments.com/) in C#. What was available then was Ruby and PHP only. It was Friday when I sent the email (I should mentioned that Friday in the GCC is a day off, a weekend day) I was not expecting any response that day but I wanted a task off the to do list.

A couple of hours later I got this:

(I am just posting some of the text)

1/ Add RestSharp to your project ( <https://github.com/restsharp/RestSharp> )

2/ Use the below code to process a payment:

`using RestSharp;`

var client = new RestClient();

client.BaseUrl = [&#8220;https://api.whitepayments.com/v1/&#8221;](https://api.whitepayments.com/v1/);

client.Authenticator = new HttpBasicAuthenticator(&#8220;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211;&#8220;, &#8220;&#8221;);

var request = new RestRequest();

request.Resource = &#8220;charges&#8221;;

request.AddParameter(&#8220;currency&#8221;, &#8220;BHD&#8221;);

request.AddParameter(&#8220;amount&#8221;, &#8220;10&#8221;);

request.AddParameter(&#8220;card[number]&#8221;, &#8220;00000000000000000&#8221;);

request.AddParameter(&#8220;card[exp_month]&#8221;, &#8220;12&#8221;);

request.AddParameter(&#8220;card[exp_month]&#8221;, &#8220;2015&#8221;);

request.AddParameter(&#8220;card[cvv]&#8221;, &#8220;123&#8221;); // or PIN # for debit cards

IRestResponse response = client.Execute(request);

I was happy that it was very simple, (If you want the steps to use c# with white click here).

I gave that a spin and with few modifications things were rolling and that is why I said simple. Of course there are other requirements whitepayments asks you to do before allowing you to use them one of them is to have an SSL certificate up and running.

With that happened I said to my self why waste time trying other payment gateways? I could be up and running in few simple steps so I stopped right there. Now to be fair there might other solutions that are worth using and Paypal is one, However I used Paypal and since they do not support the local currency here in the region I lose some money just doing the currency exchanges. So ya go ahead and try white if you have something to sell and let us know how did it go.

&nbsp;