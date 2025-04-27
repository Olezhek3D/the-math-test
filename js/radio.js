const radios = document.querySelectorAll('#five input[type="radio"]');

radios.forEach(radio => {
    radio.addEventListener('mousedown', function (e) {
        // Проверяем, если радио уже выбрано
        if (this.checked) {
            // Предотвращаем стандартное поведение
            e.preventDefault();
            // Снимаем выделение
            this.checked = false;
        }
    });
});

