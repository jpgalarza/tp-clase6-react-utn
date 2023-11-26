import { useState } from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import swal from 'sweetalert';

export const Registration = () => {
  const [user, setuser] = useState({ 
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirm: '',
  });
  const [errors, setErrors] = useState({
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    password: false,
    confirm: false,
  });
  const [errorMsgSubmit, setErrorMsgSubmit] = useState('');

  const handleInputChange = (data) => {
    setuser({...user, ...data});
  };

  const handleError = (data) => {
    setErrors({...errors, ...data});
  };

  const submit = (e) => {
    e.preventDefault();

    setTimeout(() => setErrorMsgSubmit(''), 4000);

    if(Object.values(errors).includes(true)) return setErrorMsgSubmit('Corrige los campos marcados en rojo');

    const { nombre, apellido, email, telefono, password, confirm } = user;

    const nomTrim = nombre.trim();
    const apeTrim = apellido.trim();
    const emailTrim = email.trim();
    const telTrim = telefono.trim();
    const passTrim = password.trim();
    const confTrim = confirm.trim();

    if(nomTrim === ''||  apeTrim === ''|| emailTrim === ''|| telTrim === ''|| passTrim === ''|| confTrim === '') {
      return setErrorMsgSubmit('Debes completar todos los campos');
    }

    if(passTrim !== confTrim) {
      setErrors({...errors, password: true, confirm: true});
      return setErrorMsgSubmit('Las contraseñas son diferentes');
    }

    const data = { 
      nombre: nomTrim.toLowerCase(),
      apellido: apeTrim.toLowerCase(),
      email: emailTrim.toLowerCase(),
      telefono: telTrim.toLowerCase(),
      password: passTrim.toLowerCase(),
      confirm: confTrim.toLowerCase()
    };

    console.log(data);

    setuser({ 
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      password: '',
      confirm: '',
    });

    swal({
      title: "Registro exitoso!!",
      text: "Ya puedes usar nuestras aplicaciones",
      icon: "success",
      button: "Aceptar",
    })
  };

  return (
    <main className="registration-main">
      <section className="container regist-section">
        <div className="form-container">
          <form onSubmit={submit}>
            <h1 className="form-title" data-error={errorMsgSubmit}>Registro</h1>
            <Input
              type="text"
              name="nombre"
              label="Nombre:"
              placeholder="Juan"
              value={user.nombre}
              handleInputChange={handleInputChange}
              handleError={handleError}
              error={errors.nombre}
            />
            <Input
              type="text"
              name="apellido"
              label="Apellido:"
              placeholder="Gomez"
              value={user.apellido}
              handleInputChange={handleInputChange}
              handleError={handleError}
              error={errors.apellido}
            />
            <Input
              type="email"
              name="email"
              label="Email:"
              placeholder="mimail@gmail.com"
              value={user.email}
              handleInputChange={handleInputChange}
              handleError={handleError}
              error={errors.email}
            />
            <Input
              type="tel"
              name="telefono"
              label="Teléfono (sin guiones ni espacios):"
              placeholder="1198765432"
              value={user.telefono}
              handleInputChange={handleInputChange}
              handleError={handleError}
              error={errors.telefono}
            />
            <Input
              type="password"
              name="password"
              label="Contraseña:"
              placeholder="Ingresa contraseña"
              value={user.password}
              handleInputChange={handleInputChange}
              handleError={handleError}
              error={errors.password}
            />
            <Input
              type="password"
              name="confirm"
              label="Confirmar Contraseña:"
              placeholder="Ingresa nuevamente contraseña"
              value={user.confirm}
              handleInputChange={handleInputChange}
              handleError={handleError}
              error={errors.confirm}
            />
            <Button type="submit" text="Registrame" />
          </form>
        </div>
      </section>
    </main>
  );
};
