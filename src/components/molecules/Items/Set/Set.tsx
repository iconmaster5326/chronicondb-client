import React, { FunctionComponent, useState } from 'react';

import { map } from 'lodash';

import GameIcon, { GameIconType } from 'components/atoms/GameIcon/GameIcon';
import Icon, { IconName } from 'components/atoms/Icon/Icon';
import { ItemSetData } from 'engine/EngineItems';

import './Set.scss';

interface Props {
  set: ItemSetData,
}

const ItemSet: FunctionComponent<Props> = ({
  set,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="m-itemSet">
      <div
        className="m-itemSet__nameContainer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        Set: <span className="m-itemSet__name">{set.name}</span>
        <span className={`m-itemSet__collapseIcon ${isCollapsed ? '' : 'expanded'}`}>
          {isCollapsed ? (
            <Icon name={IconName.ArrowRightYellow} width={6} height={12} />
          ) : (
            <Icon name={IconName.ArrowDownYellow} width={14} height={7} />
          )}
        </span>
      </div>
      <div className={`m-itemSet__contentContainer ${isCollapsed ? '' : 'expanded'}`}>
        <div className="m-itemSet__content">
          <div className="m-itemSet__setInfo">
            <strong className="m-itemSet__setInfo-itemTypes">
              {set.types.join(', ')}
            </strong>
            <ul className="m-itemSet__setInfo-bonuses">
              {map(set.bonuses, (bonus, piecesCount) => (
                <li
                  key={`set-bonus-${set.uuid}-${piecesCount}`}
                  className="m-itemSet__setInfo-bonus"
                >
                  <em className="m-itemSet__setInfo-bonus-count">{piecesCount})</em>
                  {bonus}
                </li>
              ))}
            </ul>
          </div>
          <ul className="m-itemSet__itemsInfo">
            {set.items.map(item => (
              <li
                key={`set-items-${set.uuid}-${item.uuid}`}
              >
                <a href={`/items?uuid=${item.uuid}`} className="m-itemSet__itemsInfo-item">
                  {item.icon && (
                    <GameIcon type={GameIconType.Item} name={item.icon} width={18} />
                  )}
                  <em className="m-itemSet__itemsInfo-item-name">
                    {item.name}
                  </em>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemSet;