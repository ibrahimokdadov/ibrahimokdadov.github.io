---
id: 143
title: Importing SSL from third party to smarterasp.net
date: 2014-12-02T12:15:08+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=143
permalink: /2014/12/02/importing-ssl-from-third-party-to-smarterasp-net/
suevafree_template:
  - full
categories:
  - Code
  - Content
tags:
  - asp.net
  - https
  - iis
  - security
  - smarterasp
  - ssl
---
I will be demonstrating the process of importing an ssl certificate from a third party to smarterasp hosting; It should be somewhat the same steps of your hosting is someone else. Their FAQ was a little vague so I am taking the liberty to showing the process here.

I went on and purchased a standard SSL it will cost you an average of 8$/yr. (You can opt in _ssls.com_ they have a sweet wizard that after answering its questions, it will suggest a suitable type of ssl). Now, once the payment is done. Go to _MySsl_ menu item inside _ssls.com_ (you will see it after logging in _ssls.com_). You will see that in order to activate your ssl certificate you will need two main things from your host:

1- A static IP

2- A CSR (*get this from your server only)

the first in Smarterasp host will cost you about 24$ dollars/yr. To do this go to you _Account_ and Under _SSL manager_, click on _My SSL List_

&nbsp;

<div id="attachment_146" style="width: 332px" class="wp-caption alignnone">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2014/12/SSL_MANGER1.png"><img class="wp-image-146 size-full" src="http://ibrahimokdad.com/wp-content/uploads/2014/12/SSL_MANGER1.png" alt="SSL MANGER location image" width="322" height="605" /></a>
  
  <p class="wp-caption-text">
    SSL Manager menu item
  </p>
</div>

Once you are inside _My Ssl List_ you will see a button &#8220;Import Existing SSL Cert&#8221;, if You click it you will be asked to buy an IP. There is another way to do this is by clicking not on SSL MANGER under Hosting Control Panel but Under _Account_ &#8211;> _Add-ON Products_ and when you are inside you will see the whole list of addons one of which is the IP _(STATICIP01)_

&nbsp;

<div id="attachment_145" style="width: 459px" class="wp-caption alignnone">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2014/12/Addon_IP_Purchase1.png"><img class="wp-image-145 size-large" src="http://ibrahimokdad.com/wp-content/uploads/2014/12/Addon_IP_Purchase1-449x304.png" alt="Addon IP Purchase Image" width="449" height="304" /></a>
  
  <p class="wp-caption-text">
    Purchase IP from Addon Menu Item
  </p>
</div>

&nbsp;

Now after you purchase your IP there is another important step and it also involves payment. In order to activate your SSL certificate in ssls.com you will need to insert the CSR obtained from your host. To do that in smarterasp hosting you need to raise a ticket and request CSR from them. Now they will ask you to make a one time payment of 19.95$.  If payment did not work on your account under billing use this link: http://www.smarterasp.net/cc

After you have deposited that sum, fill in the details which are:

Common Name:*  
Organization:*  
Department:*  
City:*  
State/Province:*  
Country:*

Here is the explanation, I do not have to re-write it, [spacereg](https://www.spacereg.com/webcert_csr.html) done it beautifully; so I will let it as they put it with their own examples:

<table class="tb1">
  <tr>
    <th class="tb1">
      Distinguished Name Field
    </th>
    
    <th class="tb1">
      Explanation
    </th>
    
    <th class="tb1">
      Example
    </th>
  </tr>
  
  <tr>
    <td class="tb1">
      Common Name
    </td>
    
    <td class="tb1">
      The <b>fully qualified domain name</b>(FQDN) for your web server. This must be an exact match.
    </td>
    
    <td class="tb1">
      If you intend to secure the URL<a href="https://www.spacereg.com/">https://www.spacereg.com/</a>, then your CSR&#8217;s common name must be:<br /> <b>www.spacereg.com</b>
    </td>
  </tr>
  
  <tr>
    <td class="tb1">
      Organisation
    </td>
    
    <td class="tb1">
      The exact legal name of your organisation. Do not abbreviate your organisation name.
    </td>
    
    <td class="tb1">
      SpaceSurfer Ltd.
    </td>
  </tr>
  
  <tr>
    <td class="tb1">
      Organisation Unit
    </td>
    
    <td class="tb1">
      Section of the organisation, can be left empty if this does not apply to your case.
    </td>
    
    <td class="tb1">
      Marketing
    </td>
  </tr>
  
  <tr>
    <td class="tb1">
      City/Locality
    </td>
    
    <td class="tb1">
      The city where your organisation is legally located.
    </td>
    
    <td class="tb1">
      Balham
    </td>
  </tr>
  
  <tr>
    <td class="tb1">
      State/County/Region
    </td>
    
    <td class="tb1">
      The state/county/region where your organisation is legally located. Must not be abbreviated.
    </td>
    
    <td class="tb1">
      London
    </td>
  </tr>
  
  <tr>
    <td class="tb1">
      Country
    </td>
    
    <td class="tb1">
      The <a href="https://www.spacereg.com/help_iso_3166_country_codes.html">two-letter ISO abbreviation for your country</a>.
    </td>
    
    <td class="tb1">
      GB
    </td>
  </tr>
  
  <tr>
    <td class="tb1">
      Email address
    </td>
    
    <td class="tb1">
      The email address used to contact your organisation.
    </td>
    
    <td class="tb1">
      info@spacereg.com
    </td>
  </tr>
</table>

After you reply to the ticket with the information needed, they will rely back with the CSR (they are usually quick)

Now go to your ssls.com account to activate your Ssl Certificate _remember _MYssl_ menu item is where you should click to activate

<div id="attachment_149" style="width: 459px" class="wp-caption alignnone">
  <a href="http://ibrahimokdad.com/wp-content/uploads/2014/12/MYSSL_ACTIVATION.png"><img class="wp-image-149 size-large" src="http://ibrahimokdad.com/wp-content/uploads/2014/12/MYSSL_ACTIVATION-449x215.png" alt="MYSSL ACTIVATION screenshot" width="449" height="215" /></a>
  
  <p class="wp-caption-text">
    A look at how ssls.com Myssl menu item looks like
  </p>
</div>

Copy the CSR starting with: &#8212;&#8211;BEGIN CERTIFICATE REQUEST&#8212;&#8211; to the appropriate text area. It is best that you specify the servcer type. for smarterasp it is microsoft IIS

After that step you will be asked for an approver email; what most suggest is you create an email like:

admin@yourdomain.com  
administrator@yourdomain.com  
webmaster@yourdomain.com  
hostmaster@yourdomain.com  
postmaster@yourdomain.com

It is all for security reason. When you set that you will be prompted with the address and the rest of the information. It is just a matter of fill in the blanks. Now the approver email you set will recieve the instructions on how to set the SSL certificate. so be cautious what email you are using.

When you get your certificate you generally get it in .cer format and in text format as well. If you are using windows hosting you will need to convert it to .pfx format. There are many talks on how to do that; the short and straight forward solution is to let your host do it; because to get the pfx format you need the private key and the private key is only generated from server that generated the CSR Key. The ssl provider can&#8217;t do anything without the private key. The bottom line is the host provider should be doing it for you.

As you can see, you might be tempted to go for a third party SSL but you must take on the troubles that come along (not many to be honest but they are there), otherwise you are better off just buying it from the host and saving your self the trouble and time.

Voila that is it. you are now holding an SSL; how cool is that ha&#8230;