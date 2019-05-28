---
id: 117
title: jquery addresspicker and bootstrap modal
date: 2014-07-08T10:55:05+00:00
author: iam@ibrahimokdad.com
layout: post
guid: http://ibrahimokdad.com/?p=117
permalink: /2014/07/08/jquery-addresspicker-and-bootstrap-modal/
suevafree_template:
  - full
categories:
  - Code
tags:
  - addresspicker
  - autocomplete
  - bootrstap
  - google maps
  - maps
  - modal
  - search
---
Peace&#8230;

It has been a while since I last posted some code&#8230;

In case you wanted to use google maps in your website here is a great plugin:

<a style="line-height: 1.5em;" title="jquery addresspicker" href="http://xilinus.com/jquery-addresspicker/demos/">jquery addresspicker</a>

If you want to implement it in your website you might face some issues especially with the autocomplete thingy. These two issues are the most prominent:

&#8211; Autocomplete would not show in modal (especially if you are using bootstrap)

<p style="padding-left: 60px;">
  use this snippet in your template css to ovveride jquery ui <em>z-index</em>:<br /> <code>&lt;br />
.ui-autocomplete {&lt;br />
z-index: 1051 !important;} </code>
</p>

&#8211; The autocomplete would not stick to the input form.

modify jquery.ui.addresspicker.js (of the plugin I mentioned earlier) and find

<p style="padding-left: 60px;">
  <code>&lt;br />
this.element.autocomplete($.extend({&lt;br />
source: $.proxy(this._geocode, this),&lt;br />
focus: $.proxy(this._focusAddress, this),&lt;br />
select: $.proxy(this._selectAddress, this),&lt;br />
}), this.options.autocomplete);&lt;br />
</code>
</p>

replace with this

<p style="padding-left: 60px;">
  <code>&lt;br />
this.element.autocomplete($.extend({&lt;br />
source: $.proxy(this._geocode, this),&lt;br />
focus: $.proxy(this._focusAddress, this),&lt;br />
select: $.proxy(this._selectAddress, this),&lt;br />
appendTo: "#add"&lt;br />
//appendTo div where input is so it would stick to it&lt;br />
}), this.options.autocomplete);&lt;br />
</code>
</p>

<span style="line-height: 1.5em;">as you can see we have appended </span> _#add_ div. it is the div the has out input (search box for the autocomplete)

&nbsp;