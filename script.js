// Пример простого скрипта для анимации
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero');
    
    // Эффект появления блока при загрузке страницы
    heroSection.style.opacity = 0;
    heroSection.style.transition = 'opacity 2s';
    setTimeout(() => {
        heroSection.style.opacity = 1;
    }, 100); 
});

