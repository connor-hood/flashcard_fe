import React from 'react'
import '../LanguageDetail/languageDetail'
import LanguageDetail from '../LanguageDetail/languageDetail';

function LanguageSelection(props){
    return(
        <div>
            <div className="row justify-content-center">
                <div className="col align-self-center">
                    <h2>Language Selected!</h2>
                </div>
            </div>
            <div className="selection">
                <LanguageDetail />
            </div>
        </div>
    )
}

export default LanguageSelection;