import { useState } from 'react';
import { useForecast } from '@h/useForecast'
import { useDebounce } from '@h/useDebounce';
import { useUnsplash } from '@h/useUnsplash';
import ForecastList from '@c/forecastList/forecastList';
import TextField from '@mui/material/TextField'
import LanguageSelect from '@c/languageSelect/languageSelect';
import Today from '@c/today/today';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('Colima');
  const [language, setLanguage] = useState('en');
  const debouncedPlace = useDebounce(inputValue, 1200);
  const { forecast, error } = useForecast(debouncedPlace, language);
  const { image: todayImage } = useUnsplash(forecast?.location?.name);


  if (error) return <p>Error: {error.message}</p>

  const icon = forecast?.current?.condition?.icon;

  return (
    <>
      <div className="mainContainer">
        <div className='searchBox'>
          <img src={`https://${icon}`}></img>
          <TextField
            sx={{
              input: { color: 'white' },
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiInput-underline:before': { borderBottomColor: 'white' },
              '& .MuiInput-underline:after': { borderBottomColor: 'white' },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: 'white' }
            }}
            value={inputValue}
            id="standard-basic"
            label="Place"
            variant="standard"
            onChange={(e) => setInputValue(e.target.value)} />
          <LanguageSelect value={language} onChange={setLanguage} />
        </div>
        <div className='today'>
          <Today forecast={forecast} image={todayImage} language={language}/>
        </div>
        <div className='cardsContainer'>
          <ForecastList forecast={forecast} language={language}/>
        </div>
      </div>
    </>
  )
}

export default App
