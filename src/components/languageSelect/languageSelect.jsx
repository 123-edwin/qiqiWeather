import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function LanguageSelect({ value, onChange }) {
  return (
    <section className='selectBox'>
      <InputLabel id="language-label" sx={{ color: 'white' }}>Language</InputLabel>
      <Select
        labelId="language-label"
        name="language"
        value={value}
        label="Language"
        onChange={e => onChange(e.target.value)}
        color="primary"
        sx={{
          width: 170,
          height: 35,
          color: 'white',
          '.MuiSelect-icon': { color: 'white' },
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
        }}
        size="md"
        variant="outlined"
      >
        <MenuItem value="ar">Arabic</MenuItem>
        <MenuItem value="bn">Bengali</MenuItem>
        <MenuItem value="bg">Bulgarian</MenuItem>
        <MenuItem value="zh">Chinese Simplified</MenuItem>
        <MenuItem value="zh_tw">Chinese Traditional</MenuItem>
        <MenuItem value="cs">Czech</MenuItem>
        <MenuItem value="da">Danish</MenuItem>
        <MenuItem value="nl">Dutch</MenuItem>
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fi">Finnish</MenuItem>
        <MenuItem value="fr">French</MenuItem>
        <MenuItem value="de">German</MenuItem>
        <MenuItem value="el">Greek</MenuItem>
        <MenuItem value="hi">Hindi</MenuItem>
        <MenuItem value="hu">Hungarian</MenuItem>
        <MenuItem value="it">Italian</MenuItem>
        <MenuItem value="ja">Japanese</MenuItem>
        <MenuItem value="jv">Javanese</MenuItem>
        <MenuItem value="ko">Korean</MenuItem>
        <MenuItem value="zh_cmn">Mandarin</MenuItem>
        <MenuItem value="mr">Marathi</MenuItem>
        <MenuItem value="pl">Polish</MenuItem>
        <MenuItem value="pt">Portuguese</MenuItem>
        <MenuItem value="pa">Punjabi</MenuItem>
        <MenuItem value="ro">Romanian</MenuItem>
        <MenuItem value="ru">Russian</MenuItem>
        <MenuItem value="sr">Serbian</MenuItem>
        <MenuItem value="si">Sinhalese</MenuItem>
        <MenuItem value="sk">Slovak</MenuItem>
        <MenuItem value="es">Spanish</MenuItem>
        <MenuItem value="sv">Swedish</MenuItem>
        <MenuItem value="ta">Tamil</MenuItem>
        <MenuItem value="te">Telugu</MenuItem>
        <MenuItem value="tr">Turkish</MenuItem>
        <MenuItem value="uk">Ukrainian</MenuItem>
        <MenuItem value="ur">Urdu</MenuItem>
        <MenuItem value="vi">Vietnamese</MenuItem>
        <MenuItem value="zh_wuu">Wu (Shanghainese)</MenuItem>
        <MenuItem value="zh_hsn">Xiang</MenuItem>
        <MenuItem value="zh_yue">Yue (Cantonese)</MenuItem>
        <MenuItem value="zu">Zulu</MenuItem>
      </Select>
    </section>
  );
}