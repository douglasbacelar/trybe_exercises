
import {
    fillUsersSelect,
    fillPosts,
    fillFeaturedPostComments,
    clearPageData,
    fillErrorMessage,
} from './src/main';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
    .then((response) => response.json())
    .then((data) => {
        const { users } = data;
        fillUsersSelect(users);
    })
    .catch((error) => fillErrorMessage(error.message));

usersSelect.addEventListener('change', (event) => {
    clearPageData();
    const USERS = `https://dummyjson.com/posts/user/${event.target.value}`;
    fetch(USERS)
        .then((response) => response.json())
        .then((data) => {
            const { posts } = data;
            fillPosts(posts);
            postComments(posts[0].id);
        })
        .catch((error) => fillErrorMessage(error.message));

    // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
    const postComments = (id) => {
        fetch(`https://dummyjson.com/posts/${id}/comments`)
            .then((response) => response.json())
            .then((data) => {
                fillFeaturedPostComments(data.comments);
            })
            .catch((error) => fillErrorMessage(error.message));
    };
});