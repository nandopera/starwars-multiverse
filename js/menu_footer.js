const menu = document.getElementById(`menu-bar`);
const rodape = document.getElementById(`rodape`);

menu.insertAdjacentHTML(
  "afterbegin",
  `
    <ul class="menu-nav nav-bar">
        <li> <a class="nav-link-wars" href="./index.html">FILMES</a></li>
        <li> <a class="nav-link-wars" href="./personagens.html">PERSONAGENS</a></li>
        <li> <a class="nav-link-wars" href="./planetas.html">PLANETAS</a></li>
        <li> <a class="nav-link-wars" href="./veiculos.html">VEÍCULOS</a></li>
        <li> <a class="nav-link-wars" href="./naves.html">NAVES</a></li>
    </ul>
`
);

rodape.insertAdjacentHTML(
  "afterbegin",
  `
    <ul class="nav justify-content-center pb-3 mb-3 border-color">
      <li class="nav-item"><a href="#" class="nav-link px-2 footer-txt">Filmes</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 footer-txt">Personagens</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 footer-txt">Planetas</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 footer-txt">Veículos</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 footer-txt">Naves</a></li>
    </ul>
    <p class="text-center footer-txt">© 2023 Grupo Poderoso, Inc</p>
  `
);
