import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #2c3e50, #34495e); /* Degradado oscuro */
  color: #ffffff; /* Color de texto blanco */
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffffff; /* Texto blanco para mayor contraste */
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 12px 28px;
  background: #2980b9; /* Color de fondo para el botón */
  color: #ffffff; /* Texto blanco */
  border: none;
  border-radius: 24px; /* Bordes redondeados */
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: #3498db; /* Color más claro al hacer hover */
    transform: scale(1.05); /* Aumento ligero al hacer hover */
  }
`;
