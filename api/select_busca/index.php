<?php

	 // Conectar ao banco de dados		
//require '../bancocasa.php';
require '../bancosenac.php';
//require '../../../bancoservidor.php';

$conn = new mysqli($host, $username, $password, $dbname);

// Verifica se a conexão foi estabelecida com sucesso
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

$login = $_GET['login'];


// Consulta SQL para selecionar todos os dados da tabela usuario
$sql = "SELECT * FROM `orcamento` where  nome like '%".$login."%'";
$result = $conn->query($sql);
//print_r($result);
// Verifica se há resultados para a consulta

if ($result->num_rows > 0) {
    // Array para armazenar os resultados da consulta
    $usuarios = array();

    // Loop pelos resultados da consulta
    while($row = $result->fetch_assoc()) {
		//print_r($row);
       // $usuarios[] = $row;
		
		
		 // Converter o valor da coluna 'id' para inteiro
        $row['id'] = intval($row['id']);
        // Adicionar os dados do usuário ao array
        $usuarios[] = $row;
		
		
		
    }
 //print_r($usuarios);
	// $json_data = json_encode($data, JSON_PRETTY_PRINT);
    // Retorna os resultados como JSON
	header('Content-Type: application/json');
    //echo json_encode($usuarios);
  echo  json_encode($usuarios, JSON_PRETTY_PRINT);
	
	
} else {
    // Se não houver resultados, retorna uma mensagem de erro
    echo "1";
}

// Fecha a conexão com o banco de dados
//$conn->close();


	
?>   



