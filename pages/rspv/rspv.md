---
layout: layouts/post.njk
title: RSPV
templateClass: tmpl-post
eleventyNavigation:
  key: RSPV
  order: 5
---

Please confirm your partecipation filling this form before Aug 1st.

<form class="form-signin">
    <p> Insert your email: </p>
    <label for="inputEmail" class="sr-only">Email Address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus><br>
    <p> Insert your country of origin: </p>
    <input type="radio" id="sweden" name="origin" value="sweden">
    <label for="sweden">sweden</label><br>
    <input type="radio" id="italy" name="origin" value="italy">
    <label for="italy">italy</label><br>
    <input type="radio" id="other" name="origin" value="other">
    <label for="other">other</label><br>
    <p> Are you joining? </p>
    <input type="radio" id="yes" name="answer" value="yes">
    <label for="yes">yes</label><br>
    <input type="radio" id="no" name="answer" value="no">
    <label for="no">no</label>
    <br></br>
    <button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="saveToFirebase2()">Submit!</button>
</form>