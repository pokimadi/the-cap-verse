<?php 
session_start();

?>
<!doctype html>
<html lang="en">
  <head>
    <title>CMS</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style5.css">
    <link rel="stylesheet" href="styleAdmin.css">
  </head>
  <body>

    <div class="container">
      <button id="logout" class="btn btn-danger">Logout</button>
      <?php if($_SESSION["loggedIn"] == 0){?>
      <div id="login">
        <input id ="username" type="text" placeholder="username">
        <input id ="password" type="password" placeholder="password">
        <button id="login-button" class="btn btn-primary">Login</button>
        <p id="login-message"></p>
      </div>
      <div id="cover"></div>
      <?php } ?>
      <?php if($_SESSION["loggedIn"] == 1){ ?>
      <div class="form-group">
        <label for="sel1">Select block:</label>
        <select class="form-control" id="sel1">
          <option value="ABOUT">ABOUT</option>
          <option value="GLOBAL">GLOBAL</option>
          <option value="TEAM">TEAM</option>
          <option value="ECOSYSTEM">ECOSYSTEM</option>
          <option value="INVESTING">INVESTING</option>
          <option value="FUND">FUND</option>
          <option value="CONTACT">CONTACT</option>
        </select>
      </div>
      <div id="admin-container"></div>
      <p id="status"></p>
      <?php } ?>
    </div>
    <!-- Optional JavaScript -->
    <?php if($_SESSION["loggedIn"] == 1){ ?>
      <script src="admin1.js"></script>
    <?php } ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/hmac-sha256.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/enc-base64.min.js"></script>
    
    <script src="login.js"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>