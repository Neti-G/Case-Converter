import Title from './components/Title'
import { useState } from 'react';
import TextArea from './components/TextArea';
import { SenteneCaseButton, LowerCaseButton, UpperCaseButton, CapitalizedCaseButton, AlternatingCaseButton, TitleCaseButton, InverseCaseButton, DownloadTextButton, CopyToClipboardButton } from './components/Buttons.js'
import './App.css';

export default function App() {

    const [text, setText] = useState("")

    function handleChange(event) {
        setText(event.target.value)
    }
    
    function changeText(newText) {
        setText(newText)
    }
    return (
        <div className="App">
            <Title />
            <TextArea change={handleChange} value={text} />
            <div className='buttons-container'>
                <SenteneCaseButton text={text} handleClick={changeText} />
                <LowerCaseButton text={text} handleClick={changeText} />
                <UpperCaseButton text={text} handleClick={changeText} />
                <CapitalizedCaseButton text={text} handleClick={changeText} />
                <AlternatingCaseButton text={text} handleClick={changeText} />
                <TitleCaseButton text={text} handleClick={changeText} />
                <InverseCaseButton text={text} handleClick={changeText} />
                <DownloadTextButton text={text} handleClick={changeText} />
                <CopyToClipboardButton text={text} handleClick={changeText} />
            </div>
        </div>
    );
}