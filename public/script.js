const API_URL = 'http://localhost:3000/posts';

// Função para criar um post
document.getElementById('postForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
        alert('Post adicionado!');
        document.getElementById('postForm').reset();
    }
});

// Função para listar posts
async function loadPosts() {
    const response = await fetch(API_URL);
    const posts = await response.json();
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = `${post.id}: ${post.title} - ${post.body}`;
        postList.appendChild(li);
    });
}

// Função para atualizar um post
document.getElementById('updateForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('updateId').value;
    const title = document.getElementById('updateTitle').value;
    const body = document.getElementById('updateBody').value;

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
        alert('Post atualizado!');
        document.getElementById('updateForm').reset();
    }
});

// Função para deletar um post
document.getElementById('deleteForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('deleteId').value;

    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });

    if (response.ok) {
        alert('Post deletado!');
        document.getElementById('deleteForm').reset();
    }
});
