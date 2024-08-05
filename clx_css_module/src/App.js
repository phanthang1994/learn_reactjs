import "./styles.css";
import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: "10px 32px" }}>
        <Button />
        <Button primary />
        <Button secondary />
        <Button success />
        <Button danger />
        <Button warning />
        <Button info />
        <Button light />
        <Button dark />
      </div>
    </GlobalStyles>
  );
}

export default App;
