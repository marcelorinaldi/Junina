<?php
// Conectar ao banco de dados
date_default_timezone_set('America/Sao_Paulo');

$datax = json_decode(file_get_contents('php://input'), true);
$token = $datax['token'];

if (isset($token)) {
if (!empty($token)) {
		if($token === 'Q!W@ee344%%R'){
		//$response = array('success' => true, 'message' => 'ok');
       // echo json_encode($response);
	 // Conectar ao banco de dados		

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
    $tipo = $data['tipo'];
    $jurado_id = $data['jurado_id'];
    $jurado_nome = $data['jurado_nome'];
    $tempo = date("Y-m-d H:i:s");
	
	
    // Inserir os dados na tabela 'usuario'
    $sql = "insert into participantes (nome,curso,n1,n2,n3,n4,total,tipo,jurado_id,jurado_nome) values (:nome,:curso,:n1,:n2,:n3,:n4,:total,:tipo,:jurado_id,:jurado_nome)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':curso', $curso);
    $stmt->bindParam(':n1', $n1);
    $stmt->bindParam(':n2', $n2);
    $stmt->bindParam(':n3', $n3);
    $stmt->bindParam(':n4', $n4);
    $stmt->bindParam(':total', $total);
    $stmt->bindParam(':tipo', $tipo);
    $stmt->bindParam(':jurado_id', $jurado_id);
    $stmt->bindParam(':jurado_nome', $jurado_nome);
    $stmt->bindParam(':tempo', $tempo);
    $stmt->execute();

    // Retornar uma resposta ao aplicativo
    $response = array('success' => true, 'message' => ''.$tempo.', Votação realizada!');
    echo json_encode($response);
} catch (PDOException $e) {
    // Em caso de erro, retornar uma mensagem de erro
    $response = array('success' => false, 'message' => 'Erro ao salvar: ' . $e->getMessage());
    echo json_encode($response);
}
	   
	   // Fecha a conexão com o banco de dados
//$conn->close();
	   
		}
		else{
	$response = array('success' => true, 'message' => 'Nok_1');
        echo json_encode($response);
}
		
	}
}else{
	$response = array('success' => true, 'message' => 'Nok_2');
        echo json_encode($response);
}


?>
