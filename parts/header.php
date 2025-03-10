<?php ?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo $title; ?></title>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
  <?php
        if($title == 'Babilono vartai') {
            echo '<link rel="stylesheet" href="assets/css/player.css">';
        }
    ?>
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" href="assets/img/fav2.jpg">
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-140396104-1"></script>
  <script>
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'UA-140396104-1');
  </script>

  <!--fb-->


  <meta property="og:title" content="Babilono vartai" />
  <meta property="og:description"
    content="Aš medelį iškirtau, Peiliu skūrą nuskutau, Rankom žiedus surinkau Ir į bongą sukišau" />
  <meta property="og:image" content="https://www.babilonovartai.lt/assets/img/bv.jpg" />

</head>