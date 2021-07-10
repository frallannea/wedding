---
layout: layouts/post.njk
title: RSVP
templateClass: tmpl-post
eleventyNavigation:
  key: RSVP
  order: 4
---

Please confirm your partecipation filling this form before Aug 1st.

Note that:
- by saying "yes", only the owner of the account you used
to access the site will be registered;
- you can always get back to this page and update your answer, however once you update your previous answers will be deleted;
- unfortunately, due to the current COVID related restrictions, we cannot invite more than a restricted number of persons. Hence, **the +1 option should be used only by those who have
been asked to do so**.

## Form

<form class="form-signin">
    <p> Insert your contacts (personal mail or phone) in case we need to contact you: </p>
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
    <input type="radio" id="yesPlus" name="answer" value="yesPlus">
    <label for="yesPlus">yes +1 (friend/partner)</label><br>
    <input type="radio" id="no" name="answer" value="no">
    <label for="no">no</label><br>
    <p> Something we should know? </p>
    <textarea class="form-control" id="rsvpFormControlTextarea1" rows="3"></textarea>
    <br></br>
    <button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="saveRsvpFormToFirebase()">Submit!</button>
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