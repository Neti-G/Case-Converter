function SenteneCaseButton(props) {
    function sentenceCase(text) {
        const textArr = text.split(".")
        const newArray = textArr.map(sentence => {
            let newSentence = ""
            let i = 0
            while (i < sentence.length) {
                if (sentence.charAt(i) === " ") {
                    newSentence += sentence.charAt(i)
                    i++
                }
                else {
                    break
                }
            }
            newSentence += sentence.charAt(i).toUpperCase() + sentence.slice(i + 1).toLowerCase()
            return newSentence
        })
        return newArray.join(".")
    }
    return (
        <button onClick={() => props.handleClick(sentenceCase(props.text))}>Sentence Case</button>
    )
}

function LowerCaseButton(props) {
    function lowerCase(text) {
        return text.toLowerCase()
    }

    return (
        <button onClick={() => props.handleClick(lowerCase(props.text))}>Lower Case</button>
    )
}

function UpperCaseButton(props) {
    function upperCase(text) {
        return text.toUpperCase()
    }

    return (
        <button onClick={() => props.handleClick(upperCase(props.text))}>Upper Case</button>
    )
}

function CapitalizedCaseButton(props) {
    function capitalizedCase(text) {
        const textArr = text.split(" ")
        const newArray = textArr.map(sentence => {
            return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
        })
        return newArray.join(" ")
    }

    return (
        <button onClick={() => props.handleClick(capitalizedCase(props.text))}>Capitalized Case</button>
    )
}

function AlternatingCaseButton(props) {
    function alternatingCase(text) {
        let newText = ""
        let i = 0
        while (text.charAt(i) === " ") {
            i++
        }
        for (let j = 0; j + i < text.length; j++) {
            if (j % 2 === 0) {
                newText += text.charAt(j + i).toLowerCase()
            }
            else {
                newText += text.charAt(j + i).toUpperCase()
            }
        }
        return newText
    }
    return (
        <button onClick={() => props.handleClick(alternatingCase(props.text))}>aLtErNaTiNg CaSe</button>
    )
}

function TitleCaseButton(props) {
    function titleCase(text) {
        const words = [
            "a", "an", "as", "at", "be", "by", "for", "from", "has", "he", "in", "is", "it", "its", "of", "on", "that", "the", "to", "was", "were", "will", "with"
        ];
        const textArr = text.split(" ")
        const newArray = textArr.map(sentence => {
            if (words.includes(sentence.trim())) {
                return sentence
            }
            else {
                return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
            }
        })
        return newArray.join(" ")
    }
    return (
        <button onClick={() => props.handleClick(titleCase(props.text))}>Title Case</button>
    )
}

function InverseCaseButton(props) {
    function inverseCase(text) {
        let lowerText = text.toLowerCase()
        let newText = ""
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) === lowerText.charAt(i)) {
                newText += text.charAt(i).toUpperCase()
            }
            else {
                newText += text.charAt(i).toLowerCase()
            }
        }
        return newText
    }
    return (
        <button onClick={() => props.handleClick(inverseCase(props.text))}>Inverse Case</button>
    )
}

function DownloadTextButton(props) {
    function downloadText(text) {

        const fileBlob = new Blob([text], { type: 'text/plain' });
        const fileUrl = URL.createObjectURL(fileBlob);

        const downloadLink = document.createElement('a');
        downloadLink.href = fileUrl;
        downloadLink.download = 'user_text.txt';
        downloadLink.click();

        URL.revokeObjectURL(fileUrl);
        
        return text
    }
    return (
        <button onClick={() => props.handleClick(downloadText(props.text))}>Download Text</button>
    )
}

function CopyToClipboardButton(props) {
    function copyToClipboard(text) {
        console.log(text)
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);
            })

            return text
    }
    return (
        <button onClick={() => props.handleClick(copyToClipboard(props.text))}>Copy to Clipboard</button>
    )
}

export { SenteneCaseButton, LowerCaseButton, UpperCaseButton, CapitalizedCaseButton, AlternatingCaseButton, TitleCaseButton, InverseCaseButton, DownloadTextButton, CopyToClipboardButton }