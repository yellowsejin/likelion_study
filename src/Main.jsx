import React from 'react'
import Section01 from './components/Main_Section/Section01';
import Section02 from './components/Main_Section/Section02';
import Section03 from './components/Main_Section/Section03';
import Section04 from './components/Main_Section/Section04';


function Main() {
    return (
        <div className='main_wrap'>
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
        </div>
    )
    }

export default Main;
