---
layout: layouts/post.njk
title: About Me
templateClass: tmpl-post
eleventyNavigation:
  key: About Me
  order: 3
---

I am a person that writes stuff.

<p id="pForPlace" onclick="readFromFirebaseParam('textPlace','pForPlace')">Click me to change my text color.</p>

<div id="divForPlace">
</div>

<!--
<script src='/scripts/saveToFirebase.js'>
</script>
-->

<script>
  // document.addEventListener('DOMContentLoaded', function() {
  //   alert("Ready!");
  //   readFromFirebaseParam('textPlace','pForPlace');
  //   }, 
  // false);

  // window.onload = readFromFirebaseParam('textPlace','pForPlace');
  console.log(`hello`);
  readFromFirebaseParam('textPlace','divForPlace');
</script>