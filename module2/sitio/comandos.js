const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Abajo es una lista dinámica. Da clic en cualquier parte para agregar un nuevo elemento. Da clic a un elemento existente para cambiarlo';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('¿Qué quieres agregar a la lista?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Ingresa la cadena que deseas cambiar');
    this.textContent = listContent;
  }
}