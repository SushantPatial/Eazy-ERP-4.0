<?php
  $link = mysqli_connect("", "", "", "");

  if (mysqli_connect_error())
  {
    die ("Database connection error. Please try again later.");
  }
?>