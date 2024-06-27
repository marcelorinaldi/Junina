<?php
// Conectar ao banco de dados
date_default_timezone_set('America/Sao_Paulo');

$datax = json_decode(file_get_contents('php://input'), true);
$token = $datax['token'];

if (isset($token)) {
if (!empty($token)) {
		if($token === 'Q!W@ee344%%R'){
			

require '../bancosenac.php';
try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Receber os dados do aplicativo
    $data = json_decode(file_get_contents('php://input'), true);
	
    $a = $data['a'];    
    $nome = $data['nome2'];    
    $receitas = $data['receitas2'];    
    $despesas = $data['despesas2'];    
    $obs = $data['obs2'];    
	$tempo = date("Y-m-d H:i:s");
    $data_val = $data['data_validadex'];	
	
	
   
    //$sql = "INSERT INTO avaliacao (titulo,nota,mensagem,tempo) VALUES (:titulo,:nota,:mensagem,:tempo)";
    $sql = "UPDATE `orcamento` SET `nome` = :nome, `receitas`=:receitas,`despesas`=:despesas,`obs`=:obs, dt_edicao=:tempo, `data_val`=:data_val WHERE (`id` = :a) limit 1";
	$stmt = $pdo->prepare($sql);
    $stmt->bindParam(':a', $a);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':receitas', $receitas);
    $stmt->bindParam(':despesas', $despesas);
    $stmt->bindParam(':obs', $obs);
    $stmt->bindParam(':tempo', $tempo);
    $stmt->bindParam(':data_val', $data_val);
    $stmt->execute();

    // Retornar uma resposta ao aplicativo
    $response = array('success' => true, 'message' => ''.$tempo.', Titulo salvo com sucesso');
    echo json_encode($response);
} catch (PDOException $e) {
    // Em caso de erro, retornar uma mensagem de erro
    $response = array('success_3' => false, 'message' => 'Erro ao salvar título: ' . $e->getMessage());
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
