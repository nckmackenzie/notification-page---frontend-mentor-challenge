var btn = document.querySelector('.btn');
var unreadArticles = document.querySelectorAll('.unread');
var notification = document
    .querySelector('.card-title')
    .querySelector('span');
btn.addEventListener('click', function () {
    unreadArticles.forEach(function (article) {
        article.classList.remove('unread');
        notification.textContent = '0';
    });
});
