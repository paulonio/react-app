import React, { useContext } from 'react';
import { IDataRick } from 'components/content/Content';
import classes from './cards.module.scss';
import { Link } from 'react-router-dom';
import { SearchContext } from 'context/context';

type modalSetActive = (value: boolean) => void;
type handleCardClick = (e: React.MouseEvent<HTMLElement>) => void;
type Props = {
  data: IDataRick[];
  modalSetActive: modalSetActive;
  handleCardClick: handleCardClick;
};

const Cards = ({ data, modalSetActive, handleCardClick }: Props) => {
  const { state, dispatch } = useContext(SearchContext);
  return (
    <div className={classes.home__items}>
      {data.map((item) => (
        <Link className={classes.home__item_wrapper} key={item.id} to={`/characters/${item.id}`}>
          <div
            className={classes.home__item}
            data-testid="card"
            key={item.id}
            data-id={item.id}
            onClick={(e) => {
              modalSetActive(true);
              handleCardClick(e);
            }}
          >
            <div className={classes.item__image}>
              <img className={classes.item__picture} src={item.image} alt="Item image" />
            </div>
            <div className={classes.item__content}>
              <h2 className={classes.item__title}>{item.name}</h2>
              <p className={classes.item__description}>Species: {item.species}</p>
              <p className={classes.item__description}>Gender: {item.gender}</p>
              <p className={classes.item__description}>Created: {item.created!.split('T')[0]}</p>
              <p className={classes.item__price}>{item.status}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
