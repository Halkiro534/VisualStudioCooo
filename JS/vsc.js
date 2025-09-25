    const registerBtn = document.getElementById('registerBtn');
        const loginBtn = document.getElementById('loginBtn');
        const formModal = document.getElementById('formModal');
        const closeModal = document.getElementById('closeModal');
        const demoForm = document.getElementById('demoForm');
        const modalForm = document.getElementById('modalForm');
        const loginLink = document.getElementById('loginLink');
        const modalLoginLink = document.getElementById('modalLoginLink');
        
       
        registerBtn.addEventListener('click', function() {
            formModal.style.display = 'flex';
        });
        
        
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            formModal.style.display = 'flex';
        });
        
        modalLoginLink.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Функціонал входу буде реалізовано тут');
        });
        
        
        closeModal.addEventListener('click', function() {
            formModal.style.display = 'none';
        });
        
        
        window.addEventListener('click', function(e) {
            if (e.target === formModal) {
                formModal.style.display = 'none';
            }
        });
        
        
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            
            if (name && email) {
                alert(`Дякуємо, ${name}! Ваш акаунт з поштою ${email} успішно зареєстровано.`);
                demoForm.reset();
            }
        });
        
        
        modalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const name = document.getElementById('modalName').value;
            const email = document.getElementById('modalEmail').value;
            
           
            if (name && email) {
                alert(`Дякуємо, ${name}! Ваш акаунт з поштою ${email} успішно зареєстровано.`);
                modalForm.reset();
                formModal.style.display = 'none';
            }
        });
        
        
        loginBtn.addEventListener('click', function() {
            alert('Функціонал входу буде реалізовано тут');
        });