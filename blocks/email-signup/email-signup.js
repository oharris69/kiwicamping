export default async function decorate(block) {
  const childDivs = block.children;
  childDivs[0].classList.add('label');
  childDivs[1].classList.add('input-fields');
  childDivs[2].classList.add('information');

  const inputDiv = childDivs[1];
  const p = inputDiv.querySelector('p');
  const checkboxInputLabel = p.textContent;

  // Create the new elements
  const textInputDiv = document.createElement('div');
  textInputDiv.classList.add('text-input');

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email Sign Up';

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'text');
  emailInput.setAttribute('placeholder', 'Email Sign Up');

  const signUpButton = document.createElement('button');
  signUpButton.textContent = 'Sign Up';

  const checkboxInputDiv = document.createElement('div');
  checkboxInputDiv.classList.add('checkbox-input');

  const checkboxInput = document.createElement('input');
  checkboxInput.setAttribute('type', 'checkbox');

  const checkboxLabel = document.createElement('label');
  checkboxLabel.textContent = checkboxInputLabel;

  // Append the elements to the existing HTML structure
  textInputDiv.appendChild(emailLabel);
  textInputDiv.appendChild(emailInput);
  textInputDiv.appendChild(signUpButton);

  checkboxInputDiv.appendChild(checkboxInput);
  checkboxInputDiv.appendChild(checkboxLabel);

  inputDiv.innerHTML = '';
  inputDiv.appendChild(textInputDiv);
  inputDiv.appendChild(checkboxInputDiv);
}
