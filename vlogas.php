<?php
$title = 'Vlogas | Babilono vartai';
include('parts/header.php'); ?>


<body>

<div class="content-wrap">
    <?php include('parts/menu.php'); ?>

    <div class="content-wrap__section">


        <h1>Vlogas</h1>

        <h6>Kaziuko dešros beieškant</h6>
        <div class="published">Kovo 4, 2019</div>

        <div class="iframe-container-wrap iframe-width">
            <div class="iframe-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/bLP5FlELHb0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div>

    <?php include('parts/footer.php'); ?>
    <button class="back-to-top" title="Go to top"><i class="fas fa-hand-point-up"></i></button>
</div>

<?php include('parts/scripts.php'); ?>

</body>
</html>
