---
layout: layouts/post.njk
title: Info
templateClass: tmpl-post
eleventyNavigation:
  key: Info
  order: 4
---

In this section you can get an idea on how the day will look like,
and what you can do to make our day special.

## Preliminary plan

<p id="pForSchedule"></p>

## How to contribute

Do you want to contribute making our day even more special
with a speech, a dance, or a favourite activity?

Contact one of our Toastmasters:
<p id="pForToast"></p>

<script>
  readFromFirebaseParam('textSchedule','pForSchedule');
  readFromFirebaseParam('textToast','pForToast');
</script>
