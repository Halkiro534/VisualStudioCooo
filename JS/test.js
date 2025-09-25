      const correctAnswers = [1, 1, 0, 0, 3, 1, 0, 3, 0, 0]; 
        
        function selectOption(optionElement) {
            
            const options = optionElement.parentElement.querySelectorAll('.option');
            options.forEach(opt => opt.classList.remove('selected'));
            
            
            optionElement.classList.add('selected');
        }
        
        function resetTest() {
            
            const allOptions = document.querySelectorAll('.option');
            allOptions.forEach(opt => opt.classList.remove('selected'));
            
            
            document.getElementById('result').style.display = 'none';
        }
        
        function checkAnswers() {
            let score = 0;
            let detailedHTML = '<h3>Результати:</h3>';
            
            const questions = document.querySelectorAll('.question');
            
            questions.forEach((question, index) => {
                const options = question.querySelectorAll('.option');
                let userAnswer = -1;
                let isCorrect = false;
                
                
                options.forEach((option, optIndex) => {
                    if (option.classList.contains('selected')) {
                        userAnswer = optIndex;
                    }
                });
                
                
                if (userAnswer === correctAnswers[index]) {
                    score++;
                    isCorrect = true;
                }
                
                
                detailedHTML += `
                    <div style="margin: 15px 0; padding: 10px; border-left: 4px solid ${isCorrect ? '#28a745' : '#dc3545'}; background: #f8f9fa;">
                        <strong>Питання ${index + 1}:</strong> 
                        ${isCorrect ? '✅' : '❌'}<br>
                        ${!isCorrect ? `Правильна відповідь: <span class="correct-answer">${options[correctAnswers[index]].textContent}</span>` : ''}
                    </div>
                `;
            });
            
            
            document.getElementById('score').textContent = `${score}/${questions.length}`;
            document.getElementById('detailed-results').innerHTML = detailedHTML;
            document.getElementById('result').style.display = 'block';
            
           
            document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
        }
        
        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                checkAnswers();
            }
        });