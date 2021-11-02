import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import DatePicker from 'react-date-picker';
import { RootState } from '../../app/store';
import { setStartTimestamp } from '../../redux-modules/app/reducer';

export const DateSelector = () => {
  const dispatch = useAppDispatch();
  const startTimestamp = useAppSelector((state: RootState) => state.app.startDate);

  const [startDate, setStartDate] = useState<Date | null>(null);

  useEffect(() => {
    if (startTimestamp) {
      setStartDate(new Date(startTimestamp));
    } else {
      setStartDate(null);
    }
  }, [startTimestamp]);

  const handleDateChange = (date: Date) => {
    dispatch(setStartTimestamp(new Date(date).getTime()));
  };

  return (
    <div>
      <h3>Select start date to display payment dates for the following 12 months</h3>
      <DatePicker onChange={handleDateChange} value={startDate} />
    </div>
  );
};
