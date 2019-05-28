---
id: 221
title: BigData and Storage. Why it is not an issue anymore?
date: 2015-06-23T12:02:52+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=221
permalink: /2015/06/23/bigdata-and-storage-why-is-not-an-issue-anymore/
image: /wp-content/uploads/2015/06/Server-Room.jpg
categories:
  - Content
tags:
  - bigdata
  - harddrive
  - ssd
  - storage
---
<p style="text-align: justify;">
  As mentioned in my <a href="http://ibrahimokdad.com/2015/04/30/bigdata-the-basics/">previous posts </a>on BigData; Storage is one of the fundamental parts of any BigData  application. Usually the first step in any BigData application is collecting the data; the data could be scattered or even archived somewhere; your first step would be to collect it (not necessarily in one location!).But  before you can do that you need to figure out how you would handle your storage.
</p>

<p style="text-align: justify;">
  When talking about storage it is also important to mention that there is the hardware aspect (Disks&#8230;etc) and the software aspect (Databases&#8230;etc). In this post I will be focusing on the hardware.
</p>

<p style="text-align: justify;">
  In some situations you will find that some consider the main memory as part of the physical storage. You can find some servers having several GigaBytes like for example the <a href="http://www.newegg.com/Product/Product.aspx?Item=N82E16813151179R">TYAN motherboard that can support more than 200GB of memory</a>. In such a case the memory can be used to hold and process the data which will be extremely fast. However The capacity is still a limitation.
</p>

<p style="text-align: justify;">
  As mentioned earlier when collecting data you need to figure out how you handle the storage. Hardware storage can be a concern but it is not necessarily an issue anymore; and it is not all that complicated because even if you know much about storage most probably you would not need to worry about manufacturing the device (if you are, that would a whole different story) so yes storage is not an issue any more. There are several reasons as to why it is not an issue anymore; but the prominent reasons are the <em><strong>disks evolution</strong></em> and the <em><strong>cloud</strong></em>.
</p>

<h2 style="text-align: justify;">
  Disk evolution:
</h2>

<h3 style="text-align: justify;">
  &#8211; Disk Capacity & Cost:
</h3>

<p style="text-align: justify;">
  Disks cost has reduced dramatically in the last few years. Looking back 20 or so years, a good desktop would have a disk space of say 1GB, A floppy disk slot and a 4 MB of RAM. Nowadays an average desktop would have a disk space of 1TB, no floppy disk, rather a USB3 Port and say 8 GB RAM. You see there is huge increase is sizes. 1024 times increase in terms of disk space. From 1.44 MB of Floppy disk space to Gigabytes of USB3 Sticks. And almost 2000 times increase in memory (RAM) from 4MB RAM to ~8000 MBs.
</p>

<p style="text-align: justify;">
  That in terms of the capacity; looking at the cost. In<a href="http://www.jcmit.com/diskprice.htm"> 1993 1Gb of disk space</a> used to cost something around 1000 $ (US Dollars), Now 1 GB would cost 0.04 $ (US Dollars). There is almost 100% decrease there.<a href="http://www.mkomo.com/cost-per-gigabyte-update"> Mkomo.com</a> has created a beautiful interactive chart on historical data of disk costs (here is a snap):
</p>

<p style="text-align: justify;">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2015/06/cost-per-gigabyte-large.png"><img class="alignnone size-large wp-image-229" src="http://ibrahimokdad.com/wp-content/uploads/2015/06/cost-per-gigabyte-large-1024x539.png" alt="cost per gigabyte chart" width="640" height="337" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/06/cost-per-gigabyte-large-1024x539.png 1024w, http://ibrahimokdad.site/wp-content/uploads/2015/06/cost-per-gigabyte-large-300x158.png 300w" sizes="(max-width: 640px) 100vw, 640px" /></a>
</p>

<p style="text-align: justify;">
  You can see through the increase how drastic the change is. This change has made for an attractive platform for BigData. Now it is easy and cheap to get more storage; hence no holding back when it comes to storing data.
</p>

<h3 style="text-align: justify;">
  &#8211; Disk Speeds:
</h3>

<p style="text-align: justify;">
  We have seen how cheap storage has become and how big it has become as well. However when talking about disks mainly there are three main characteristic and are: <strong>Capacity</strong>, <strong>Cost</strong> and <strong>Read Speed</strong>. The first two; we have talked about in the previous paragraph. The <em>read speeds</em> is another story to tell.
</p>

<p style="text-align: justify;">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2015/06/hard-drive-internals.jpg"><img class="alignnone size-large wp-image-222" src="http://ibrahimokdad.com/wp-content/uploads/2015/06/hard-drive-internals-1024x682.jpg" alt="hard drive internals image" width="640" height="426" srcset="http://ibrahimokdad.site/wp-content/uploads/2015/06/hard-drive-internals-1024x682.jpg 1024w, http://ibrahimokdad.site/wp-content/uploads/2015/06/hard-drive-internals-300x200.jpg 300w, http://ibrahimokdad.site/wp-content/uploads/2015/06/hard-drive-internals.jpg 1280w" sizes="(max-width: 640px) 100vw, 640px" /></a>
</p>

<p style="text-align: justify;">
  The performance characteristics of the hard disks (HDDs) did not advance as much as capacities did, mainly because those characteristics are mostly mechanical. The performance characteristics are generally about the speed to read the data (seek time) from disks.
</p>

<p style="text-align: justify;">
  Looking back in time the first Hard Drive (ST-506) used to store capacities of around ~5 MB with a transfer speed of ~5MB/s (Seagate Technology, 1981). With a bit of calculation, the time needed to read all data from drive would take (5 /5(MB/s))/ 60(mins) ~ 0.02 mins. Whilst nowadays we see a 1 Terabyte of capacity, with a ~100MB/s transfer speed . With similar calculation it would result in approximately 3 hours of time.
</p>

<p style="text-align: justify;">
  So the transfer speed between the different times would be 100/5=20; thus it is 20 times more faster; Whilst capacity is ~ 209715 times more.
</p>

<p style="text-align: justify;">
  So what we can conclude is that despite the fact that the capacity has grown tremendously the read speed is a limitation that is why there are enhancements taking place to overcome this limitation
</p>

<h4 style="text-align: justify; padding-left: 30px;">
  &#8211; Disk Enhancements:
</h4>

<p style="text-align: justify;">
  The common disks are mechanical disks so the read times are limited. One of the ways to deal with read speed of disks is the usage of multiple disks simultaneously and prominent example of this usage is the redundant array of independent disks (RAID). RAID can be used for faster access time and faster writing as well since the data is distributed over different hard drives connected via a RAID controller. To the system it usually sees the connected hard drives as one. Say a 1 TB file is written to two connected drives, each drive will take half which ~500GB so you will end up reading in half the time and writing in half the time as well (There are different RAID levels you can read them <a href="https://en.wikipedia.org/wiki/Standard_RAID_levels">here</a>). You see the more connections you have the faster things would be. And that is the the concept behind what we call distributed processing. Distributed processing is meant to distribute a given task over number of workers to work on that single task instead of one worker working on one task. Now say for example for large datasets If a 1 terabyte was divided to 10 units/disks with read speed on each disk is ~100MB/s; each would host ~102.4 GB. The time each drive would take would be ~17.7 minutes; and since all would be at the same time it would take the 1 Terabyte ~17.7 only minutes rather than three hours if read by one disk only. This precise concept of distribution is what made handling BigData possible.
</p>

<p style="text-align: justify;">
  There are now other forms of hard disks that are meant or designed to overcome the limitation of the mechanical hard disk. The famous is the solid state disk (SSD).  SSDs use microchips to store data instead of the mechanical process (mechanical arm over a platter) in HDDs. SDDs have a controller in them that does the writing and reading and other stuff. A fast controller  means faster read and write speeds. With SSDs Read speeds can go<a href="http://www.newegg.com/Product/Product.aspx?Item=N82E16820227744"> more than 1000 MBs</a> like the OCZ Storage Solution RVD3X2-FHPX4-240G (priced ~880 $ US Dollars) . However The common ones in the market now (2015) are about ~550 MB/s for both Read and Write speeds; with capacities up to 1 TB (the most expensive around <a href="http://www.amazon.com/SanDisk-Extreme-2-5-Inch-Warranty-SDSSDXPS-240G-G25/dp/B00KHRYRNM">700$ on Amazon</a>). The prices of SSDs are yet to drop to reach HDDs however every sign shows it will happen sooner.
</p>

<p style="text-align: justify;">
  There are also other technologies aside from SSDs to overcome some limitation of mechanical hard drives such as the hybrid drives which basically is a hard drive with mini SSD inside of it to cache mostly accessed data. Further researches are taking place and we should expect to see more technologies when it comes to disks. However with what is currently available BigData processing is possible so you can imagine the possibilities if not for the limitation current hard drives have.
</p>

<h2 style="text-align: justify;">
  The cloud:
</h2>

<p style="text-align: justify;">
  Another reason why storage is not an issue anymore is the online cloud providers. Now you do not have to worry about the hardware nor the space where to put it. You can simply rent a storage space in s3 or the likes and you are ready to go.  In Terms of the cost it is quite cheap. S3 For example at the time of this posting costs 0.0390/GB/Month and you do not have to worry about the space nor its accessibility or availability. Such that it is accessible anywhere and from any platform and also it is always there unless you delete it. This mean you do not have to worry about getting someone to manage the disks or the clusters nor reserving a space for nor getting the technologies to enable it is availablitty and security over the internet. It is basically a plug and play thing. Even though it is charged per month. Still at that price it is quite cheap considering you wouldn’t need to put any effort except signing up and start uploading your data. You see with the cloud any worry concerning getting storage and actually storing is off; this has made BigData even more accessible and available as well.
</p>

<p style="text-align: justify;">
  The S3 is just an example there are many other services out there from the same or different vendors that could cost less depending on your needs.
</p>

<h2 style="text-align: justify;">
  Conclusion:
</h2>

<p style="text-align: justify;">
  With that said; Storage it easily available now, unlike the older days where it costed a lot and was available in small capacities. Even for the drawbacks that currently exist like the read speed in hard drives there are solutions and ways about to not make it  a stopping point for BigData applications.
</p>

<h2 style="text-align: justify;">
  Reference:
</h2>

<p style="text-align: justify;">
  • Seagate Technology, 1981. ST506 MicroWinchester, OEM Manual. [online] Available at:<http://bitsavers.org/pdf/seagate/ST506_Preliminary_OEM_Manual_Apr81.pdf>
</p>