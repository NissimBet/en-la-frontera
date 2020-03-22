import React from "react";
import styled from "styled-components";

const NewsContent = styled.div`
  margin: 20px 30px;
`;
const NewsContainer = styled.div`
  margin-left: 20px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;
const InfoContent = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const EstructuraNews: React.FunctionComponent = () => {
  return (
    <div>
      <NewsContainer>
        <h1>Titulo</h1>
        <InfoContainer>
          <h4>Fecha: Hoy</h4>

          <h4>By: Gabriel Turriza</h4>
          <h4>Share: Facebook</h4>
        </InfoContainer>
      </NewsContainer>
      <img
        style={{ objectFit: "scale-down" }}
        src="/assets/SpiderSignal.jpeg"
        alt="News"
        width={500}
        height={200}
      />
      <NewsContent>
        <p>
          Un texto es una composición de signos codificados en un sistema de
          escritura que forma una unidad de sentido. También es una composición
          de caracteres imprimibles (con grafema) generados por un algoritmo de
          cifrado que, aunque no tienen sentido para cualquier persona, sí puede
          ser descifrado por su destinatario original. En otras palabras, un
          texto es un entramado de signos con una intención comunicativa que
          adquiere sentido en determinado contexto.{" "}
        </p>
      </NewsContent>
      <NewsContent>
        <p>
          Las ideas que comunica un texto están contenidas en lo que se suele
          denominar «macroproposiciones», unidades estructurales de nivel
          superior o global, que otorgan coherencia al texto constituyendo su
          hilo central, el esqueleto estructural que cohesiona elementos
          lingüísticos formales de alto nivel, como los títulos y subtítulos, la
          secuencia de párrafos, etc. En contraste, las «microproposiciones» son
          los elementos coadyuvantes de la cohesión de un texto, pero a nivel
          más particular o local.
        </p>
      </NewsContent>
      <NewsContent>
        <p>
          Esta distinción fue realizada por Teun van Dijk en 1980.1​ El nivel
          microestructural o local está asociado con el concepto de cohesión. Se
          refiere a uno de los fenómenos propios de la coherencia, el de las
          relaciones particulares y locales que se dan entre elementos
          lingüísticos, tanto los que remiten unos a otros como los que tienen
          la función de conectar y organizar. También es un conjunto de
          oraciones agrupadas en párrafos que habla de un tema determinado.
        </p>
      </NewsContent>
    </div>
  );
};

export default EstructuraNews;
