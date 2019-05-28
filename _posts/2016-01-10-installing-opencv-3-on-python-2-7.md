---
id: 295
title: Installing OpenCV 3 on Python 2.7
date: 2016-01-10T08:46:35+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=295
permalink: /2016/01/10/installing-opencv-3-on-python-2-7/
image: /wp-content/uploads/2016/01/OpenCV_Logo_with_text.png
categories:
  - Code
  - Content
tags:
  - installation
  - opencv
  - python
---
<p style="text-align: justify;">
  OpenCV is a great tool for real time applications and has several interfaces for several programming languages (I am a Python guy and have used and still using it with python and it works beautifully). What is it is? it is a library for computer imaging stuff or better yet computer vision. It is not only about that but it is also about machine learning. Amazing isn&#8217;t it? I still have something even better to say. It is free to use.
</p>

<p style="text-align: justify;">
  To get you started I started a <a href="https://www.youtube.com/playlist?list=PL-cS6ZwDCr6rnUfSO2Wc5iR-UPKyMHCsn" target="_blank">video series on youtube</a> on OpenCV I hope it will help you make a leap forward. So if you want to get into image processing for example or image detection and recognition this library is for you.
</p>

<p style="text-align: justify;">
  As a first step. Let us get is on our system. I am currently using windows 7.
</p>

<p style="text-align: justify;">
  The process is very simple. Assuming you have python installed in you system. You download OpenCV suitable for your platform. After that open <strong>pip2.7.exe</strong> in your python 2.7 installation folder and execute <strong>pip2.7.exe install numpy</strong> to install numpy library with is very important prerequisite. You could also install <strong>matplotlib</strong> the same way (advisable but not necessary).<br /> With that out of the way. Head to opencv downloaded package, <strong>extract it</strong>, and <strong>copy from</strong> <strong>opencvFolderName/build/python/2.7/yourPlatformArchitecture/</strong> the file <strong>cv2.pyd</strong>. paste in Python27 installation folder inside of <strong>Lib/site-packages.</strong>
</p>

<p style="text-align: justify;">
  That&#8217;s all to it. You can verify by trying out the command:
</p>

<p style="text-align: justify;">
  <strong>import cv2</strong>.
</p>

<p style="text-align: justify;">
  here are the steps on my youtube video:
</p>

<p style="text-align: justify;">
</p>