
export const inputValidation = (value, type, name) => {
  if(type === 'text') {
    const regexLetters = /^(?=.{3,15}$)[A-Za-zÁÉÍÓÚ][A-Za-zñáéíóú]+(?: [A-Za-zÁÉÍÓÚ][A-Za-zñáéíóú]+)?$/;
  
    if(!regexLetters.test(value)) {
      return `${name[0].toUpperCase() + name.slice(1)} inválido`;
    }else {
      return ''
    }
  }

  if(type === 'email') {
    const regexMail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!regexMail.test(value)) {
      return 'Email inválido';
    }else {
      return ''
    }
  }

  if(type === 'tel') {
    //const num = value.replace(/ |-/g, "");
    const regexNum = /\D/g;

    if(value.trim() === '') return 'No ingresaste teléfono';

    if(regexNum.test(value)) {
      return 'Teléfono inválido';
    }else {
      return ''
    }
  }

  if(type === 'password') {
    if(value.length < 6) {
      return 'Mínimo 6 caracteres';
    }else {
      return ''
    }
  }
};