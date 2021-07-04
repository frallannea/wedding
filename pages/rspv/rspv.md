---
layout: layouts/post.njk
title: RSPV
templateClass: tmpl-post
eleventyNavigation:
  key: RSPV
  order: 4
---

Please confirm your partecipation filling this form before Aug 1st.

## Form

<form class="form-signin">
    <p> Insert your contacts (personal mail, phone) in case we need to contact you: </p>
    <label for="userContact" class="sr-only">Email Address</label>
    <input id="userContact" class="form-control" placeholder="Email address, phoneNr" required autofocus><br>
    <p> Insert your country of origin: </p>
    <input type="radio" id="sweden" name="origin" value="sweden">
    <label for="sweden">sweden</label><br>
    <input type="radio" id="italy" name="origin" value="italy">
    <label for="italy">italy</label><br>
    <input type="radio" id="other" name="origin" value="other" checked="checked">
    <label for="other">other</label><br>
    <p> Are you joining? </p>
    <input type="radio" id="yes" name="answer" value="yes" checked="checked">
    <label for="yes">yes</label><br>
    <input type="radio" id="no" name="answer" value="no">
    <label for="no">no</label>
    <br></br>
    <button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="saveFormToFirebase()">Submit!</button>
</form>

## Stats

The following chart is generated using the external (npm) package chartjs.

<canvas id="myChart" width="400" height="400"></canvas>
<!-- Include "locally" chart js dependencies
<link rel="stylesheet" href="/assets/Chart.min.css">
<script src="/assets/Chart.min.js"></script> -->
<!-- Include "remotely" chart js dependencies -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3"></script>
<!-- Script creating chart using chart js library -->
<script src="./scripts/charttest.js"></script>