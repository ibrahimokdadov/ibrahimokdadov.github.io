---
id: 75
title: Deleting a Project From Online Visual Studio
date: 2014-01-12T13:01:29+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://medinanet.org/ibrahimokdad/?p=75
permalink: /2014/01/12/deleting-project-from-the-online-visual-studio/
suevafree_template:
  - full
categories:
  - Code
tags:
  - delete
  - microsoft
  - onlinetfs
  - team foundation server
  - tfs
  - visualstudio
---
C# is one of the programming I use extensively especially in websites development. My current setup is Visual Studio  2012. So in that regards I use Team Foundation Server.

I have recently started using the online visual studio and when I checked it with a test project I got stuck on how to delete it&#8230; here is how (**Updated**):

**<span style="text-decoration: underline;">Approach 1 through the GUI:</span>**

[<img class="alignnone size-full wp-image-77" alt="onlineTFS_settings" src="http://medinanet.org/ibrahimokdad/wp-content/uploads/2014/01/onlineTFS_settings.jpg" width="213" height="22" />](http://medinanet.org/ibrahimokdad/wp-content/uploads/2014/01/onlineTFS_settings.jpg)

Go to the Control panel by clicking on it in the Breadcrumbs are on the top left side

[<img class="alignnone size-full wp-image-76" alt="onlineTFS_breadcrumbs" src="http://medinanet.org/ibrahimokdad/wp-content/uploads/2014/01/onlineTFS_breadcrumbs.jpg" width="213" height="22" />](http://medinanet.org/ibrahimokdad/wp-content/uploads/2014/01/onlineTFS_breadcrumbs.jpg)

Now under **Administration tasks** click on &#8211;> _View the collection administration page._

Your projects would be listed there; by **Right clicking** on the project name you will see &#8220;**Delete**&#8221; option

<span style="text-decoration: underline;"><strong>Approach 2 Developer Command Prompt:</strong></span>

It is very simple; Open Developer Command Prompt (**Start**&#8212;>**Microsoft** **Visual studio 2012**&#8212;>**Visual Studio Tools**&#8212;> **Developer Command Prompt**)  in it use the following code (modify italics to your preferences)

&#8220;`TfsDeleteProject /collection:https://<em>yourOnlineAccount</em>.visualstudio.com/DefaultCollection <em>projectName</em>`&#8221;

You will need to confirm the operation; you just hit yes if the you are ok with that message (it will delete everything in there)

Cheers