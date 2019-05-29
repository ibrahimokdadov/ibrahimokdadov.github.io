---
id: 63
title: 'How I solved the SoftException;Directory is writeable by group;'
date: 2013-11-24T14:49:58+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://medinanet.org/ibrahimokdad/?p=63
permalink: /2013/11/24/how-i-solved-the-softexception-directory-is-writeable-by-group/
categories:
  - Code
tags:
  - "500"
  - crm
  - error
  - internal
  - SoftException
  - vtiger
---
_The problem and solution are in the last two paragraphs; you could jump there if you do not want to read the whole thing&#8230;_

Customer Relationship Management Systems (CRMs) in layman terms  are great tools to keep track of your customers and how is the team handling them. As with any project, one has to decide on the needs first and accordingly work those needs, so it may not be necessary to have a CRM. Anyways that aside I just felt I had to say that&#8230;now&#8230;

I have had some experience with several CRMs. The one I am working with now is called _vtiger_; it is in my opinion the simplest and suffices all needs over many other CRMs (Free and Commercial). Usually it runs well; but this time one problem persisted; I kept on getting an internal server error (not from _vtiger_).

Going back to the _logs_ it read this:

`[Sun Nov 10 04:35:38 2013] [error] [client --.--.---.---] SoftException in Application.cpp:668: Directory "/home/site/public_html/vtiger" is writeable by group`

After several attempts and searching on forums I realized that the error is in the permissions on the folder. Usually Hosts do not allow folders with **permission 777** to run. So when I changed the folder &#8220;vtiger&#8221;&#8216;s **permissions** **to 755** it **WORKED**! 🙂

Hope that helps

&nbsp;

&nbsp;