
export const inputValidation = (value, type, id) => {
  if(type === 'text') {
    const regexLetters = /^(?=.{3,15}$)[A-Za-zÁÉÍÓÚ][A-Za-zñáéíóú]+(?: [A-Za-zÁÉÍÓÚ][A-Za-zñáéíóú]+)?$/;
  
    if(!regexLetters.test(value)) {
      return `${id[0].toUpperCase() + id.slice(1)} inválido`;
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

    if(value.trim() === '') return 'Teléfono inválido';

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