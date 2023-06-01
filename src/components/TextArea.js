import './style.css'

export default function TextArea(props){
    return(
        <textarea
            rows="20" 
            placeholder="Type or paste your content here" 
            onChange={props.change} 
            value={props.value} 
         />
    )
}