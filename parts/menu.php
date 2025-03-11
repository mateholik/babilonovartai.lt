<div class="content-wrap__menu-btn"><span>Meniu</span></div>
<div class="content-wrap__menu">
  <a href="/" class="menu-logo">
    <img src="assets/img/bv.jpg" width="230" height="226" alt="logo">
  </a>
  <ul class="menu-list">
    <?php
            if($title != 'Babilono vartai') {
                echo '<a href="/"><li>Pradžia</li></a>';
            }
        ?>
    <li>
      <a href="/istorija.php">Istorija</a>
    </li>
    <li>
      <a href="/nariai.php">Nariai</a>
    </li>
    <li>
      <a href="/akordai.php">Akordai</a>
    </li>

  </ul>
  <div class="menu-socials">
    <a class="menu-socials__mail" target="_blank" href="https://www.flowcode.com/page/babilonovartai">MES INTERNETE</a>
    <a class="menu-socials__mail" href="mailto:babilonovartai@gmail.com">babilonovartai@gmail.com</a>
    <div class="socials">
      <a class="menu-socials__icon" href="https://www.facebook.com/babilonovartai/" target="_blank"><i
          class="fab fa-facebook-square"></i></a>
      <a class="menu-socials__icon" href="https://www.instagram.com/babilonovartai/" target="_blank"><i
          class="fab fa-instagram"></i></a>
      <a class="menu-socials__icon" href="https://www.youtube.com/channel/UC2BDlF2bZKR8OnbRWuhmj2g/videos"
        target="_blank"><i class="fab fa-youtube"></i></a>
    </div>
  </div>
</div>