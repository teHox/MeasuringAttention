// Функция для отображения/скрытия выпадающего списка при клике на выбранную опцию
function toggleSelect(event) {
    const select = event.target.closest('.custom-select');
    const items = select.querySelector('.select-items');
    const selected = select.querySelector('.select-selected');
    const arrow = select.querySelector('.select-arrow');
    arrow.classList.toggle('select-arrow_active');
    selected.classList.toggle('select-selected_active');
    items.classList.toggle('select-hide');
}

// Функция для выбора опции
function selectOption(event) {
    const optionText = event.target.textContent;
    const select = event.target.closest('.custom-select');
    const selected = select.querySelector('.select-selected');
    selected.textContent = optionText;

    // Скрыть выпадающий список после выбора опции
    const arrow = select.querySelector('.select-arrow');
    arrow.classList.remove('select-arrow_active');
    selected.classList.remove('select-selected_active');
    const items = select.querySelector('.select-items');
    items.classList.add('select-hide');
}

// Функция для закрытия выпадающего списка при клике вне его области
function closeSelect(event) {
    const selects = document.querySelectorAll('.custom-select');
    for (const select of selects) {
        if (!select.contains(event.target)) {
            const items = select.querySelector('.select-items');
            const selected = select.querySelector('.select-selected');
            const arrow = select.querySelector('.select-arrow');
            arrow.classList.remove('select-arrow_active');
            selected.classList.remove('select-selected_active');
            items.classList.add('select-hide');
        }
    }
}

// Применение функций к каждому блоку .custom-select
const selects = document.querySelectorAll('.custom-select');
for (const select of selects) {
    const selected = select.querySelector('.select-selected');
    selected.addEventListener('click', toggleSelect);

    const arrow = select.querySelector('.select-arrow');
    arrow.addEventListener('click', toggleSelect);

    const options = select.querySelectorAll('.select-items div');
    for (const option of options) {
        option.addEventListener('click', selectOption);
    }
}

// Обработка клика за пределами выпадающих списков
document.addEventListener('click', closeSelect);