---
id: 332
title: 'Display Image Preview Before Upload [Javascript, Jquery]'
date: 2016-05-31T08:28:57+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=332
permalink: /2016/05/31/display-image-preview-upload-javascript-jquery/
image: /wp-content/uploads/2016/05/upload-1118929_1280-e1464683850335.png
categories:
  - Code
tags:
  - display image
  - jquery
  - js
  - preview image
  - upload
---
So. It has been quite sometime since my last post. I recieved a question on my youtube change regarding showing an image to user before uploading it to server. As you well know JS and JQuery is constantly being updates and is super powerful. It is now simpler than ever to display the image to user before uploading it to server using Js&#8217;s FileReader as such:

Assuming you have the following html, an input element and a image element to display the image preview:

## HTML Section

`<input id="file1" type="file" ><br />
<img id="img1" src="" alt="image here">`

`<input id="file1" type="file" /><br />
<img id="img1" alt="image here" />`

The javascript part would be simple. I am going to import jquery

## JQUERY Import

<script src=&#8221;http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.2.min.js&#8221;></script>

followed by a script block that will do the magic. I think it is self explanatory:

## Javascript Code

//capture when file element changes

`$("#file1").change(function () {<br />
showImage(this);<br />
});`

// show the image javascript function:

`function showImage(input){<br />
var reader = new FileReader();`

`reader.onload = function (e) {<br />
$('#img1').attr('src', e.target.result);<br />
}`

`if (input.files.length > 0) {<br />
reader.readAsDataURL(input.files[0]);<br />
}`

`else {<br />
alert("no image found");<br />
}`

`}`

&nbsp;

Voila. Done. just close your script block and you are good to go.

Source Code can be found here: https://gist.github.com/ibininja/8ceca594d4b413f3381a434f61fec7ac