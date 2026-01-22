const rsvpBtn = document.getElementById('rsvpBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

rsvpBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  // Add a little celebration animation
  rsvpBtn.style.transform = 'scale(0.95)';
  setTimeout(() => {
    rsvpBtn.style.transform = 'scale(1)';
  }, 200);
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close popup when clicking outside it
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
