var ArrData = [];

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => displayTitle (json))
  .catch(json => console.log(222, err))

  displayTitle = (arr) => {
    arr. forEach(item => {
      let list = document.getElementById('list');
      let title = document.createElement('p');
      title.innerText = item.title;
      list.appendChild(title);
      
    });
  }

    