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
    <p> Are you joining? </p>
    <input type="radio" id="yes" name="answer" value="yes" checked="checked">
    <label for="yes">yes</label><br>
    <input type="radio" id="yesPlus" name="answer" value="yesPlus">
    <label for="yesPlus">yes +1 (friend/partner)</label><br>
    <input type="radio" id="no" name="answer" value="no">
    <label for="no">no</label><br>
    <p> Insert your contacts (personal mail or phone) in case we need to contact you: </p>
    <label for="userContact" class="sr-only">Email Address</label>
    <input id="userContact" class="form-control" placeholder="Email address, phoneNr" required autofocus><br>
    <p> Would you be interested in traveling to the wedding location with other guests in a small bus from the city center? </p>
    <input type="radio" id="busYes" name="busAnswer" value="yes">
    <label for="busYes">yes, I'd like to share transportation with other guests</label><br>
    <input type="radio" id="busNo" name="busAnswer" value="no" checked="checked">
    <label for="busNo">no, I prefer fixing an own transporation or to use public transport</label><br>
    <p> Something else we should know (e.g. allergies)? </p>
    <textarea class="form-control" id="rsvpFormControlTextarea1" rows="3"></textarea>
    <br></br>
    <button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="saveRsvpFormToFirebase()">Submit!</button>
</form>