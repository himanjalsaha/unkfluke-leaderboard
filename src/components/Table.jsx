import React from 'react';
import { BiLeftArrow, BiRightArrow, BiSolidRightArrow } from 'react-icons/bi';
import { FaLeftLong, FaRightLong } from 'react-icons/fa6';
import { useTable, useSortBy, usePagination } from 'react-table';

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div className='p-2'>
        <h1 className='text-3xl mx-2  font-thin  '>Basic Backtest  </h1>
        <div className="overflow-x-auto p-2">
          <table className="min-w-full bg-white border border-gray-200" {...getTableProps()}>
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100 border-b">
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps(column.getSortByToggleProps())} className="p-4 text-left">
                      <span className="text-sm font-semibold">{column.render('Header')}</span>
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="border-b hover:bg-gray-50">
                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()} className="p-4">
                        <span className="text-sm">{cell.render('Cell')}</span>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center justify-center md:justify-between lg:justify-between mt-2">
            <button onClick={() => previousPage()} disabled={!canPreviousPage} className="p-2 bg-gray-200 rounded">
             <FaLeftLong/>
            </button>
            <span className="text-sm">
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage} className="p-2 bg-gray-200 rounded">
              <FaRightLong/>
            </button>
          </div>
        </div>
    </div>
  );
};

export default Table;
