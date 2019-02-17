const element = document.querySelector('.main');

const div = document.createElement('div');
div.className = 'greeting';
div.innerHTML = 'Hello, user!';
element.append(div);
