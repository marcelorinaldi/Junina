<?php

require '../bancosenac.php';

$conn = new mysqli($host, $username, $password, $dbname);

// Verifica se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta SQL para selecionar todos os dados da tabela participantes
$sql = "SELECT id, nome, curso, categoria, total FROM app_junina_v6.participantes";
$result = $conn->query($sql);

// Verifica se há resultados para a consulta
if ($result->num_rows > 0) {
    // Array para armazenar os resultados da consulta
    $resultados = array();

    // Loop pelos resultados da consulta
    while($row = $result->fetch_assoc()) {
        // Converter o valor da coluna 'id' para inteiro
        $row['id'] = intval($row['id']);
        // Adicionar os dados do usuário ao array
        $resultados[] = $row;
    }

    header('Content-Type: application/json');
    echo json_encode($resultados, JSON_PRETTY_PRINT);
} else {
    // Se não houver resultados, retorna uma mensagem de erro
    echo json_encode(["success" => false, "message" => "Nenhum resultado encontrado."]);
}

// Fecha a conexão com o banco de dados
$conn->close();
?>
