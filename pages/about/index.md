---
layout: layouts/post.njk
title: About
templateClass: tmpl-post
eleventyNavigation:
  key: About
  order: 2
---

In this section you can read a bit about us and about the location we have choosen.

## It all started with a cupcake and a candle

<p>
  <img id=imgForUs class=illustration>
</p>

<p id="pForUs"></p>

## Location history

<p>
  <img id=imgForPlace class=illustration>
</p>

<p id="pForPlace"></p>

<script>
  // Query db for info on place and put info in right paragraph
  readFromFirebaseParam('textUs','pForUs');
  // Query db for info on place and put info in right paragraph
  readFromFirebaseParam('textPlace','pForPlace');
  // Query db for picture of place and put in right img.src
  readFromFirebasePicParam('imagePlace', 'imgForPlace');
  // Query db for picture of place and put in right img.src
  readFromFirebasePicParam('imageUs10', 'imgForUs');
</script>