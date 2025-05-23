import { useEffect } from 'react';

// questionCategory is passed from TriviaQuestions.jsx. That is then passed thourgh a if else statment
// that sets the state of the pageTheme based on the category selected. 

function TriviaTheme({ questionCategory, setPageTheme }) {

    useEffect(() => {
        if (questionCategory === "10") {
            setPageTheme({
                background: "url('/src/assets/book2-background.jpg') center center / cover no-repeat",

            });
        } else if (questionCategory === "11") {
            setPageTheme({
                background: "url('/src/assets/movie2-background.jpg') center center / cover no-repeat",
                color: "black"
            });
        } else if (questionCategory === "14") {
            setPageTheme({
                background: "url('/src/assets/tv-background.jpg') center center / cover no-repeat",

            });
        } else if (questionCategory === "15") {
            setPageTheme({
                background: "url('/src/assets/vg-background.jpg') center center / cover no-repeat",
                color: "black"
            });
        } else {
            setPageTheme({
                background: "url('/src/assets/random2-background.jpg') center center / cover no-repeat",
                color: "black"
            });
        }
    }, [questionCategory, setPageTheme]);

    return null;
}


export default TriviaTheme;