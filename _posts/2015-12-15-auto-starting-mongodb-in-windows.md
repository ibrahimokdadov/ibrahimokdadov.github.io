---
id: 275
title: Auto starting mongoDB in windows
date: 2015-12-15T08:52:11+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=275
permalink: /2015/12/15/auto-starting-mongodb-in-windows/
image: /wp-content/uploads/2015/12/mongodb-logo-rgb.jpeg
categories:
  - Code
  - Content
tags:
  - mongodb
---
_Assumption_: You have installed MonogDB.

This post will show you how to make MongoDB start automatically in windows?

In order to achieve that it has to be a service and that is what this post will show you. Before doing any of this make sure that _mongodb\bin_ folder is registered in PATH in environment variables.

With that out of the way let us get to work. Let us add MongoDB service to windows.

Fire up CMD as Administrator.

When you are prompted with that dark screen do not panic. I repeat do not panic take a deep breath and think happy thoughts. Listen to me you can do it. You Can Do THIS. Okay enough with the drama now.

So yes you are now inside of the opened CMD; we need to tell it to install the command that runs or starts mongodb (and provide it as a service). Luckily in windows that is very simple. All you have to do to add a service is type whatever command you want and tail it with **&#8211;install** command. That is it. It is that simple. Now let us do that with our  **mongod** command.

The command that starts mongoDB is as:  
`<br />
mongod --config "C:\MongoDB\configuration.conf"<br />
` 

To install that as a service and make it start automatically even if you turned off your computer simply add **&#8211;install** to the end.

`<br />
mongod --config "C:\MongoDB\configuration.conf"  --install<br />
` 

[<img class="alignnone wp-image-276 size-full" src="http://ibrahimokdad.com/wp-content/uploads/2015/12/cmd_screen_shot.png" alt="Command Line Screen Image" width="677" height="341" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/12/cmd_screen_shot.png 677w, http://ibrahimokdad.site/wp-content/uploads/2015/12/cmd_screen_shot-300x151.png 300w" sizes="(max-width: 677px) 100vw, 677px" />](http://ibrahimokdad.com/wp-content/uploads/2015/12/cmd_screen_shot.png)

That&#8217;s it. **Wait!** there a better organized way. It is always best to add descriptions and names to your service to have that professional organized look.

Now along with the **&#8211;install** keyword there is **&#8211;serviceName &#8211;serviceDisplayName &#8212; serviceDescription** keywords and I believe they are self explanatory.

`<br />
mongod --config "C:\MongoDB\configuration.conf" --install --serviceName mongodb27017    --serviceDisplayName "MongoDB Server Instance 27017" --serviceDescription "MongoDB Server Instance running on 27017"<br />
` 

Now you are done. Your service is installed. One last step and you are ready to go. You just need to start the service now. That is quite simple. You have two options for this one.

The first one is to use the GUI by clicking on &#8220;start&#8221; and search for services. Open it and look for the mongodb service you just created and right click on it and start.

[<img class="alignnone wp-image-277 size-full" src="http://ibrahimokdad.com/wp-content/uploads/2015/12/services_screen_shot.png" alt="Services Screen Image" width="820" height="600" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/12/services_screen_shot.png 820w, http://ibrahimokdad.site/wp-content/uploads/2015/12/services_screen_shot-300x220.png 300w" sizes="(max-width: 820px) 100vw, 820px" />](http://ibrahimokdad.com/wp-content/uploads/2015/12/services_screen_shot.png)

The second way is the cooler way and is using the command line. Type the following command  
`<br />
net start mongodb27017<br />
`  
Note that mongodb27017  is the service name. To stop the service replace **start** with **stop**

&nbsp;

* * *

Okay I know I said that&#8217;s it but there is one very last thing I should tell you before leaving.

Say you decided you want to remove mongoDB service simply replace the **&#8211;install** with the keyword **remove**.