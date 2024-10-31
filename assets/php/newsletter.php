<?php
    if(isset($_GET["submit"])){
        $email = $_GET["email"];

        echo "Olá $email !";

        echo "<script>
        var email = '" . addslashes($email) . "';
        console.log(email);
        </script>";
    }
?>