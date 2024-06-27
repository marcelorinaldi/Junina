<?php

    // Receber os dados do aplicativo
    $data = json_decode(file_get_contents('php://input'), true);
   $titulo = $data['titulo'];
	$response = array('success' => true, 'message' => 'Título salvo com sucesso');
    echo json_encode($response);
   
?>
