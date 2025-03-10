
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<?php
if($title == 'Babilono vartai') {
    echo '<script src="assets/js/fit-videos.js"></script>';
    echo '<script src="assets/js/sketch.min.js"></script>';
    echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js"></script>';
    echo '<script> var page = "main"; </script>';
}

if($title == 'Istorija | Babilono vartai') {
    echo '<script> var page = "istorija"; </script>';
}
if($title == 'Nariai | Babilono vartai') {
    echo '<script> var page = "nariai"; </script>';
}
if($title == 'Akordai | Babilono vartai') {
    echo '<script> var page = "akordai"; </script>';
}
if($title == 'Vlogas | Babilono vartai') {
    echo '<script> var page = "vlogas"; </script>';
}
?>

<script src="assets/js/main.min.js"></script>
