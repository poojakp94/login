import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {useEffect, useState} from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 20px 0;
`
const Wrapper = styled.div`
    display: flex;
    width: 500px;
    gap: 20px;
    padding: 10px;

`
const Vote = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


function Movies() {
    const [moviesData, setMoviesData] = useState([])
  useEffect(() => {
    (async () => {
      const rawResponse = await fetch('https://hoblist.com/movieList', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({category: "movies", language: 'kannada', genre: "all", sort: "voting"})
      });
      const content = await rawResponse.json();
      setMoviesData(content.result);
      // console.log(content.result);
      
    })();
    
  }, [])
    return (
        <Container>
         
         {moviesData.map(content => (
            <div
            key={content._id}
            style={{marginBottom: '20px',border: '1px solid #888888', borderRadius: '8px', display: 'flex', flexDirection: 'column'}}>
               <Wrapper>
                    <Vote>
                        <ArrowDropUpIcon fontSize="large"/>
                        <p>{content.voting}</p>
                        <ArrowDropDownIcon fontSize="large" />
                            <Typography variant="subtitle2">Votes</Typography>
                    </Vote>
                    <div>
                        <img src={content.poster} alt='poster' style={{width: '100px'}}/>
                    </div>
                    <div>
                        <Typography variant="h6">{content.title}</Typography>
                        <Typography variant="subtitle1">Gener: {content.genre}</Typography>
                        <Typography variant="subtitle1">Director: {content.director}</Typography>
                        <Typography variant="subtitle1">Starring: {content.stars}</Typography>
                        <Typography variant="caption" >Min|{content.language}</Typography>
                        <br />
                        <Typography variant="caption" color="Primary">{content.pageViews} Views | Voted by {content.totalVoted} People</Typography>
                    </div>
                    </Wrapper> 
                    <Button variant="contained" color="primary">Watch Trailer</Button>
            </div>        
                    ))}
            
        
         </Container>
        
    )
}

export default Movies
