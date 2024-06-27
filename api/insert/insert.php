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
	   
	   $host = '127.0.0.1';
$port = '3306';
$dbname = 'u696308407_jsMobile';
$username = 'u696308407_jsMobileuser';
$password = 'Oq+TnlBr$0BKL|Uf?7Vb';

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Receber os dados do aplicativo
    $data = json_decode(file_get_contents('php://input'), true);
	
    $titulo = $data['titulo'];
    $nota = $data['nota'];
    $mensagem = $data['sms'];
    $evento = $data['evento'];
	$tempo = date("Y-m-d H:i:s");
	
	
    // Inserir os dados na tabela 'usuario'
    $sql = "INSERT INTO avaliacao (titulo,nota,mensagem,tempo) VALUES (:titulo,:nota,:mensagem,:tempo)";
    $stmt = $pdo->prepare($sql);
    $stmt->bindParam(':titulo', $titulo);
    $stmt->bindParam(':nota', $nota);
    $stmt->bindParam(':mensagem', $mensagem);
    $stmt->bindParam(':tempo', $tempo);
    $stmt->execute();

    // Retornar uma resposta ao aplicativo
    $response = array('success' => true, 'message' => ''.$tempo.', Titulo salvo com sucesso');
    echo json_encode($response);
} catch (PDOException $e) {
    // Em caso de erro, retornar uma mensagem de erro
    $response = array('success' => false, 'message' => 'Erro ao salvar título: ' . $e->getMessage());
    echo json_encode($response);
}
	   
	   
		}
		else{
	$response = array('success' => true, 'message' => 'Nok');
        echo json_encode($response);
}
		
	}
}else{
	$response = array('success' => true, 'message' => 'Nok');
        echo json_encode($response);
}


?>
