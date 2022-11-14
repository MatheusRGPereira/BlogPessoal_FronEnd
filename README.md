
# Site Criado para a realização do Projeto integrador Utilizando o MicroFramework React feito através do Bootcamp da Generation Brasil 📖🟢


 #### ✅ - Consumo da api Blog-Pessoal
 * Link da api no heroku https://blogmatheuspessoal.herokuapp.com/swagger-ui/index.html
 * Foi criada uma camada de service onde realizamos a Integração com a api
 1. Cadastro usuario utilizando a requisição Post
 2. Login usuario utilizando a requisição Post
 3. Busca utilizando o metodo get de forma generica em todo o site
 
 
 
 #### ✔️ - Criação dos Components
 * Component de navbar para a criação do cabeçalho da pagina e navbar
 * Component de footer para criar o rodapé da pagina e as informações do site
 * Component de Formulario de tema, onde ira verificar se o tema ja existe para realizar um metodo Put para Atulizar um tema  ou se ele não existe para criar um metodo Post e gerar um novo tema
 * Component de deletar Tema utilizando o metodo Delete
 * Component de listar todos os temas utilizando o metodo Get
 * Component de Postagem onde ira verificar se a postagem da existe para criar um metodo Put para atulizar a postagem ou um metodo Post para criar uma nova postagem
 * Component Modal postagem que é utilizado para criar um modelo base da pagina de postagens que é utilizado na pagina postagens e tambem na pagina home
  
   
 #### ✅ - Utilização do site
 * O usuario logo ao abrir a pagina ja ira ver a pagina de login caso tenha uma conta ele ja ira poder entra no site caso não ele podera se cadastrar
 * O usuario faz o cadastro colocando suas informações utilizando um metodo  post e logo ja é gerado uma criptografia dos seus dados para serem armazenados no banco de dados
 * Logo que o usuario faz o login na pagina ele recebera um token unico que permitira que ele utilize o site e possa criar temas e novas postagens
 * Esse token tem uma validade de 30 minutos
 * Logo que esse token expire o usuario sera redirecionado para a pagina de login para que possa se autenticar novamente
  
 #### 🔨 - A realização dos testes foram feitas todas no insominia
 * Testes dos endpoints Get de Tema/Postagens/Usuario
 * Testes dos endpoints GetbyId de Tema/Postagens 
 * Testes dos endpoints Post de Tema/Postagens/Usuario 
 * Testes dos endpoints Put de Tema/Postagens/Usuario 
 * Testes dos endpoints Delete de Tema/Postagens/Usuario
 
  #### 🔨 - Integração do swagger para deploy na plataforma heroku
 * Foi Criada uma camada na aplicação fazendo a configuração do swagger com os endpoints
 * Foi feito o deploy da api Utilziando a plataforma do heroku, onde disponibilizamos em nuvem para fazer o consumo posteriormente na etapa de front-end
 
  ##### 🔨 - Link da aplicação no heroku e instruções para entrar
  1. - Entre no link https://blogmatheuspessoal.herokuapp.com/swagger-ui/index.html
  2. - Vai abrir uma aba pedindo login e senha
  3. - Coloque o login como root e senha como root
  
  
  #### 🔨 - Demonstrativo dos endpoits de usuario na plataforma do swagger
  ![image](https://user-images.githubusercontent.com/100168699/201541923-5e437409-5f48-4214-894e-3ee59118adca.png)


  ##### 🔨 - Demonstrativo dos endpoits de Tema na plataforma do swagger
  ![image](https://user-images.githubusercontent.com/100168699/201541992-c767542d-7647-407a-95e2-5e100825b966.png)
  
  ##### 🔨 - Demonstrativo dos endpoits de Postagens na plataforma do swagger
  
  ![image](https://user-images.githubusercontent.com/100168699/201542025-55d36bd5-bf53-4620-b1a0-3a77c3a7ae34.png)

  ##### 🔨 - Link do site ja funcionando e feito o deploy pela plataforma do netlify
 https://velvety-otter-3d6507.netlify.app/
 

 
 
 
🎁 Obrigada @DIO pelos aprendizados nessa trilha 
