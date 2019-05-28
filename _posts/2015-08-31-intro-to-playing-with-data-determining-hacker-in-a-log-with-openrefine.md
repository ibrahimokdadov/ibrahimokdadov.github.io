---
id: 235
title: 'Intro to Playing with Data: Determining hacker in a Log File with OpenRefine.'
date: 2015-08-31T14:23:16+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=235
permalink: /2015/08/31/intro-to-playing-with-data-determining-hacker-in-a-log-with-openrefine/
image: /wp-content/uploads/2015/08/syslog_log.png
categories:
  - Code
  - Content
tags:
  - Data
  - Data Analysis
  - data science
  - Google Refine
  - Hacker
  - OpenRefine
  - threat
---
<p style="text-align: justify;">
  <span style="font-weight: 400;">We have talked a bit about big data and what makes it. We have also seen how things should adapt to bigdata because the current tools may not work as expected as they were made not with bigdata in mind. Now things have changed. We have seen for example [<a href="http://ibrahimokdad.com/2015/06/23/bigdata-and-storage-why-is-not-an-issue-anymore/" target="_blank">BigData and Storage. Why it is not an issue anymore?</a>] which talked about how storage evolved to accommodate storage needs and such.</span>
</p>

<p style="text-align: justify;">
  <span style="font-weight: 400;">Now we start to get our hands dirty and move from the theory to practicality. </span>
</p>

<p style="text-align: justify;">
  <span style="font-weight: 400;">Assuming you have a bunch of data not necessarily big; something you have lying around say a log file in a tex file.</span>
</p>

<p style="text-align: justify;">
  <span style="font-weight: 400;">A scenario that happens quite often is that at times there is some suspicious activity on your server and such or even a breach. When such a thing happens you start to investigate. Your <em>first step</em> would be of course to change passwords and such. Your <em>next step</em> would be the <strong>log file.</strong> You would want to check its activity. The issue with that is that it can be quite long to check and has crowded data. So you will have to refine the data; to beautify it.</span>
</p>

<p style="text-align: justify;">
  <span style="font-weight: 400;">Here is where <strong>Google Refine (OpenRefine)</strong> comes to play.</span>
</p>

<p style="text-align: justify;">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2015/08/2000px-Google-refine-logo.svg_.png"><img class="alignnone size-medium wp-image-244" src="http://ibrahimokdad.com/wp-content/uploads/2015/08/2000px-Google-refine-logo.svg_-300x281.png" alt="OpenRefine Logo" width="300" height="281" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/08/2000px-Google-refine-logo.svg_-300x281.png 300w, http://ibrahimokdad.site/wp-content/uploads/2015/08/2000px-Google-refine-logo.svg_-1024x959.png 1024w" sizes="(max-width: 300px) 100vw, 300px" /></a>
</p>

<p style="text-align: justify;">
  <b>OpenRefine</b><span style="font-weight: 400;"> is: a tool to work with messy data. It is meant to cleanse and transform data to something meaningful and that would make more sense.</span>
</p>

<p style="text-align: justify;">
  Now to work with the example stated earlier; which is basically to analyze activity on server and track down potential threat. The sample file we will work with can be found <a href="http://www.monitorware.com/en/logsamples/apache.php" target="_blank">here</a> [In case the link does not work the file can be downloaded directly from here: <a href="http://ibrahimokdad.com/wp-content/uploads/2015/08/apache-samples.rar">Apache Log Sample</a>].
</p>

<p style="text-align: justify;">
  Once you have the file downloaded and extracted; take a look at the file(s). If you examine the file you will notice that each line starts with an <strong>IP/address </strong>of the person accessed the server followed by <em>&#8220;space&#8221;</em><strong>&#8211;</strong><em>&#8220;space&#8221;</em><strong>&#8211;</strong><em>&#8220;space&#8221;</em><strong>[Date]</strong> <em>&#8220;space&#8221;</em> <strong>&#8220;Response&#8221;</strong> <em>&#8220;space&#8221;</em> <strong>Size</strong> (If I am not mistaken).
</p>

<pre>64.242.88.10 - - [07/Mar/2004:16:05:49 -0800] "GET /twiki/bin/edit/Main/Double_bounce_sender?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12846
64.242.88.10 - - [07/Mar/2004:16:06:51 -0800] "GET /twiki/bin/rdiff/TWiki/NewUserTemplate?rev1=1.3&rev2=1.2 HTTP/1.1" 200 4523</pre>

<p style="text-align: justify;">
  Examining the file is crucial to be able to understand the pattern or the format the files are created with. In this case you will notice that there are 2 separators we can work with, the &#8220;spaces&#8221; and the &#8221; &#8211; &#8211; &#8220;. We will go for the spaces because if we chose &#8221; &#8211; &#8211; &#8221; we will only separate the IPs from the rest of the information, To not confuse you this does serve our purpose and we can settle with that however I will choose the spaces because I will get to work with more columns.
</p>

