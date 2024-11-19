document.querySelectorAll('.button-wrapper').forEach(wrapper => {
  const shadow = wrapper.querySelector('.hover-shadow');
  const interactionArea = wrapper.querySelector('.button-interaction-area');

  wrapper.addEventListener('mousemove', (e) => {
      const rect = interactionArea.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      shadow.style.left = `${x - 120}px`;
      shadow.style.top = `${y - 60}px`;
      shadow.style.opacity = 1;
      shadow.style.transform = 'scale(1)';
  });

  wrapper.addEventListener('mouseleave', () => {
      shadow.style.opacity = 0;
      shadow.style.transform = 'scale(0)';
  });
});

const buttons = document.querySelectorAll('.action-button');

buttons.forEach(button => {
  button.addEventListener('focus', () => {
      const interactionArea = button.closest('.button-interaction-area');
      const shadow = interactionArea.querySelector('.hover-shadow');

      const rect = interactionArea.getBoundingClientRect();
      const x = rect.width / 2;
      const y = rect.height / 2;

      shadow.style.left = `${x - 120}px`; // Adjusted for correct shadow positioning
      shadow.style.top = `${y - 55}px`; // Adjusted for correct shadow positioning
      shadow.style.opacity = 1;
      shadow.style.transform = 'scale(1)';
  });

  button.addEventListener('blur', () => {
      const interactionArea = button.closest('.button-interaction-area');
      const shadow = interactionArea.querySelector('.hover-shadow');

      shadow.style.opacity = 0;
      shadow.style.transform = 'scale(0)';
  });
});
