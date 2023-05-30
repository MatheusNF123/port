import expressPizzaria from './image/express-pizzaria.png'
import MyWallet from './image/MyWallet.png'
import myTunes from './image/myTunes.png'
import blogsApi from './image/blogs-api.jpg'
import trybesmith from './image/trybesmith.jpg'
import storeManager from './image/store-manager.png'
import tfc from './image/tfc.png'
import todoList from './image/todoList2.jpg'
import car from "./image/car.jpg"

const projetos = [
  {
    img: MyWallet,
    titulo: 'MyWallet',
    infos: 'Uma aplicação de registro de gastos com conversão de moeda onde o usuário pode adicionar, remover e editar uma despesa e visualizar tudo em uma tabela. Linguagem e tecnologias usadas: React, React Router e Redux (pra gerenciamento global de estado)',
    demo: 'https://my-wallet-orpin.vercel.app/',
    code: 'https://github.com/MatheusNF123/wallet'
  },
  {
    img: blogsApi,
    titulo: 'Blogs-Api',
    infos: 'Uma Api API RESTfull na qual simula um site de Blog Nela em que é possível criar, visualizar, deletar e atualizar posts.',
    code: 'https://github.com/MatheusNF123/blogs-api'
  },
  {
    img: tfc,
    titulo: 'trybe-futebol-clube',
    infos: 'O TFC é um site informativo sobre partidas e classificações de futebol!',
    code: 'https://github.com/MatheusNF123/trybe-futebol-clube'
  },
  {
    img: expressPizzaria,
    titulo: 'express-pizzaria',
    infos: 'Este é um projeto fullstack de uma pizzaria fictícia que tem como objetivo possibilitar a realização de pedidos online de pizzas. ',
    demo: 'https://express-pizzaria-three.vercel.app/',
    code: 'https://github.com/MatheusNF123/express-pizzaria'
  },
  {
    img: trybesmith,
    titulo: 'Trybesmith', 
    infos: 'Uma loja de itens medievais, no formato de uma API, utilizando Typescript.',
    code: 'https://github.com/MatheusNF123/trybesmith'
  },
  {
    img: todoList,
    titulo: 'my-Todo-List',
    infos: 'my-Todo-List, uma aplicação onde você podera salvar tarefas do dia dia para não se esquecer. Além disso, poderá remover ou editar uma tarefa, ate adicionar uma descrição.',
    code: 'https://github.com/MatheusNF123/myTodoList',
    demo: 'https://my-todo-list-nu-one.vercel.app/',
  }, 
  {
    img: storeManager,
    titulo: 'Store-Manager',
    infos: 'Uma Api de Sistema de gerenciamento de vendas no formato dropshipping desenvolvida em node-js, utilizando a arquitetura MSC (model-service-controller) e um banco de dados MySQL para gestão de dados.',
    code: 'https://github.com/MatheusNF123/store-manager'
  },
  {
    img: myTunes,
    titulo: 'My-Tunes',
    infos: 'Uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada.',
    demo: 'https://my-tunes-one.vercel.app/',
    code: 'https://github.com/MatheusNF123/MyTunes'
  },
  {
    img: car,
    titulo: 'Car-Shop',
    infos: 'Car Shop uma API com CRUD para gerenciar uma concessionária de veículos, utilizando o banco de dados MongoDB através do framework do Mongoose.',
    code: 'https://github.com/MatheusNF123/car-shop'
  },

 
]

export default projetos