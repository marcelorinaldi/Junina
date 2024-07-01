<?php
// Configurar o fuso horário
date_default_timezone_set('America/Sao_Paulo');

// Receber os dados do aplicativo
$datax = json_decode(file_get_contents('php://input'), true);
$token = isset($datax['token']) ? $datax['token'] : '';

if (!empty($token)) {
    if ($token === 'Q!W@ee344%%R') {
        // Conectar ao banco de dados
        require '../bancosenac.php';

        try {
            $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $username, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Receber os dados do aplicativo
            $nome = isset($datax['nome']) ? $datax['nome'] : '';
            $curso = isset($datax['curso']) ? $datax['curso'] : '';
            $categoria = isset($datax['categoria']) ? $datax['categoria'] : '';
            $tempo = date("Y-m-d H:i:s");

            // Verificar se todos os campos necessários foram recebidos
            if (empty($nome) || empty($curso) || empty($categoria)) {
                $response = array('success' => false, 'message' => 'Todos os campos são obrigatórios.');
                echo json_encode($response);
                exit;
            }

            // Inserir os dados na tabela 'aluno'
            $sql = "INSERT INTO aluno (nome, curso, categoria, data) VALUES (:nome, :curso, :categoria, :tempo)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':curso', $curso);
            $stmt->bindParam(':categoria', $categoria);
            $stmt->bindParam(':tempo', $tempo);

            // Executar a inserção
            if ($stmt->execute()) {
                $response = array('success' => true, 'message' => ''.$tempo.', Usuário cadastrado!');
            } else {
                $response = array('success' => false, 'message' => 'Falha ao cadastrar o usuário.');
            }
            echo json_encode($response);

        } catch (PDOException $e) {
            // Em caso de erro, retornar uma mensagem de erro
            $response = array('success' => false, 'message' => 'Erro ao salvar: ' . $e->getMessage());
            echo json_encode($response);
        }
    } else {
        $response = array('success' => false, 'message' => 'Token inválido.');
        echo json_encode($response);
    }
} else {
    $response = array('success' => false, 'message' => 'Token não fornecido.');
    echo json_encode($response);
}
?>
