import llamaPic from "../assets/llama.jpeg";
import alpacaPic from "../assets/alpaca.jpeg";
export function Home() {
 return(
    <div className="body-copy">
    <h1>Which are better, llamas or alpacas?</h1>
        <p>
            Is this the last word in the debate? Have you made a choice? Use the
            navigation to learn more about each one and then you can decide which win: <strong>Llamas</strong> or <strong>Alpacas</strong>
        </p>
        <img src={llamaPic} alt="llama" />
        <img src={alpacaPic} alt="alpaca" />
    </div>
 )
}