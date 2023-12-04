//Een component bevat altijd:
//1. Functie declaratie (met Hoofdletter!)
//2. Functie geeft HTML terug in de return
//3. Functie moet geexporteerd worden

//Stappenplan component maken
//1. Maak een apart bestandje
//2. Voeg de essentiele onderdelen toe
//3. Kopieer de bestaande code naar jouw component
//4. Importeer het component naar App.jsx en check of de component ook wordt weergegeven (soms moet je een regeltje uitzetten)
//5. Welke overeenkomsten zie je en hoe zou je die properties noemen?
// tileTitle tileImage tileImageDescription children
//6. Geef de properties (geef ze ook een waarde) vanuit App.jsx mee aan het component
//7. Ontvang de propererties in het component (props)
//8. Geef de properties op de juiste plek weer
//9. Optioneel: destructure alle properties

function Tile(props) {
    return (
         <section>
            {props.tileImage && <img src={props.tileImage} alt={props.tileImageDescription}/>}
            <h2>{props.tileTitle}</h2>
            {props.children}
         </section>
    )
}

export default Tile;