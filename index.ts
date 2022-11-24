const btn = document.querySelector('.btn')! as HTMLButtonElement;
const unreadArticles = document.querySelectorAll('.unread');
const notification = document
  .querySelector('.card-title')!
  .querySelector('span')! as HTMLSpanElement;

btn.addEventListener('click', () => {
  unreadArticles.forEach(article => {
    article.classList.remove('unread');
    notification.textContent = '0';
  });
});
