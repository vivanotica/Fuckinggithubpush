import React from 'react';
import Proptypes from "prop-types"
import {PropTypes} from 'prop-types';
import {Link} from "react-router-dom"

function Movie({id, coverImg, title, summary, url, genres }) {  // 수정: props를 구조 분해
    return (
        <div>
            <h2><Link to = {`/movie/${id}`}>{title}</Link></h2>
            <img src={coverImg} alt={title} />  {/* 수정: alt 속성 추가 */}
            <p>{summary}</p>
            <ul>
                {genres.map((genre, index) => (  // 수정: genre로 변경, key를 위해 index 사용
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes ={
    id: Proptypes.number.isRequired,
    coverImg: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
