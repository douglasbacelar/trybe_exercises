import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe("Tela de inserção de email", () => {
  it('Verificando se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getAllByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email')
  });
  
  it('Verificando se existem dois botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
  
  it('Verificando se existe um botão de enviar', () => {
    render(<App />);
    const btnSend = screen.getByTestId('id-send');
    expect(btnSend).toBeInTheDocument();
    expect(btnSend).toHaveProperty('type', 'button');
    expect(btnSend).toHaveValue('Enviar');
  });
  
  it('Verifica que ao digitar o email e clicar em enviar, o email é renderizado', () => {
    render(<App />);
  
    //Acessar os elementos da tela
    const inputEmail = screen.getByLabelText("Email");
    const button = screen.getByTestId("id-send");
    const userEmail = screen.getByTestId("id-email-user");
  
    // Interagir com os elementos (se for necessário)
    userEvent.type(inputEmail, "teste@teste.com");
    userEvent.click(button);
    
      // Fazer os tetes
      expect(inputEmail).toHaveValue("");
      expect(userEmail).toHaveTextContent("Valor: teste@teste.com")
  });
  
})

