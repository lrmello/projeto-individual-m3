# projeto-individual-m3

Simulação de servidor utilizando node.js para uma empresa de aluguel de carros

Para o funcionamento do código, deverá seguir o seguinte:

Instalar no terminal do windows os pacotes do json-server no comando abaixo, localmente na máquina:

npm install -g json-server

Após disso, fazer o teste pelo comando do json-server utilizando Insomnia:

Os dados serão atualizados diretamente pelo código utilizando a função nodemon, sendo feita diretamente no arquivo db.json

npm dev run --port 3001

O arquivo possui 3 rotas (carro, funcionário e cliente) e com a estrutura abaixo:

Carro: modelo, cor, imagem, ano, id
Funcionario: nome, sobrenome, cargo, id
Cliente: nome, sobrenome, cpf, id

Automaticamente o JSON Server já aplica o CRUD (Create, Read, Update, Delete)

Get - Faz uma consulta por id
Post - insere um novo item
Put - atualiza um item
Delete - Deleta um item

Para acessar o localhost:3001 temos os caminhos abaixo, o id será o identificador para cada usuário preenchido pelo programador:

localhost:3001/carros/:id
localhost:3001/funcionario/:id
localhost:3001/cliente/:id



