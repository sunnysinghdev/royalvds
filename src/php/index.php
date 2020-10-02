<?php

require_once "config.php";
require_once "helper.php";
require_once "data.php";
session_start();

$data = new Data();
$data->incrementVistorsCount();

if (!isset($_SESSION['counter'])) {
    $data->incrementUniqueVistorsCount();
    $_SESSION['counter'] = $data->getUniqueVistorsCount();
}
echo json_encode($data->getData());
