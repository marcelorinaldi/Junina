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
    $n1 = $data['n1'];
    $n2 = $data['n2'];
    $n3 = $data['n3'];
    $n4 = $data['n4'];
	$tempo = date("Y-m-d H:i:s");
 	
	
	
   
    //$sql = "INSERT INTO avaliacao (titulo,nota,mensagem,tempo) VALUES (:titulo,:nota,:mensagem,:tempo)";
    $sql = "UPDATE `aluno` SET `n1` = :n1, `n2` = :n2, `n3` = :n3, `n4` = :n4, `total`=:total WHERE (`id` = :a) limit 1";
	$stmt = $pdo->prepare($sql);
    $stmt->bindParam(':a', $a);
    $stmt->bindParam(':n1', $n1);
    $stmt->bindParam(':n2', $n2);
    $stmt->bindParam(':n3', $n3);
    $stmt->bindParam(':n4', $n4);
    $stmt->bindParam(':total', $total);
    $stmt->bindParam(':tempo', $tempo);
    $stmt->execute();

    // Retornar uma resposta ao aplicativo
    $response = array('success' => true, 'message' => ''.$tempo.', Votação bem sucedida!');
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
