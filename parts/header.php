<?php 
// Ensure a valid title is set to avoid undefined variable issues
if (!isset($title)) {
    $title = "Default Title"; 
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></title>
  <meta name="description"
    content="Regio grupė Babilono Vartai, regio vaibas tiesiai iš Babilono. Akordai, nariai, grupės istorija">

  <?php if ($title == 'Babilono vartai') : ?>
  <link rel="stylesheet" href="assets/css/player.css">
  <?php endif; ?>

  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="icon" href="assets/img/fav2.jpg">

  <!-- Open Graph Meta Tags for SEO -->
  <meta property="og:title" content="Babilono vartai">
  <meta property="og:description"
    content="Aš medelį iškirtau, Peiliu skūrą nuskutau, Rankom žiedus surinkau Ir į bongą sukišau">
  <meta property="og:image" content="https://www.babilonovartai.lt/assets/img/bv.jpg">
</head>