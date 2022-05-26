const testArea = document.querySelector('#testArea');

document.addEventListener("keyup", (e) => {
  console.log('sa');
  let keyId = `#key-${e.key}`;
  let keyElement = document.querySelector(keyId);
  keyElement.classList.add('active');
  setTimeout(() => {
    keyElement.classList.remove('active');
  }, 100);
  testArea.focus();
})

document.addEventListener("keypress", (e) => {
  if(testArea.value.length > 165){
    testArea.value = ''
  }
  let keyId = `#key-${e.key}`;
  let keyElement = document.querySelector(keyId);
  keyElement.classList.add('active');
  testArea.focus();
})

document.addEventListener('keydown', (e) => {
  let keyId = `#key-${e.key}`;
  let keyElement = document.querySelector(keyId);
  keyElement.classList.remove('active');
  testArea.focus();
})
