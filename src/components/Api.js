import React, { useEffect, useState } from "react"
import axios from "axios"
import Wrapper from "./Wrapper"
import SearchBars from "./SearchBars"
import Student from "./Student"


const Api = () => {

    const [data, setData] = useState()

    const api_call = async () => { // ask about what the role of async is in this function (method)? both words used. I'd call it a function. explain my thoughts on functions vs methods.
        const url = "https://api.hatchways.io/assessment/students"
        const request = axios.get(url); // we're using axios to make the request. 
        //axios is a promise-based library. Meaning we have to actually resolve the promise after making the request.
        // we could use .then and .catch, but there is a more cleaner and elegant way of handling promises: async and await.
        const response = await request; // because we have no idea how long it will take axios to get the data back from the API. Until then, we don't want this method to execute.
        //this is where we bring in the keyword await.

        setData(response.data)
        // this is all we need to communicate with the api. async and await is a more elegant way to do this than get & fetch.

        //this async-await combination is going to make sure that this whole api call method does not go any further until axios has successfully made the request, and received the data back from the API.
        // all of that data will be stored inside of the response variable. 
    }

    // we've only declared the api_call method. We have no way of calling it. We want to call this method as soon as it is rendered onto the DOM. So we use the useEffect hook.
    // to use the effect hook, we have to import it with the react package.

    useEffect(() => {
        api_call(); // this will make sure that the api method will be called as soon as it is rendered onto the screen.
    }, [])

    return (
        <Wrapper>
        <SearchBars/>
        { data && <Student api_fetch={data}/>} {/* This conditionally renders the student data IF THERE's a response from API. */}
        </Wrapper>
    )

}

export default Api