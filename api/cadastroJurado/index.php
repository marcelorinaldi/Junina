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
	
    $nome = isset($datax['nome']) ? $datax['nome'] : '';
    $curso = isset($datax['curso']) ? $datax['curso'] : '';
    $tempo = date("Y-m-d H:i:s");
	
	
    // Inserir os dados na tabela 'usuario'
    $sql = "INSERT INTO `app_junina_v6`.`jurados` (nome, curso, data) VALUES (:nome, :curso, :tempo)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':curso', $curso);
    $stmt->bindParam(':tempo', $tempo);
    $stmt->execute();

    // Retornar uma resposta ao aplicativo
    $response = array('success' => true, 'message' => ''.$tempo.', Jurado cadastrado!');
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
