import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from "./Row";
import { useCallback, useEffect, useState } from "react";
import { useWindowSize } from "../../../shared/helpers/hooks";

export default function CollapsibleTable({columnDefs, rows, parentId}: any) {
  const [isHidden, setIsHidden] = useState(false);
  const [columnsToShow, setColumnsToShow] = useState<any>(columnDefs);
  const [columnsToHide, setColumnsToHide] = useState<any>([]);
  const { width } = useWindowSize();

  const onGridSizeChanged = () => {
    const gridWidth = document.getElementById(parentId)!.offsetWidth;

    const columnsToShow = [];
    const columnsToHide = [];

    let totalColsWidth = 50;
    const allColumns = columnDefs;
    if (allColumns && allColumns.length > 0) {
      for (let i = 0; i < allColumns.length; i++) {
        const column = allColumns[i];
        console.log(column, columnsToHide)

        totalColsWidth += column.minWidth || 0;
        if (totalColsWidth > gridWidth) {
          columnsToHide.push(column);
        } else {
          columnsToShow.push(column);
        }
      }
    }

    if (columnsToHide.length) setIsHidden(true);
    else setIsHidden(false);
    setColumnsToHide(columnsToHide);
    setColumnsToShow(columnsToShow);
  };

  useEffect(() => {
    onGridSizeChanged();
  }, [width])

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {
              columnsToShow.map((item: any) => {
                return (
                  <TableCell
                    key={item.field}
                  >
                    {item.displayName}
                  </TableCell>
                )
              })
            }
            {
              isHidden && <TableCell />
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <Row
              key={row.name}
              row={row}
              columnsToShow={columnsToShow}
              columnsToHide={columnsToHide}
              isHidden={isHidden}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
