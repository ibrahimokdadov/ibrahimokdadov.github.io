---
id: 313
title: Loading Images using OpenCV 3 and Python 2.7
date: 2016-02-18T13:01:47+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=313
permalink: /2016/02/18/loading-images-using-opencv-3-and-python-2-7/
image: /wp-content/uploads/2016/02/2-img-loading.jpg
categories:
  - Code
  - Content
tags:
  - loading images
  - opencv
  - opencv3
  - python
  - python27
---
In the [previous post](http://ibrahimokdad.com/2016/01/10/installing-opencv-3-on-python-2-7/) I showed you to install opencv and gave you a quick intro as to what it does. It is very powerful library. I have made a video series on some of its concepts which I believe will make you understand many parts of it and how things work with it.

I believe one of the basics of opencv is to learn how to load images. Once a given image is loaded in opencv the possibilities are limitless after that. You can do various things starting from changing it original color to changing its content. This post complements my [video here](https://www.youtube.com/watch?v=g4rLJKrpVe4&index=3&list=PL-cS6ZwDCr6rnUfSO2Wc5iR-UPKyMHCsn) (do excuse the teaching capabilities 🙂 still developing those skills).

So let us get started. Loading images is very simple. with few lines of code you will end up loading the image and displaying it in new opencv window.

`import cv2`

`img = cv2.imread('b.PNG', cv2.IMREAD_COLOR)`  
`print img`  
`if img is None:`  
`    print "Object does not exist"`  
`else:`  
`    cv2.imshow('firstImg', img)`  
`    cv2.waitKey(0)`  
`    cv2.destroyAllWindows()`

That is it. the important piece is : cv2.imread(); this portion loads the image and stores it in img variable. If for any reason the image could not be loaded or that the format of image is not supported an empty matrix (layman&#8217;s terms array) will be returned. In the video below you can find a bit more detailed information on the subject. It is very simple and in the video I show the code in action.