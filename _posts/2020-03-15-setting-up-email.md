---
id: 401
title: Setting a Custom Email Address for your Domain for Free 📧
date: 2020-03-15T07:58:14+00:00
author: iam@ibrahimmokdad.com
layout: post
permalink: /2020/03/15/measures-of-center/
categories:
  - Content
tags:
  - email
  - namecheap
---



Setting a Custom Email Address for your Domain for Free
=========================

![](/assets/images/401/gmail-logo.png)

Okay you bought a domain name and you want to receive emails for that domain name(s).  You can opt for the paid option like G-Suite and just have the necessary MX records added. In my case I have Netlify setup and I just want my email to land on my gmail account. 

**First Step**
We need to set a record in Netlify of a forwarding service we will use. Let me explain.

When you send an email say to hi@ibrahimmokdad.com it will hit the registrar in which  my domain is registered. The registrar has the DNS settings pointing to Netlify. That is why we will have the email forwarder records on Netlify's DNS setting. 

So for Step 1; go to imporovemx.com and create an alias. 

**Step Two**
ImproveMX will provide you with MX records to use on Netlify. Make sure you validate your account before moving on. 

**Step Three**
Go to Netlify and login. Navigate to the designated Domain. You will see the DNS Settings. 

> *MX @ mx1.improvmx.com 10 
> MX @ mx2.improvmx.com 20*

**Step Four**
Add the records provided by ImproveMX

**Step Five** 
Go back to improveMX and make sure it shows green under your alias and it is not waiting for DNS propagation. Otherwise you just have to wait. 

**Final Step**
When the email forwarding is active on improveMX you are good to go. Click on the test button you see; you should recieve an email on your gmail account. 

That's it.. Enjoy