import React, {useState} from 'react'
import NavTabs from './NavTabs';



export default function Home() {

    let result = [
                    {
                        title: "Title 1",
                        link: "#",
                        author: "Source",
                        summary: "I am a teapot short and stout. Here is my handle here is my snout. Hashire zori yo, kaze no yo ni. Tsukimihara wo, padoru padoru."
                    },
                    {
                        title: "Title 2",
                        link: "#",
                        author: "Source",
                        summary: "I am a teapot short and stout. Here is my handle here is my snout. Hashire zori yo, kaze no yo ni. Tsukimihara wo, padoru padoru."
                    },
                    {
                        title: "Title 3",
                        link: "#",
                        author: "Source",
                        summary: "I am a teapot short and stout. Here is my handle here is my snout. Hashire zori yo, kaze no yo ni. Tsukimihara wo, padoru padoru."
                    }

    ]

    let article_list = []

    for (let i = 0; i < result.length; i++) {

        article_list.push(

        <div>
            <div className='container2'>
                    <a href={result[i].link}><h1>{result[i].title}</h1></a>

                    <br></br>

                    <h2>{result[i].author}</h2>

                    <br></br>
                    
                    <text>{result[i].summary}</text>   
                    
            </div>

            <br></br>

        </div>
        )
        
    }
    

    return (
        <div>
            <NavTabs  />
            <br></br>
            <div className='container'>
                
                <br></br>

                {article_list}

                <br></br>
                
            </div>

            <br></br>
        </div>
    )
}   