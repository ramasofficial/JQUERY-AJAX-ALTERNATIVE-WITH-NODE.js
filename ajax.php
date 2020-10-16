<?php

$array = [];
$id = $_GET['id'];

if($id == 1) {
    $array[] = [
        'id' => '1',
        'name' => 'Ramas',
        'position' => 'Full-stack programuotojas',
    ];
}

if($id == 2) {
    $array[] = [
        'id' => '2',
        'name' => 'Vytautas',
        'position' => 'IT specialistas',
    ];
}

if($id == 3) {
    $array[] = [
        'id' => '3',
        'name' => 'Karolis',
        'position' => 'IT specialistas',
    ];
}

if($id == 4) {
    $array[] = [
        'id' => '4',
        'name' => 'Remigijus',
        'position' => 'IT specialistas',
    ];
}

echo json_encode($array);

?>