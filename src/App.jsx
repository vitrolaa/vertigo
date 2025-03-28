import logoImg from "./assets/logo.svg";

export function App() {
  return (
    <div className="container">
      <div className="s-form">
        <img src={logoImg} alt="" />
        <div className="content">
          <h1 className="title">Acesse a plataforma</h1>
          <p className="description">
            Faça login ou registre-se para começar a construi se seus projetos
            ainda hoje.
          </p>

          <form action="">
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" />

            <div className="s-forgot-password">
              <label htmlFor="">Senha</label>
              <a href="">Esqueceu a senha?</a>
            </div>
            <input type="password" placeholder="Digite sua senha" />

            <button type="submit" className="sign-in-btn">
              Entrar
            </button>
          </form>
          <p className="sign-up">
            Ainda não tem uma conta? <a href="">Inscreva-se</a>
          </p>
        </div>
      </div>
      <div className="s-img" />
    </div>
  );
}
