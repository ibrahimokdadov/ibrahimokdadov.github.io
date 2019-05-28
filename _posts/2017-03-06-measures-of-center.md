---
id: 399
title: Measures of center, Descriptive Statistics
date: 2017-03-06T14:58:14+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=399
permalink: /2017/03/06/measures-of-center/
image: /wp-content/uploads/2017/03/wave-64170_1920.jpg
categories:
  - Content
tags:
  - descriptive statistics
  - measures of center
  - stats
---
<p style="text-align: justify;">
  Today we will talk about measures of center and is the core of descriptive statistics. If you remember i said <a href="http://ibrahimokdad.com/2017/02/26/descriptive-statistics-the-building-blocks/">previously </a>that visualizing data makes it easier to understand that data. So basically when plotting data like histograms you get to see a shape; if a line is drawn by the peaks of each bar. It will form a bell shape then we have what we call a Normally distributed data. Again one peak. like a bell; or if flipped would be roughly symmetric. If the shape formed was more shifted to the <strong>left</strong> it is called <strong>Positively skewed</strong>; the peak is higher on the left near (0,0) and <strong>negatively</strong> skewed is when the higher frequencies are to the <strong>right </strong>(figure below). For normally distributed data usually the mean, median, mode (do not panic) are all the same.
</p>

<p style="text-align: justify;">
  <!--more-->
</p>

<div id="attachment_400" style="width: 710px" class="wp-caption alignnone">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2017/03/distributions.jpg"><img class="wp-image-400 size-medium_large" src="http://ibrahimokdad.com/wp-content/uploads/2017/03/distributions-768x260.jpg" alt="normal, positive and negative distributions Image" width="700" height="237" srcset="http://ibrahimokdad.site/wp-content/uploads/2017/03/distributions-768x260.jpg 768w, http://ibrahimokdad.site/wp-content/uploads/2017/03/distributions-300x102.jpg 300w, http://ibrahimokdad.site/wp-content/uploads/2017/03/distributions-1024x347.jpg 1024w" sizes="(max-width: 700px) 100vw, 700px" /></a>
  
  <p class="wp-caption-text">
    Source: http://2012books.lardbucket.org/books/geographic-information-system-basics/section_10/e8b3fa38d26678631d8c8c2c7822011b.jpg
  </p>
</div>

