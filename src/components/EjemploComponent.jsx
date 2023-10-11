import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

//use effect => *Recomendado* se ejecuta una vez que el componente ya fue renderizado
//use LayoutEffect =>  se ejecuta antes de que el componente se haya renderizado,  orden de jerarquia, este metodo se ejecuta antes que el useEffect y cuando no se ha pintado nada en la pantalla
export const EjemploComponent = () => {
  const [mostrar, setMostrar] = useState(false);
  const caja = useRef();
  const btn = useRef();

  useLayoutEffect(() => {
    //   antes de que se pinten las cosas en pantalla
    console.log("useLayoutEffect: Componente cargado");
  }, []);

  useEffect(() => {
    //despues de que se pinten las cosas en pantalla
    console.log("useEffect: Componente cargado");
    if (caja.current == null) {
      return;
    }
    const { bottom } = btn.current.getBoundingClientRect();

    setTimeout(() => {
      caja.current.style.marginTop = `${bottom + 45}px`;
      caja.current.style.left = `${bottom + 45}px`;
    }, 1000);
  }, [mostrar]);

  return (
    <div>
      <h1>Ejemplo use effect y use layout effect</h1>

      <button onClick={() => setMostrar(!mostrar)} ref={btn}>
        Mostrar Mensaje
      </button>

      {mostrar && (
        <div id="caja" ref={caja}>
          Soy un mensaje
        </div>
      )}
    </div>
  );
};
