import React,{useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
import './App.css';
import NewsCards from './components/NewsCards';

const alanKey = 'fac88c558bd55086b315f1c5974d94082e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = ()=> {
  const [newsArticles,setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(()=>{
    alanBtn({
      key: alanKey,
      onCommand: ({command,articles,number})=>{
          if(command == 'fetchedArt'){
              setNewsArticles(articles);
              setActiveArticle(-1);
            
          }
          else if(command == 'highlight'){
              setActiveArticle(prevArticle=> prevArticle + 1);
          }
          else if(command == 'open'){
            const parsedNum = number.length > 2 ? wordsToNumbers(number,{fuzzy:true}) : number;
            if(parsedNum < 20){
              alanBtn().playText('Opening..');
            window.open(articles[parsedNum - 1 ].url,'_blank');
            }
          }
          
      }
    })
  },[]);

  return (
    <div >
      <div className="logoContainer">
        <img src="https://alan.app/voice/images/previews/preview.jpg" className="alanLogo"/>
      </div>
      <NewsCards articles = {newsArticles} activeArticle ={activeArticle}/>
    </div>
  );
}

export default App;
