<?php
    header('Access-Control-Allow-Origin: *');
    header("Content-Type: application/json");
    $_DATA = (file_get_contents("php://input")) ? json_decode(file_get_contents("php://input"), true) : ["a"];
    $a = (integer) 0;
    $b = (integer) 0;
    extract($_DATA);
    $json = (string) <<<JSON
JSON;

    $A = (string) ($a) ? "TRUE" : "FALSE";
    $B = (string) ($b) ? "TRUE" : "FALSE";
    $json = (string) <<<JSON
    {
        "Servidor": "${!${''} = $_SERVER['HTTP_HOST']}",
        "AND": {
            "A": "$A",
            "B": "$B",
            "A AND B": "${!${''} = ($a && $b) ? 'TRUE' : 'FALSE'}"
        },
        "OR":{
            "A": "$A",
            "B": "$B",
            "A OR B": "${!${''} = ($a || $b) ? 'TRUE' : 'FALSE'}"
        },
        "XOR":{
            "A": "$A",
            "B": "$B",
            "NOT A": "${!${''} = (!$a) ? 'TRUE' : 'FALSE'}",
            "NOT B": "${!${''} = (!$b) ? 'TRUE' : 'FALSE'}"
        }
    }
JSON;
    print_r($json);

?>