<?php

// Conectar ao banco de dados		
require '../bancosenac.php';

$conn = new mysqli($host, $username, $password, $dbname);

// Verifica se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Prepara e executa a consulta SQL de forma segura
$nome = $_GET['nome'];
$login = $_GET['login'];
$senha = $_GET['senha'];

$sql = "SELECT id, nome, login FROM usuario WHERE login = ? AND senha = ? LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ss', $login, $senha);
$stmt->execute();
$result = $stmt->get_result();

// Verifica se há resultados para a consulta
if ($result->num_rows > 0) {
    $usuarios = array();

    while ($row = $result->fetch_assoc()) {
        // Converter o valor da coluna 'id' para inteiro
        $row['id'] = intval($row['id']);
        // Adicionar os dados do usuário ao array
        $usuarios[] = $row;
    }

    // Retorna os resultados como JSON
    header('Content-Type: application/json');
    echo json_encode($usuarios, JSON_PRETTY_PRINT);

} else {
    // Se não houver resultados, retorna uma mensagem de erro
    echo json_encode(array("error" => "Nenhum usuário encontrado"));
}

// Fecha a conexão com o banco de dados
$stmt->close();
$conn->close();

?>
