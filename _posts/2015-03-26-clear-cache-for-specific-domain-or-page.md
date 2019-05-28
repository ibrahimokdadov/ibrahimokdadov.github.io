---
id: 181
title: Clear Cache for specific domain or page
date: 2015-03-26T07:55:53+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=181
permalink: /2015/03/26/clear-cache-for-specific-domain-or-page/
suevafree_template:
  - full
categories:
  - Code
tags:
  - addon
  - defaultwebpage.cgi
  - domain
---
Okay here is the thing [I presume your are using chrome]:

In my line of work I get to work with web development to get some work done. The part that sucks is when I have to delete cache to view certain configuration. A common case where this occurs alot is when you add an add-on domain to your hosting account; you will probably face something like this: domainname.somthing /cgi-sys/defaultwebpage.cgi

So here is a quick way I get by without having to clear my browser cache nor data (This is when `ctrl+F5` does not work)

  * View Chrome Developer Tool (right click inspect item) or Press F12.
  * Click settings &#8220;gear&#8221; icon usually in top-right corner
  * Under **General Category** check &#8216;Disable cache (while DevTools is open)&#8217;
  * Refresh  page

There you go. Oh yes do not forget to re-enable caching by un-checking &#8216;Disable cache (while DevTools is open)&#8217;