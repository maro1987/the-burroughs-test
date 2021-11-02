import React, { useState, useEffect } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { getIntigersArray } from '../../utils/ArrayUtils';
import { getFridayBeforeWeekend, getWednesdayAfterWeekend, isWeekend } from '../../utils/DateUtils';
import { CSVLink } from 'react-csv';
import { SalaryTableStyles as Styled } from './SalaryTable.styles';

type DataRow = {
  month: string;
  baseSalary: string;
  bonus: string;
};

const columns: TableColumn<DataRow>[] = [
  {
    name: 'Month',
    selector: (row) => row.month,
  },
  {
    name: 'Base Salary',
    selector: (row) => row.baseSalary,
  },
  {
    name: 'Bonus (for previous month)',
    selector: (row) => row.bonus,
  },
];

const BONUS_PAYOUT_DAY = 15;

export const SalaryTable = () => {
  const [tableData, setTableData] = useState<Array<DataRow>>([]);
  const startDateTimestamp = useAppSelector((state: RootState) => state.app.startDate);

  useEffect(() => {
    if (startDateTimestamp) {
      const startDate = new Date(startDateTimestamp);
      const dayOfTheMonth = startDate.getDate();
      const lastDays = getIntigersArray(12).map(
        (i) => new Date(startDate.getFullYear(), startDate.getMonth() + i + 1, 0),
      );
      const baseSalaryPayDay = lastDays.map((d) => (isWeekend(d) ? getFridayBeforeWeekend(d) : d));

      const bonusPayDay = lastDays
        .map((d) => {
          const payDay = new Date(d).setDate(BONUS_PAYOUT_DAY);
          return new Date(payDay);
        })
        .map((d) => (isWeekend(d) ? getWednesdayAfterWeekend(d) : d))
        .map((d, index) => {
          if (dayOfTheMonth > d.getDate() && index === 0) {
            return 'NA';
          }
          return d.toDateString();
        });

      const data = lastDays.map((a, i) => ({
        month: `${baseSalaryPayDay[i].toLocaleString('default', { month: 'long' })} ${lastDays[i].getFullYear()}`,
        baseSalary: baseSalaryPayDay[i].toDateString(),
        bonus: bonusPayDay[i],
        id: i,
      }));

      setTableData(data);
    } else {
      setTableData([]);
    }
  }, [startDateTimestamp]);

  return (
    <Styled.Wrapper>
      {tableData.length > 0 && (
        <CSVLink data={tableData}>
          <Styled.DownloadButton>Download CSV</Styled.DownloadButton>
        </CSVLink>
      )}
      <DataTable columns={columns} data={tableData} />
    </Styled.Wrapper>
  );
};
