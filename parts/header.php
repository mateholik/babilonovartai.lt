<?php 
// Ensure a valid title is set to avoid undefined variable issues
if (!isset($title)) {
    $title = "Babilono vartai"; 
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

  <meta name="keywords" content="babilono vartai, regis, muzikantai" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />



  <!-- Open Graph (Facebook & LinkedIn) -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="<?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?>" />
  <meta property="og:description"
    content="Aš medelį iškirtau, Peiliu skūrą nuskutau, Rankom žiedus surinkau Ir į bongą sukišau" />
  <meta property="og:image" content="https://www.babilonovartai.lt/assets/img/bv.jpg">
  <meta property="og:url" content="https://babilonovartai.lt/" />
  <meta property="og:locale" content="lt_LT" />



  <!-- Preconnect for Performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Babilono Vartai",
    "description": "Aš medelį iškirtau, Peiliu skūrą nuskutau, Rankom žiedus surinkau Ir į bongą sukišau",
    "url": "https://babilonovartai.lt/",
    "image": "https://babilonovartai.lt/assets/img/bv.jpg",
    "genre": "Reggae",
    "sameAs": [
      "https://www.facebook.com/babilonovartai",
      "https://www.instagram.com/babilonovartai",
      "https://www.youtube.com/channel/UC2BDlF2bZKR8OnbRWuhmj2g/videos"
    ],
    "foundingLocation": {
      "@type": "Place",
      "name": "Vilnius, Lithuania"
    },
    "foundingDate": "2013",
  }
  </script>

</head>