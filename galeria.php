<!DOCTYPE html>
<html lang="pt-br">

<head>
<!-- Head -->
 <?php include('./snippets/head.html'); ?>
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="70">

    <!-- Barra de Navegação -->
    <?php include('./snippets/navegacao.html'); ?>

    <!-- Modal de Versões Anteriores -->
    <?php include('./snippets/botao-flutuante.html'); ?>

	<!--Galeria -->
	<main class="content-scroll" id="galeria">
		<?php include ('./snippets/galeria.html');?>
	</main>
    <!-- Sessão dos Patrocinadores -->
    <?php include('./snippets/patrocinio.html'); ?>

    <!-- Footer -->
    <?php include('./snippets/rodape.html'); ?>

    <!-- Chamada dos Scripts -->
    <?php include('./snippets/scripts.html'); ?>
</body>

</html>