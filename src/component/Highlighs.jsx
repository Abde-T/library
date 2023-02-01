import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/Highlight";


const Highlighs = () => {
    return(
        <section className="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />} 
                        title ="Easy and quick" 
                        para = " get access instantly"/>
                        <Highlight icon={<FontAwesomeIcon icon="book-open" />} 
                        title ="sdq and qqsduick" 
                        para = " get qsd instasfsqdfntly"/>
                        <Highlight icon={<FontAwesomeIcon icon="tags" />} 
                        title ="Easy andsdf quick" 
                        para = " get access inssqdqdtantly"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlighs