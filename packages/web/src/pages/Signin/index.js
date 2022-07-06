export default function Signin() {
  return (
    <form action="/authenticate" method="post">
      <fieldset>
        <label for="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          inputmode="email"
          autocomplete="username"
        />
      </fieldset>
      <fieldset>
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
}
