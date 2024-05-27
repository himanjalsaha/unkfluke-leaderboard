import React from 'react';
import Table from './Table';

const columns = [
  {
    Header: 'Rank',
    accessor: 'rank',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Calmar Ratio',
    accessor: 'calmarRatio',
  },
  {
    Header: 'Overall Profit',
    accessor: 'overallProfit',
    Cell: ({ value }) => value.toLocaleString(),
  },
  {
    Header: 'Avg. Daily Profit',
    accessor: 'avgDailyProfit',
    Cell: ({ value }) => value.toLocaleString(),
  },
  {
    Header: 'Win % (Day)',
    accessor: 'winPercent',
  },
  {
    Header: 'Price (Rs)',
    accessor: 'price',
  },
  {
    Header: 'Action',
    accessor: 'action',
    Cell: () => <button className="text-blue-500 hover:text-blue-700">Action</button>,
  },
];

const data = [
    {
        rank: 1,
        name: 'Selling with re entry',
        calmarRatio: 3.96,
        overallProfit: 381845,
        avgDailyProfit: 319.54,
        winPercent: 0.65,
        price: '-',
      },
      {
        rank: 2,
        name: 'strategy_name',
        calmarRatio: 3.62,
        overallProfit: 268872.5,
        avgDailyProfit: 216.31,
        winPercent: 0.64,
        price: 500,
      },
      {
        rank: 3,
        name: 'Based on premium and',
        calmarRatio: 3.42,
        overallProfit: 255425,
        avgDailyProfit: 208.51,
        winPercent: 0.64,
        price: '-',
      },
      {
        rank: 4,
        name: 'strategy_name',
        calmarRatio: 3.22,
        overallProfit: 370845,
        avgDailyProfit: 303.47,
        winPercent: 0.65,
        price: '-',
      },
      {
        rank: 5,
        name: 'strategy_name',
        calmarRatio: 3.22,
        overallProfit: 370845,
        avgDailyProfit: 303.47,
        winPercent: 0.65,
        price: '-',
      },
      {
        rank: 6,
        name: 'Based on premium wit',
        calmarRatio: 3.01,
        overallProfit: 135980,
        avgDailyProfit: 185.77,
        winPercent: 0.49,
        price: '-',
      },
      {
        rank: 7,
        name: 'strategy_name',
        calmarRatio: 2.76,
        overallProfit: 267867.5,
        avgDailyProfit: 218.49,
        winPercent: 0.6,
        price: '-',
      },
      {
        rank: 8,
        name: 'Wait and trade_Save',
        calmarRatio: 2.62,
        overallProfit: 178252.5,
        avgDailyProfit: 161.9,
        winPercent: 0.63,
        price: '-',
      },
      {
        rank: 9,
        name: 'iron condor',
        calmarRatio: 2.44,
        overallProfit: 176420,
        avgDailyProfit: 137.51,
        winPercent: 0.65,
        price: '-',
      },
      {
        rank: 10,
        name: 'strategy_name',
        calmarRatio: 2.04,
        overallProfit: 244555,
        avgDailyProfit: 198.66,
        winPercent: 0.62,
        price: '-',
      },
];

const LeaderBoard = () => {

  return (
 
   <div>
 

      <Table columns={columns} data={data} />;

  </div>
  )
};

export default LeaderBoard;
