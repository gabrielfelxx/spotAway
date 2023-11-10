// src/components/LoginDropdown.tsx
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import "./style.scss";

interface LoginDropdownProps {
  onClose: () => void;
}

const LoginDropdown: React.FC<LoginDropdownProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = async () => {
    try {
      await schema.validate({ email, password }, { abortEarly: false });
      // Se a validação for bem-sucedida, faça a chamada à API com Axios
      const response = await axios.post("SUA_URL_API_AQUI", { email, password });
      console.log("API Response: ", response.data);
      // Reset dos campos e limpeza de erros
      setEmail("");
      setPassword("");
      setError("");
      onClose(); // Fechar o dropdown após o login bem-sucedido
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setError("Por favor, verifique os campos.");
      } else {
        setError("Erro ao fazer login. Verifique suas credenciais.");
      }
    }
  };

  return (
    <div className='container'>
      <div className="login-dropdown">
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Entrar</button>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default LoginDropdown;
