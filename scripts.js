const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const cursor = card.querySelector('.hover-shadow');

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cursor.style.left = `${x - 250}px`;
    cursor.style.top = `${y -175}px`;
    cursor.style.opacity = 1;
  });

  card.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
  });
});

const buttons = document.querySelectorAll('.action-button');

buttons.forEach((button) => {
  button.addEventListener('focus', (e) => {
    const card = button.closest('.card');
    const cursor = card.querySelector('.hover-shadow');

    const rect = card.getBoundingClientRect();
    const x = rect.width / 2;
    const y = rect.height / 2;

    cursor.style.left = `${x - 235}px`;
    cursor.style.top = `${y - 150}px`;
    cursor.style.opacity = 1;
  });

  button.addEventListener('blur', (e) => {
    const card = button.closest('.card');
    const cursor = card.querySelector('.hover-shadow');

    cursor.style.opacity = 0;
  });
});
