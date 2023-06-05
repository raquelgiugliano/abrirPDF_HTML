import "./App.css";

function App() {
  return (
    <div>
      <h1>Abrir PDF</h1>
      <iframe src="../src/files/programa_electoral.pdf" height="100%" width="100%"></iframe>
      {/* <object data="files/programa_electroral.pdf" height="100%" width="100%"></object> */}
      {/* <embed
        src="../src/files/programa_electoral.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      /> */}
      <a href="../src/files/programa_electoral.pdf" target="_blank">Mi PDF</a>
    </div>
  );
}

export default App;
