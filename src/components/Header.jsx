import { useState } from 'react';
const Header = (props) => {

    const lighttheme = 'light';

    const [ theme, setNewTheme ] = useState( lighttheme );

    const switchTheme = () => {

        if ( theme === 'light' ) {
            setNewTheme('dark' );
        } else {
            setNewTheme( 'light' );
        }
    }

    props.onChange( theme );

    return (
        <div className={`header ${ theme }` }>
             <h1 className='headerTitle'>
                Overreacted
            </h1>
            <button className='btn' onClick={switchTheme}>Toggle</button>
        </div>
    )
};

export default Header;