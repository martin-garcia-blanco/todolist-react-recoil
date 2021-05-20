import logo from "../../logo.svg";

const Header = () => {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Example of todolist build with React and Recoil</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <a
        className="App-link"
        href="https://recoiljs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Recoil
      </a>
    </>
  );
};

export default Header;
