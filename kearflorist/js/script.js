//Place Order
const form = document.querySelector('form');
const submitBtn = document.getElementById('submitBtn');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  successMsg.style.display = 'block';
  submitBtn.style.display = 'none';
});

//Definition Cancel Button
function goBack() {
  window.history.back();
}