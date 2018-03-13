
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => displayTitle(json))
  .catch(err => console.log(err))


  displayTitle = (arr) => {
    arr.forEach(item => {
      console.log(111, 'item ==>>', item);
      let list = document.getElementById('list');
      let block = document.createElement("div");
      block.innerHTML = `<div class="item">
      <p class="item__id"><b> ID - ${item.id}</b></p>
      <p class="item__title">${item.title}</p>
      <p>${item.body}</p>
      </div>
      <hr>`;
      list.appendChild(block);
    })
  }

