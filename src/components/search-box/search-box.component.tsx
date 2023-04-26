import './search-box.styles.css';
import { ChangeEvent } from 'react';

// interface IsearchBoxProps {
//     className: string;
//     placeholder?: string;
// }ff

type searchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

  const SearchBox = ({className, placeholder, onChangeHandler}: searchBoxProps) => 
      
    (
        <input
          className = {`search-box ${className}`}
          type = 'search'
          placeholder = {placeholder}
          onChange = {onChangeHandler} 
        />
    );
    
  
  export default SearchBox;