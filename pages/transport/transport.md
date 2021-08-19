---
layout: layouts/post.njk
title: Transport
templateClass: tmpl-post
eleventyNavigation:
  key: Transport
  order: 4
---

Thanks for showing interest in joining our wedding!

We have decided to offer transportation (bus) to and from the wedding location.

<div class="warning">
NOTE:
Everyone who is interested can use this transport,
not only the people who initially showed interest.
There will be a place for all!

NOTE:
Plan to arrive at least 10 minutes earlier than the times listed below.
Those are departure time!
</div>

<p id="pForTransport"></p>

You can decide "last minute", but you can let us know
if you are going to take the bus by filling the form below.
We are interested in knowing from which stop you plan to travel,
so we can make sure you will not be forgotten :)

<form class="form-signin">
    <p> On the way TO the location I want to: </p>
    <input type="radio" id="ToOd" name="ToAnswer" value="ToOd" checked="checked">
    <label for="ToOd">take the bus from Odenplan</label><br>
    <input type="radio" id="ToBr" name="ToAnswer" value="ToBr">
    <label for="ToBr">take the bus from Brommaplan</label><br>
    <input type="radio" id="ToNone" name="ToAnswer" value="ToNone">
    <label for="ToNone">travel with an own transportation/public transport</label>
    <p> On the way BACK from the location I want to: </p>
    <input type="radio" id="BackOd" name="BackAnswer" value="BackOd" checked="checked">
    <label for="BackOd">take the bus to Odenplan</label><br>
    <input type="radio" id="BackBr" name="BackAnswer" value="BackBr">
    <label for="BackBr">take the bus to Brommaplan</label><br>
    <input type="radio" id="BackNone" name="BackAnswer" value="BackNone">
    <label for="BackNone">travel with an own transportation/public transport</label>
    <br></br>
    <button class="btn btn-lg btn-primary btn-lock" type="submit" onclick="saveTranspFormToFirebase()">Submit!</button>
</form>

<script>
  readFromFirebaseParam('textTransport','pForTransport');
</script>