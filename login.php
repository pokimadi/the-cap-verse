<?php
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);
    $userName = $_POST["user"];
    $pass = $_POST["pass"];

    if($userName == "1w8vfurg" && $pass=="fcM6K1k99ZhpckvHQgS5VCKNqfqpuuMifl5EMkx7bTY="){
        session_start();
        $_SESSION["loggedIn"] = true;
        echo "Success";
    }else{
        echo "Fail";
    }
?>