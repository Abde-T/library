import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function BookInfo({books}) {
    return (
       <div id="books__body">
        <main className='books__main'>
            <div className="books__container">
                <div className="row">
                    <div className="books__selected--top">
                        <Link to="/books" className='book__link'>
                            <FontAwesomeIcon icon ="arrow-left"/>
                        </Link>
                        <Link to="/book" className='book__link'> 
                            <h2 className='book__selected--title--top'>Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className='book__selected--figure'>
                            <img src="" alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">
                                Title
                            </h2>
                            <FontAwesomeIcon icon="star"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
       </div>
    );
}

export default BookInfo;