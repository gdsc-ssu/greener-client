/* eslint-disable react/no-array-index-key */

import React from 'react';
import * as styles from './Calendar.style';

interface CalendarProps {
  year: number;
  month: number;
  renderDate: (date: number) => JSX.Element;
  dayIconSize?: number;
}

export default function Calendar({
  year,
  month,
  renderDate,
  dayIconSize = 16,
}: CalendarProps) {
  const start = new Date(year, month, 1);
  const end = new Date(
    month + 1 > 11 ? year + 1 : year,
    month + 1 > 11 ? 0 : month + 1,
    0,
  );
  const startIndex = start.getDay();
  const endIndex = startIndex + end.getDate() - 1;

  return (
    <styles.Container>
      {[...Array(5)].map((value, week) => (
        <styles.Week key={`week${week}`}>
          {[...Array(7)].map((val, day) => {
            if (week * 7 + day < startIndex || week * 7 + day > endIndex) {
              return <styles.Empty key={week * 7 + day} size={dayIconSize} />;
            }
            return (
              <React.Fragment key={week * 7 + day}>
                {renderDate(week * 7 + day - startIndex)}
              </React.Fragment>
            );
          })}
        </styles.Week>
      ))}
    </styles.Container>
  );
}
