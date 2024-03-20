import React, {useState, useEffect} from 'react'
import NavTabs from './NavTabs';
import {TextField, Box, Button} from '@mui/material'



export default function Home() {

// let result= {articles:[
//     {
//         title: "Title 1",
//         link: "#",
//         author: "Source",
//         summary: "I am a teapot short and stout. Here is my handle here is my snout. Hashire zori yo, kaze no yo ni. Tsukimihara wo, padoru padoru."
//     },
//     {
//         title: "Title 2",
//         link: "#",
//         author: "Source",
//         summary: "I am a teapot short and stout. Here is my handle here is my snout. Hashire zori yo, kaze no yo ni. Tsukimihara wo, padoru padoru."
//     },
//     {
//         title: "Title 3",
//         link: "#",
//         author: "Source",
//         summary: "I am a teapot short and stout. Here is my handle here is my snout. Hashire zori yo, kaze no yo ni. Tsukimihara wo, padoru padoru."
//     }
    
// ]
//}



    const [input, setInput] = useState('');
    //const [count, setCount] = useState(0);
    const [article_list, setArticleList] = useState([]);


    //Button Stuff
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Button Works');
        makeQuery(input)
    }

    function handleInput(event) {
        event.preventDefault();
        setInput(event.target.value)
    }


 
//Query Testing
function makeQuery (search) { 

    console.log("senzaemon", search)

    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b8835ac7f4msh09512c251bb8c50p1f9a63jsnfcf8c28c6887',
            'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
        }
    };
        
      fetch('https://free-news.p.rapidapi.com/v1/search?q=' + search + '&lang=en', options)
        .then(response => response.json())
        .then(json => displayQuery(json))
        .catch(error => console.error(error));    
}

function displayQuery (dayta) {

    //setCount(count+1)
    
    let new_A = []
   
    for (let i = 0; i < dayta.articles.length; i++) {

        new_A.push(

        <div>
            <div className='container2'>
                    <a href={dayta.articles[i].link}><h1>{dayta.articles[i].title}</h1></a>

                    <br></br>

                    <h2>{dayta.articles[i].author}</h2>

                    <br></br>
                    
                    <text>{dayta.articles[i].summary}</text>   
                    
            </div>

            <br></br>

        </div>
        )
        
    }

    setArticleList(new_A)
    
    console.log(article_list)

}



    return (
        <div>
            <NavTabs  />
            <br></br>
            <div>
                <Box sx={{ml:'auto'}}>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{input:{color: '#fcbf49', width: 1000}, paddingRight:3}} placeholder="Enter your query ..." onInput={handleInput}/>
                    <Button type='submit' sx={{marginTop:1}} variant='contained'>Search</Button>
                </form>
                </Box>
            </div>
            <br></br>
            <div className='container'>
                
                <br></br>

                <div>{article_list}</div>

                <br></br>
                
            </div>

            <br></br>
        </div>
    )
}   