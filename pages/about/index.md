---
layout: layouts/post.njk
title: About Us
templateClass: tmpl-post
eleventyNavigation:
  key: About Us
  order: 2
---

In this section you can read a bit about us and about the location we have choosen.

## It all started with a cupcake and a candle

<p id="pForUs"></p>

## Location history

<p id="pForPlace"></p>

<script>
  // Query db for info on place and put info in right paragraph
  readFromFirebaseParam('textUs','pForUs');
  // Query db for info on place and put info in right paragraph
  readFromFirebaseParam('textPlace','pForPlace');
</script>