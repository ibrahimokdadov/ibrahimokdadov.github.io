---
id: 281
title: Moodle theme breaks when using HTTPS (SSL)
date: 2015-12-24T07:02:47+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=281
permalink: /2015/12/24/moodle-theme-breaks-when-using-https-ssl/
image: /wp-content/uploads/2015/12/moodle-logo.png
categories:
  - Code
  - Content
tags:
  - https
  - moodle
  - theme
---
Moodle breaking down when switching to https. Okay. Does it look like your moodle has no CSS:

<a href="http://ibrahimokdad.com/wp-content/uploads/2015/12/moodle_ssl.jpg" rel="attachment wp-att-282"><img class="alignnone wp-image-282 size-medium_large" src="http://ibrahimokdad.com/wp-content/uploads/2015/12/moodle_ssl-768x479.jpg" alt="illustration of moodle breaking on ssl" width="700" height="437" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/12/moodle_ssl-768x479.jpg 768w, http://ibrahimokdad.site/wp-content/uploads/2015/12/moodle_ssl-300x187.jpg 300w, http://ibrahimokdad.site/wp-content/uploads/2015/12/moodle_ssl.jpg 850w" sizes="(max-width: 700px) 100vw, 700px" /></a>

Now this problem occurs because if you look in the address bar you will see that the site is https. While your config file (mostly probably) has wwwroot pointing to something like this http://Your-website.com

What happens is that your website changes to https when login however the auxiliary files (js and the likes) are called using normal http; and the browser if running https will block those by considering them as unsecure files.  Now to solve this make the whole files come in https mode.

To do that simply change **http**://your-website.com to use **https** instead so **https**://your-website.com

to add an extra step add the following configuration like to your configuration file: **$CFG->sslproxy = 1;**

&nbsp;

Hope that solves your problem. Thank you for passing by.

If you want to stick around take a look at my other posts like [this one that talks about bigdata](http://ibrahimokdad.com/2015/04/30/bigdata-the-basics/).