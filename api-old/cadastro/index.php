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
//require '../bancocasa.php';
//require '../bancosenac.php';
require '../../../bancoservidor.php';


try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Receber os dados do aplicativo
    $data = json_decode(file_get_contents('php://input'), true);
	
		
	
	
    $nome = $data['nome'];
    $login = $data['login'];
    $senha = $data['senha'];
	$tempo = date("Y-m-d H:i:s");
	
	
    // Inserir os dados na tabela 'usuario'
    $sql = "INSERT INTO usuario(nome,login,senha,data_cad) VALUES (:nome,:login,:senha,:tempo)";
    $stmt = $pdo->prepare($sql);
	$stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':login', $login);    
    $stmt->bindParam(':senha', $senha);
    //$stmt->bindParam(':imagem', $imagem);
    $stmt->bindParam(':tempo', $tempo);
    //$stmt->bindParam(':quantidade', $quantidade);
    $stmt->execute();

    // Retornar uma resposta ao aplicativo
    $response = array('success' => true, 'message' => ''.$tempo.', Produto cadastrado');
    echo json_encode($response);
} catch (PDOException $e) {
    // Em caso de erro, retornar uma mensagem de erro
    $response = array('success' => false, 'message' => 'Erro ao salvar: ' . $e->getMessage());
    echo json_encode($response);
}
	   
	   // Fecha a conexão com o banco de dados
$conn->close();
	   
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
