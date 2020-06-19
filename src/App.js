import React, { useState } from 'react';
import './App.css';

function App() {
  const [dump, setDump] = useState([
      '89', '50', '4e', '47', '0d', '0a', '1a', '0a', '00', '00', '00', '0d', '49', '48', '44', '52',
      '00', '00', '00', '20', '00', '00', '00', '20', '08', '06', '00', '00', '00', '73', '7a', '7a',
      'f4', '00', '00', '07', 'cf', '49', '44', '41', '54', '58', 'c3', '4d', '97', '3d', '8f', '2c',  
      '4b', '56', '45', 'd7', 'f9', '88', 'cc', 'ea', 'be', 'f7', '31', '48', '48', '48', 'a0', '31',  
      '06', 'e3', '69', '40', '03', '36', 'c2', 'c0', '44', '02', '3d', '84', '01', '2e', '2e', '26',  
      '06', '0e', '3f', '00', '17', '0b', '1f', '03', '07', '9f', 'ff', '80', '84', '8d', '0f', '12',  
      '78', '18', 'c0', 'd3', '65', '5e', '57', '57', '66', 'c4', 'f9', 'c0', 'c8', 'ba', '0d', 'e5',  
      '95', 'aa', '22', '23', 'ce', '39', '2b', 'f6', 'de', '29', '3f', 'fe', 'f6', '37', 'db', '7d',  
      'a3', 'ba', '69', '15', 'ba', '1b', '55', '45', '44', '01', '68', '69', 'cc', '8c', 'ce', '40',  
      '55', '51', '75', 'b2', '9a', '7f', 'fd', 'e7', '7f', '1a',  
  ]);
  const [lineWidth, setLineWidth] = useState(16);
  const [selection, setSelection] = useState();
  const [selectionStart, setSelectionStart] = useState();
  const [selectionEnd, setSelectionEnd] = useState();
  const [isSelecting, setIsSelecting] = useState(false);

  const renderOffset = () => {
    const nLines = Math.ceil(dump.length/lineWidth);
    const lines = [ ...Array(nLines).keys()].map((n, i) => (i * lineWidth).toString(16).padStart(8, '0'));
    const lineElems = lines.map((l, i) => {
      return (
        <div className="Offset__line" key={i}>
          {l}
        </div>
      );
    });
    return (
      <div className="Offset">
        {lineElems}
      </div>
    );
  };
  const renderDump = () => {
    const handleMouseOverCell = e => {
      const cellIndex = Array.from(e.target.parentNode.children).indexOf(e.target)
      setSelection(cellIndex);
      if (isSelecting) {
        setSelectionEnd(cellIndex);
      }
    };
    const handleCellPress = e => {
      setSelectionEnd(null);
      setSelectionStart(selection);
      setIsSelecting(true);
    };
    const handleCellRelease = e => {
      setSelectionEnd(selection);
      setIsSelecting(false);
    };
    const dumpCells = dump.map((b, i) => {
      return (
        <div
          className={`Dump__cell ${(i === selection) || (selectionEnd && i >= Math.min(selectionStart, selectionEnd) && i <= Math.max(selectionStart, selectionEnd)) ? 'Dump__cell--selected' : ''}`}
          onMouseOver={handleMouseOverCell}
          onMouseDown={handleCellPress}
          onMouseUp={handleCellRelease}
          onMouseLeave={() => {setSelection(null)}}
          key={i}
        >
          {b}
        </div>
      );
    });
    return (
      <div
        className="Dump"
        style={{gridTemplateColumns: `repeat(${lineWidth}, 1fr)`}}
      >
        {dumpCells}
      </div>
    );
  };
  const renderAscii = () => {
    const handleMouseOverCell = e => {
      const cellIndex = Array.from(e.target.parentNode.children).indexOf(e.target)
      setSelection(cellIndex);
      if (isSelecting) {
        setSelectionEnd(cellIndex);
      }
    };
    const handleCellPress = e => {
      setSelectionEnd(null);
      setSelectionStart(selection);
      setIsSelecting(true);
    };
    const handleCellRelease = e => {
      setSelectionEnd(selection);
      setIsSelecting(false);
    };

    const ascii = dump.map(b => {
      const formatted = String.fromCharCode(parseInt(b, 16));
      return formatted.replace(/[^ -~]+/g, '.');
    });

    const asciiLines = ascii.map((l, i) => {
      return (
        <div
          className={`Ascii__cell ${(i === selection) || (selectionEnd && i >= Math.min(selectionStart, selectionEnd) && i <= Math.max(selectionStart, selectionEnd)) ? 'Ascii__cell--selected' : ''}`}
          onMouseOver={handleMouseOverCell}
          onMouseDown={handleCellPress}
          onMouseUp={handleCellRelease}
          onMouseLeave={() => {setSelection(null)}}
          key={i}
        >
          {l}
        </div>
      );
    });
    return (
      <div
        className="Ascii"
        style={{gridTemplateColumns: `repeat(${lineWidth}, 1fr)`}}
      >
        {asciiLines}
      </div>
    );
  };
  return (
    <div className="App">
      <div className="HexViewer">
        <div className="HexViewer__data">
          {renderOffset()}
          {renderDump()}
          {renderAscii()}
        </div>
        <div>Selection start: {selectionStart}</div>
        <div>Selection end: {selectionEnd}</div>
      </div>
    </div>
  );
}

export default App;
