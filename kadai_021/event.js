const btn = document.getElementById('btn');
const textBtn = document.querySelector('h2');

btn.addEventListener('click',() => {
  setTimeout(() => {
    textBtn.textContent = 'ボタンをクリックしました';
  },2000);
  } )
