function clearInput() {
  document.forms.answer.value = '';
}

function deleteLastCharacter() {
  const currentInput = document.forms.answer.value;
  document.forms.answer.value = currentInput.slice(0, -1);
}

function appendToInput(value) {
  document.forms.answer.value += value;
}

function calculateResult() {
  const input = document.forms.answer.value;
  try {
    const result = eval(input);
    document.forms.answer.value = result;
  } catch (error) {
    document.forms.answer.value = 'Erro';
  }
}
