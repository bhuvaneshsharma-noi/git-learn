document.getElementById('newsletter-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input[type="email"]');
    const email = input.value.trim();

    if (!email) return;

    alert('Thanks for subscribing with ' + email + '! Happy travels! 🌍');
    input.value = '';
});
