<?php
// Conectar ao banco de dados
date_default_timezone_set('America/Sao_Paulo');

$datax = json_decode(file_get_contents('php://input'), true);
$token = $datax['token'];

if (isset($token) && !empty($token) && $token === 'Q!W@ee344%%R') {
    require '../bancosenac.php';

    try {
        $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Receber os dados do aplicativo
        $data = json_decode(file_get_contents('php://input'), true);

        $nome = $data['nome'];
        $curso = $data['curso'];
        $n1 = $data['n1'];
        $n2 = $data['n2'];
        $n3 = $data['n3'];
        $n4 = $data['n4'];
        $total = $data['total'];
        //$tipo = $data['tipo'];
        $jurado_id = $data['jurado_id'];
        $jurado_nome = $data['jurado_nome'];
        //$tempo = date("Y-m-d H:i:s");

        // Inserir os dados na tabela 'participantes'
        $sql = "INSERT INTO participantes (nome, curso n1, n2, n3, n4, total, jurado_id, jurado_nome, categoria) VALUES (:nome, :curso, :n1, :n2, :n3, :n4, :total, :jurado_id, :jurado_nome, :categoria)";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':curso', $curso);
        $stmt->bindParam(':n1', $n1);
        $stmt->bindParam(':n2', $n2);
        $stmt->bindParam(':n3', $n3);
        $stmt->bindParam(':n4', $n4);
        $stmt->bindParam(':total', $total);
        //$stmt->bindParam(':tipo', $tipo);
        $stmt->bindParam(':jurado_id', $jurado_id);
        $stmt->bindParam(':jurado_nome', $jurado_nome);
        //$stmt->bindParam(':tempo', $tempo);
        $stmt->execute();

        // Retornar uma resposta ao aplicativo
        $response = array('success' => true, 'message' => ''.$tempo.', Votação realizada!');
        echo json_encode($response);
    } catch (PDOException $e) {
        // Em caso de erro, retornar uma mensagem de erro
        $response = array('success' => false, 'message' => 'Erro ao salvar: ' . $e->getMessage());
        echo json_encode($response);
    }
} else {
    $response = array('success' => false, 'message' => 'Token inválido');
    echo json_encode($response);
}
?>
