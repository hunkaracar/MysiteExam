
const form = document.querySelector('.login');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    if (username === 'admin' && password === 'password') {
        // Kullanıcı adı ve şifre doğru
        // Burada bir sayfaya yönlendirebilir veya bir mesaj gösterebiliriz.
        alert('Hoş geldiniz!');
    } else {
        // Kullanıcı adı veya şifre yanlış
        alert('Kullanıcı adı veya şifre yanlış!');
    }
});