async function getAllSnippets() {
  const response = await fetch('https://javascriptst18.herokuapp.com/snippets');
  const data = await response.json();
  createHTML(data);
}

async function postNewSnippet() {
  const dataToSend = {
    title: 'Assign a cool variable',
    code: 'let a = 10;',
    language: 'javascript'
  }
  fetch('https://javascriptst18.herokuapp.com/snippets', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
  })
}

function deleteSnippet() {
  fetch('https://javascriptst18.herokuapp.com/snippets/2', {
    method: 'DELETE'
  })
}

function createHTML(data) {
  const container = document.querySelector('.container');
  let html = '';
  for (let item of data) {
    html += `
        <div class="card">
          <p>${item.title}</p>
        </div>
      `;
  }
  container.innerHTML = html;
}

getAllSnippets();