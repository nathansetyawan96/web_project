<?php  
  $text = $_GET['caption'];
  if (!empty(text)) {
    $tmp = exec("python script.py $text");
    echo $tmp;
  }
?>