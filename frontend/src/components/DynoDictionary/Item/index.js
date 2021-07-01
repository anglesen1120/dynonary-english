import Speaker from 'components/UI/Speaker';
import WordFavorite from 'components/UI/WordFavorite';
import { DEFAULTS } from 'constant';
import { cloudinaryImgOptimize } from 'helper';
import PropTypes from 'prop-types';
import React from 'react';
import useStyle from './style';

function DynoDictionaryItem({ word, type, phonetic, picture, mean }) {
  const classes = useStyle();
  const imgSrc = cloudinaryImgOptimize(
    picture ? picture : DEFAULTS.IMAGE_SRC,
    50,
    50,
    true,
    true,
  );

  return (
    <div className={`${classes.root} flex-center-between`}>
      <div className="w-100 flex-center--ver">
        <img className={classes.picture} src={imgSrc} alt="photo" />
        <div className="ml-8">
          <h3 className={classes.word}>
            {word} <span className={classes.type}>( {type} )</span>
          </h3>
          <p className={`${classes.phonetic} phonetic`}>/ {phonetic} /</p>
          <p className={classes.mean}>{mean}</p>
        </div>
      </div>

      <div className="flex-center--ver">
        <div className="mr-5">
          <Speaker text={word} />
        </div>
        <WordFavorite word={word} />
      </div>
    </div>
  );
}

DynoDictionaryItem.propTypes = {
  mean: PropTypes.string,
  phonetic: PropTypes.string,
  type: PropTypes.string,
  word: PropTypes.string,
  picture: PropTypes.string,
};

export default DynoDictionaryItem;
