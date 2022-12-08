import Button from './components/Button';
import Input from './components/Input';

import { Container, Content, Row } from './styles/styles';
import { useState } from 'react';


function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    } else {
      const subtract = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtract))
      setOperation('')
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('×')
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply))
      setOperation('')
    }
  }

  const handleDivNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('÷')
    } else {
      const divide = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(divide))
      setOperation('')
    }
  }

  const handleConvertNumbers = () => {
    const convert = Number(currentNumber) * (-1);
    setCurrentNumber(String(convert))
    setOperation('')
  }

  const handleSqrtNumber = () => {
    if(currentNumber < 0) {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('Entrada Inválida. ')
      setOperation('x²')
    } else {
      const sqrt = Math.sqrt(Number(currentNumber));
      setCurrentNumber(String(sqrt))
      setOperation('')    
    } 
  }

  const handleSqrNumber = () => {
    const sqr = Number(currentNumber) ** 2;
    setCurrentNumber(String(sqr))
  }

  const handleDotNumber = () => {
    const dot = Number(currentNumber) + '.';
    setCurrentNumber(String(dot))
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

        case '×':
          handleMultNumbers();
          break;

        case '÷':
          handleDivNumbers();
          break;

        case '+/-':
          handleConvertNumbers();
          break;

        case '√x':
          handleSqrtNumber();
          break;

        case 'x²':
          handleSqrNumber();
          break;

        case '.':
          handleDotNumber();
          break;

        default: 
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="√x" onClick={handleSqrtNumber}/>
          <Button label="x²" onClick={handleSqrNumber}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="÷" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="×" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="+/-" onClick={handleConvertNumbers}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="." onClick={handleDotNumber}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
