const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  button: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

refs.button.addEventListener('change', changeTheme);

function changeTheme(event) {
  if (event.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}

const storageTheme = localStorage.getItem('theme');

if (storageTheme === Theme.DARK) {
  refs.button.checked = true;
  refs.body.classList.add(Theme.DARK);
} else {
  refs.button.checked = false;
  refs.body.classList.add(Theme.LIGHT);
}
