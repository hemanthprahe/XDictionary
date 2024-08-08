import React, { useState } from 'react'

const Dictionary = () => {
    const [dictionary] = useState(
        [
        
            { word: "React", meaning: "A JavaScript library for building user interfaces." },
        
            { word: "Component", meaning: "A reusable building block in React." },
        
            { word: "State", meaning: "An object that stores data for a component." }
        
        ]
        )
    const [searchTerm,setSearchTerm] = useState("")
    const [meaning,setMeaning] = useState("")

    const handleChange = ()=>{
        const term = searchTerm.toLowerCase()
        const found = dictionary.find((words)=>words.word.toLowerCase() === term)
        setMeaning(found ? found.meaning : "Word not found in the dictionary.")
    }

  return (
    <div>
        <h1>Dictionary App</h1>
        <input type='text' placeholder='Search for a word...' onChange={(e)=>setSearchTerm(e.target.value)}/>
        <button onClick={handleChange}>Search</button>
        <h4>Definition:</h4>
        <p>{meaning}</p>
    </div>
  )
}

export default Dictionary