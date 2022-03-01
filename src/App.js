import React, { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }
  const onChangeImage = function (evento) {
    setImage(evento.target.value)
  }
  const onClickExportar = function () {
    html2canvas(document.querySelector("#meme"),{useCORS: true}).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <div className="controls">
        <select onChange={onChangeImage}>
          <option value="fire">Casa en llamas</option>
          <option value="futurama">futurama</option>
          <option value="history">History Channel</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart Guy</option>
        </select> <br />

        <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" /><br />
        <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" /><br />
        <button onClick={onClickExportar}>Exportar</button>
      </div>
      <div className="meme" id="meme">
        <img src={`./img/${image}.jpg`} alt="Selecciona una imagen" />
        <div id="memeText">
          <span id="line1">{linea1}</span><br />
          <span id="line2">{linea2}</span>
        </div>

      </div>

    </div>
  );
}

export default App;