<p style="text-align: justify;">
  Lets fire up <a href="http://openrefine.org/" target="_blank">Google Refine (Now Called OpenRefine)</a> and Click on &#8220;Create Project&#8221; as presented in the snapshot below.
</p>

<p style="text-align: justify;">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2015/08/1-Create-Project.png"><img class="alignnone size-large wp-image-241" src="http://ibrahimokdad.com/wp-content/uploads/2015/08/1-Create-Project-1024x465.png" alt="Creating Project in Google Refine Image" width="700" height="318" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/08/1-Create-Project-1024x465.png 1024w, http://ibrahimokdad.site/wp-content/uploads/2015/08/1-Create-Project-300x136.png 300w" sizes="(max-width: 700px) 100vw, 700px" /></a>
</p>

<p style="text-align: justify;">
  <strong>Columns are separated by</strong>: <strong>custom </strong> and is the character <em>&#8220;space&#8221;</em>; The reason for this choice is to have each element in every line on a separate column. Primarily what we are looking for is the IP address. We want to look at the possible attackers and what files the attacker used to access the system.
</p>

<p style="text-align: justify;">
  After we imported and set <strong>columns separated by</strong> the character <em>&#8220;space&#8221;</em> you can see the preview before applying the settings. The preview gives you an idea of how the end result would look like. The next step would be to set the headers to make for a clearer representation and also if you notice, the first row is set as a header and that the default setting in OpenRefine. To fix that simply change the option <strong>&#8220;line(s) as column headers&#8221;</strong> as in figure below:
</p>

<p style="text-align: justify;">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2015/08/2-Defining-Headers.png"><img class="alignnone wp-image-237 size-large" src="http://ibrahimokdad.com/wp-content/uploads/2015/08/2-Defining-Headers-1024x465.png" alt="Defining Headers After Import Image" width="700" height="318" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/08/2-Defining-Headers-1024x465.png 1024w, http://ibrahimokdad.site/wp-content/uploads/2015/08/2-Defining-Headers-300x136.png 300w" sizes="(max-width: 700px) 100vw, 700px" /></a>
</p>

<p style="text-align: justify;">
  You will see after setting <strong>Parse next</strong>  to <strong></strong>, a new header was created with the names as in the image (you can change the naming afterwards). Now click on <strong>Create Project</strong> and move to the next step.
</p>

<p style="text-align: justify;">
  After doing all of that now the crucial part and is grouping similar IPs together and be able to analyze the access log with ease. To do that click on the column you want to group. In our case is the IP column (<strong>Column 1</strong>). Simply click the small arrow&#8211;> <strong>Facet</strong>&#8211;> <strong>Text facet</strong>. OpenRefine will group similar IPs together. The reason we chose Text Facet and not Numeric is because addresses are not purely numbers, even some are domain names.
</p>

<p style="text-align: justify;">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2015/08/3-Text-Facet.png"><img class="alignnone wp-image-238 size-large" src="http://ibrahimokdad.com/wp-content/uploads/2015/08/3-Text-Facet-1024x465.png" alt="Playing around with Text Facets" width="700" height="318" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/08/3-Text-Facet-1024x465.png 1024w, http://ibrahimokdad.site/wp-content/uploads/2015/08/3-Text-Facet-300x136.png 300w" sizes="(max-width: 700px) 100vw, 700px" /></a>
</p>

<p style="text-align: justify;">
  After addresses are grouped one can easily identify possible threat sources and what activity they have conducted. For example let us take the IP address  <em>&#8220;10.0.0.153&#8221;</em> as the suspicious IP because of the number of occurrences it has in the access log. Now to examine its activity to the server simply click on the grouped IP. OpenRefine will filter the URLs to the right and present the activity that that IP had as below:
</p>

<p style="text-align: justify;">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2015/08/4-Filter-Groups.png"><img class="alignnone size-large wp-image-240" src="http://ibrahimokdad.com/wp-content/uploads/2015/08/4-Filter-Groups-1024x465.png" alt="Filtering Grouped Results Image" width="700" height="318" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/08/4-Filter-Groups-1024x465.png 1024w, http://ibrahimokdad.site/wp-content/uploads/2015/08/4-Filter-Groups-300x136.png 300w" sizes="(max-width: 700px) 100vw, 700px" /></a>
</p>

<p style="text-align: justify;">
  Now one can Identify the files the attacker used and communicated with in the server hence easily find a solution and eliminate those files from the list until a possible fix and/or they are scanned.
</p>

<p style="text-align: justify;">
  <span style="font-weight: 400;">Of course there are many other tools to achieve similar results but the best part about OpenRefine is the functionality you will be provided with. Go ahead and play around with it; you will love it.</span>
</p>

<p style="text-align: justify;">
  With that said; You have done your first step in messing/playing with data and of course this is all to serve our primary goal to become a data scientist. The tool presented today is very effective in many other scenarios and is very powerful; this post did not show the full potential the tool has however the post showed a simple functionality that could go a long way.
</p>