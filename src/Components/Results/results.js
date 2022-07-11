import react from "react"
import React, {useState, useEffect} from "react"
import "./results.css"

export function Button2 (){
   const [clicked, setClicked] = useState(0)



const ingredients = ["Gurken", "Anis", "Milch", "Nuss", "Sahne", "Hühnchen", "Karotten"]
const types = ["Kaffee", "Tee", "Drink", "Schnaps", "Shake", "Mix", "Suppe", "Smoothie"]
const adjectives = ["Lecker:", "Natürlich:", "Super gesund:", "Abenteuerlich:", "Tibetanischer Style:"]

var ing1 = ingredients[Math.floor(Math.random()*ingredients.length)]
var ing2 = ingredients[Math.floor(Math.random()*ingredients.length)]

const adj = adjectives[Math.floor(Math.random()*adjectives.length)]
const type = types[Math.floor(Math.random()*types.length)]

//verhindern, dass zwei Zutaten gleich sind:
do {ing2 = ingredients[Math.floor(Math.random()*ingredients.length)]
}
while(ing1 === ing2)

const drink = adj + " " + ing1 + " - "+ ing2 + " " + type




return <div className="Buttondiv2">
    <button className="Button2" onClick={()=>setClicked(clicked+1)}>Namen generieren</button>
        <p className="result">{drink}</p>
        </div>
   
}
export default Button2





