import { useRef } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onChange: (value: string) => void;
  onClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange, onClick }) => {
  const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyUp = () => {
      if (inputRef.current) {
        onChange(inputRef.current.value);
      }
    };

    const handleOnClick = () => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      onClick();
    }


    return (
        <section className='search–section'>
            <form>
              <input placeholder="Type the name of the movie" className='searchBar' name="search" ref={inputRef} autoComplete='off' onKeyUp={handleKeyUp} />
            </form>
            <button className='main-button' onClick={handleOnClick}>Send</button>
        </section>
    )
}

export default SearchBar;