document.querySelectorAll('.button-wrapper').forEach(wrapper => {
  const shadow = wrapper.querySelector('.hover-shadow');
  const button = wrapper.querySelector('.action-button');

  wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      shadow.style.left = `${x - 170}px`;
      shadow.style.top = `${y - 70}px`;
      shadow.style.opacity = 1;
      shadow.style.transform = 'scale(1)';
  });

  wrapper.addEventListener('mouseleave', () => {
      shadow.style.opacity = 0;
      shadow.style.transform = 'scale(0)';
  });

  button.addEventListener('focus', () => {
      shadow.style.left = '50%';
      shadow.style.top = '50%';
      shadow.style.transform = 'translate(-50%, -50%) scale(1)';
      shadow.style.opacity = 1;
  });

  button.addEventListener('blur', () => {
      shadow.style.opacity = 0;
      shadow.style.transform = 'scale(0)';
  });
});
