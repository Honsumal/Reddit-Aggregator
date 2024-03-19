import React, {useState} from 'react'
import NavTabs from './NavTabs';
import {TextField, Box, Button} from '@mui/material'



export default function Home() {

    const [data, setData] = useState('');
    //const [seed, setSeed] = useState(1);

    //let query = localStorage.getItem('query')

    let article_list = []

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
    // const reset = () => {
    //     setSeed(Math.random())
    // }

    //Button Stuff
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Button Works');
        makeQuery(localStorage.getItem('query'))
        //window.location.reload()
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
        .then(json => setData(json))
        .catch(error => console.error(error));
      
    //console.log (data.articles, data.articles.length)

    for (let i = 0; i < data.articles.length; i++) {

        article_list.push(

        <div>
            <div className='container2'>
                    <a href={data.articles[i].link}><h1>{data.articles[i].title}</h1></a>

                    <br></br>

                    <h2>{data.articles[i].author}</h2>

                    <br></br>
                    
                    <text>{data.articles[i].summary}</text>   
                    
            </div>

            <br></br>

        </div>
        )
        
    }

    console.log(article_list)
      
}

// if (localStorage.getItem("query")) {
//     makeQuery(query)
// }

// for (let i = 0; i < result.length; i++) {

//     article_list.push(

//     <div>
//         <div className='container2'>
//                 <a href={result[i].link}><h1>{result[i].title}</h1></a>

//                 <br></br>

//                 <h2>{result[i].author}</h2>

//                 <br></br>
                
//                 <text>{result[i].summary}</text>   
                
//         </div>

//         <br></br>

//     </div>
//     )
    
// }

    // for (let i = 0; i < data.length; i++) {

    //     article_list.push(

    //     <div>
    //         <div className='container2'>
    //                 <a href={data[i].link}><h1>{data[i].title}</h1></a>

    //                 <br></br>

    //                 <h2>{data[i].author}</h2>

    //                 <br></br>
                    
    //                 <text>{data[i].summary}</text>   
                    
    //         </div>

    //         <br></br>

    //     </div>
    //     )
        
    // }
    

    return (
        <div>
            <NavTabs  />
            <br></br>
            <div>
                <Box sx={{ml:'auto'}}>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{input:{color: '#fcbf49', width: 1000}, paddingRight:3}} placeholder="Enter your query ..." onInput={e=>localStorage.setItem("query", e.target.value)}/>
                    <Button type='submit' sx={{marginTop:1}} variant='contained'>Seach</Button>
                </form>
                </Box>
            </div>
            <br></br>
            <div className='container'>
                
                <br></br>

                {data ? article_list && 'Something Searched' : 'Search Something!'}

                <br></br>
                
            </div>

            <br></br>
        </div>
    )
}   