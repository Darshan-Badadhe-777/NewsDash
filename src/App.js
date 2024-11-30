import React, {useEffect, useState} from "react";
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';



import NewsCards from './Components/NewsCards/NewsCards';
import useStyles from './styles.js';

const alanKey = 'fc87a22485be18c4d51b85d5d8f20d7e2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    // eslint-disable-next-line
    const classes = useStyles();

   useEffect(() => {

     alanBtn({
        key: alanKey,
        onCommand:  ({command, articles, number }) => {

            if(command === 'newHeadlines'){

               setNewsArticles(articles);
               setActiveArticle(-1);
                
            }else if (command === 'highlight') {
                setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
              } else if (command === 'open') {
                const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                const article = articles[parsedNumber - 1];
      
                if (parsedNumber > articles.length) {
                  alanBtn().playText('Please try that again...');
                } else if (article) {
                  window.open(article.url, '_blank');
                  alanBtn().playText('Opening...');
                } else {
                  alanBtn().playText('Please try that again...');
                }
              }

            

        }
     })

   }, []);


    return(
        <div>

           <div id="hdiv">

             <h3 id="heading">NewsDASH - Voice Controlled News Application</h3>

            </div> 
            {/* <div className={classes.logoContainer}>

                <img id="alanlogo" className={classes.alanLogo} src="" alt="Alan Logo" />

            </div> */}
            <NewsCards articles={newsArticles}  activeArticle={activeArticle} />
        
            <div id="footer">
             <h4>Developer - Darshan Badadhe</h4>
            
            </div>
        </div>
    )
}

export default App;