<p style="text-align: justify;">
  <p style="text-align: justify;">
    Wait you seen me say mean, median and mode just now. Well those are called <strong>measures of center</strong>.
  </p>
  
  <p style="text-align: justify;">
    &#8211; <strong>Mode </strong>is the value where the <strong>frequency</strong> is highest or the value that occurs most often. It can be a range in histograms (a bin).[Note it is not used with histograms Only; it can be category name in case it is a bar graph]. <strong><u>REMEMBER </u></strong>that the value in <u>x-axis</u> with <u>highest frequency</u> is the <u>mode</u>.
  </p>
  
  <p style="text-align: justify;">
    &#8211; <strong>Mean</strong>: You already know this; Average? <strong>Average</strong> is just another word for Mean. You obtain that by adding all occurrences and divide by their presence number [latexpage]$(\sum_1^nn_i)/n$: For example we have the following values: 4,2,3; their Mean/Average is 4+2+3/3 = 9/3 = 3. The Mean is always useful to make inferences about the population. This would also mean that  (n * mean = Sum of values) ==>$ (\sum_1^nn_i)=n\times\mu$.
  </p>
  
  <p style="text-align: justify;">
    &#8211; <strong>Median</strong>: Value in the middle of distribution is called median; Here <strong>order of elements or variables matters</strong>. Also there is something you should expect. Dealing with odd number of numbers and dealing with even number of numbers. The odd number of numbers is straightforward. (Total number of elements +1 )/2, For example if you have 9 Values the Median would be the value in the 5th place ((9+1)/2=5).
  </p>
  
  <p style="text-align: justify;">
    If the total number of elements is an even number there is an extra step that needs be done.  We need to take as the definition states the center; we have seen that it is easy when we have an odd number of numbers but how about even number of numbers? you simply need to take 2 values. So basically (total number of elements)/2 let us call the result or the location as <em>result_location </em>so the location next to it is <em>result_location +1</em>. Now we have the 2 values to get the center we get their average aka we add them together and divide by 2.
  </p>
  
  <p style="text-align: justify;">
    The Median is robust in that it does not get affected much by the outliers it is good for highly skewed distributions. However it does not take all data points into account.
  </p>
  
  <p style="text-align: justify;">
    So if odd =>(n+1)/2. If Even =><strong>(</strong>(n/2) + ((n/2)+1) )<strong>)</strong>/ 2
  </p>
  
  <p style="text-align: justify;">
    Usually in a positive skewed distribution the <strong>mode </strong>is on the <strong>left</strong>, the <strong>median </strong>in the<strong> </strong>and the <strong>mean greater than </strong>the <strong>median </strong>due to bigger values pulling the mean towards the right (remember that the mean is affected by data points unlike the median. Also for most distributions if there are large values to the left; usually mean is less than median because it will pull to the left.
  </p>
  
  <ul style="text-align: justify;">
    <li>
      Note: When you have a population and you take random samples from it most of them will have similar means.
    </li>
  </ul>
  
  <p style="text-align: justify;">
    Now, there are other types of distributions you should know about as well; There is one called the  <strong>uniform </strong>distribution it is when the frequencies are almost same for each bin/range. In this case there is <strong>no mode</strong>.
  </p>
  
  <div style="width: 566px" class="wp-caption alignnone">
    <img class="size-medium_large" src="http://www.gaussianwaves.com/gaussianwaves/wp-content/uploads/2012/09/Histogram-of-Uniform-Distribution.jpg" alt="a uniform distribution image showing all bars about the same height." width="556" height="445" />
    
    <p class="wp-caption-text">
      Source: http://www.gaussianwaves.com/gaussianwaves/wp-content/uploads/2012/09/Histogram-of-Uniform-Distribution.jpg
    </p>
  </div>
  
  <p style="text-align: justify;">
    <p style="text-align: justify;">
      The other distribution is called <strong>binormal distribution</strong>; it is basically when you have two <strong>modes</strong>; so you will have two bells.
    </p>
    
    <div id="attachment_405" style="width: 493px" class="wp-caption alignnone">
      <a href="http://ibrahimokdad.com/wp-content/uploads/2017/03/binormal-distribution.jpg"><img class="size-full wp-image-405" src="http://ibrahimokdad.com/wp-content/uploads/2017/03/binormal-distribution.jpg" alt="binormal distribution image showing 2 bells" width="483" height="500" srcset="http://ibrahimokdad.site/wp-content/uploads/2017/03/binormal-distribution.jpg 483w, http://ibrahimokdad.site/wp-content/uploads/2017/03/binormal-distribution-290x300.jpg 290w" sizes="(max-width: 483px) 100vw, 483px" /></a>
      
      <p class="wp-caption-text">
        source: https://i.stack.imgur.com/T1krq.jpg
      </p>
    </div>
    
    <p style="text-align: justify;">
      <p style="text-align: justify;">
        Tip: relative frequency is when all values of bars total 100; usually seen in bar chart.
      </p>
      
      <p style="text-align: justify;">
        <p style="text-align: justify;">
          Tech Tip I: Google SpreadSheet : Ctrl+Down to go to last record; Ctrl+Shift+Up to select from current cell all the way up.
        </p>
        
        <p style="text-align: justify;">
          Tech Tip II: In Google SpreadSheet ; Shift(select cells) then Ctrl Shift Down to select all data.
        </p>
        
        <p style="text-align: justify;">
          <p style="text-align: justify;">
            Range in histogram is max Value &#8211; min Value. This is good to show you how spread the distribution is or variability.
          </p>
          
          <p style="text-align: justify;">
            Remember what I said <a href="http://ibrahimokdad.com/2017/02/26/descriptive-statistics-the-building-blocks/">earlier </a>about histograms that they have ranges and the larger the range the larger the frequency value it could contain? Well there is a risk to that as well and is loosing details. Actually it can even distort result. Say for example age groups; you made the groups of 20-40 and 40-60. You could lose a lot of details there as the gap is quite high. Luckily statisticians have taken this into consideration and came up with ways we can enhance our dealing with numbers. One way is using cutoffs. That way we will be able to actually tell where say 90% of data falls in and can actually tell if a point is an outlier (how cool is that!).
          </p>
          
          <p style="text-align: justify;">
            So one way to deal with outliers is to cutoffs maximum 25% and minimum 25%. So split the distribution in half and then half each half. That way your distribution would be divided to 4 regions (statistically called Quartile). Each region/Quartile is 25%. Cumulatively they form 100%. Most of the data would fall in what is called Interquartile range:
          </p>
          
          <div id="attachment_406" style="width: 316px" class="wp-caption alignnone">
            <a href="http://ibrahimokdad.com/wp-content/uploads/2017/03/quartiles.png"><img class="size-full wp-image-406" src="http://ibrahimokdad.com/wp-content/uploads/2017/03/quartiles.png" alt="quartiles image showing regions" width="306" height="158" srcset="http://ibrahimokdad.site/wp-content/uploads/2017/03/quartiles.png 306w, http://ibrahimokdad.site/wp-content/uploads/2017/03/quartiles-300x155.png 300w" sizes="(max-width: 306px) 100vw, 306px" /></a>
            
            <p class="wp-caption-text">
              source: Unknown
            </p>
          </div>
          
          <p style="text-align: justify;">
            <p style="text-align: justify;">
              Interquartile Range (IQR) is about 50%; 25 | 25 | 25 | 25 the IQR cumulates 50%. To consider the 50% as a region (25% each side) of outliers is an overkill.<span style="font-weight: 400;"> As you can see you are not considering all of data here. That is why is it preferable to go for other approaches. So now it is clear that when you specify quartiles and decide to calculate the mean you still need to </span><b>include </b><span style="font-weight: 400;">the outlier values.</span>
            </p>
            
            <p style="text-align: justify;">
              We have seen that medians are good but discards the data points value and is more concerned with the order and position of data points; the mean on the other hand is good but gets affected by the values of outliers and hence can distort results. So one way to overcome this and measure variability in a population or sample is through measure the distance of each data point to the mean (called deviation = $x-\mu$); can also be (x-\overline{x})  if you think about it is actually the length from the point to the mean.
            </p>
            
            <p style="text-align: justify;">
              In order for us not to get negative values we square the values (imagine a distance written as a negative value that would be weird).So we square deviations to get rid of any negative sign that might occur. We then get the average of all the squared distances (called variance= $\sum(x_i &#8211; \mu)/ n $ OR $ \sum(x_i &#8211; \overline x)/ n$ ). Remember when I just said the length just now. Now square the length what will you get?
            </p>
            
            <p style="text-align: justify;">
              Okay I will tell you. Remember what the area of the square is? The area of the square is the length of any side squared. Guess what? it is the same thing. So the squared distance from the point to the mean is the area from the point to the mean. So when you get the variance you are getting the sum of all <em><u>areas</u></em> to the mean. remember here that it is squared; so if $ was as the type of values it would mean that if we want to get $ you need to take the square root.  if it was lengths then the square root would result in the length of just one size. The value of the square root here is called the <strong>standard deviation</strong> and is the standard method to measure <strong>variability</strong>. So what we did here is that we got the average of all distances of values (squared) to mean and got the square root.
            </p>