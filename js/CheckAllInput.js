document.addEventListener('DOMContentLoaded', (event) => {
    const inputs = document.querySelectorAll('#dbForm input');
    const button = document.getElementById('generateButton');
  
    const checkInputs = () => {
      let allFilled = true;
      inputs.forEach(input => {
        if (input.value === '') {
          allFilled = false;
        }
      });
      button.disabled = !allFilled;
    };
    inputs.forEach(input => {
      input.addEventListener('input', checkInputs);
    });
    checkInputs();
  });