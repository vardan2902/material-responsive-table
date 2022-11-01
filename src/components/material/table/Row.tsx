import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

const Row = (props: { row: any, columnsToShow: Array<any>, columnsToHide: Array<any>, isHidden: boolean }) => {
  const { row, columnsToShow, columnsToHide, isHidden } = props;
  const [open, setOpen] = React.useState(false);

  const showedColumns = columnsToShow.map((item: any) => item.field);
  const hiddenColumns = columnsToHide.map((item: any) => item.field);

  return (
    <React.Fragment>
      <TableRow sx={ { '& > *': { borderBottom: 'unset' } } }>
        {
          showedColumns.map((field: any, index: number) => (
            <TableCell
              key={ index }
            >
              { row[field] }
            </TableCell>
          ))
        }
        {
          isHidden &&
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={ () => setOpen(!open) }
            >
              { open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> }
            </IconButton>
          </TableCell>
        }
      </TableRow>
      <TableRow>
        <TableCell style={ { paddingBottom: 0, paddingTop: 0 } } colSpan={ 6 }>
          <Collapse in={ open } timeout="auto" unmountOnExit>
            <Box sx={ { margin: 1 } }>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {
                    hiddenColumns.map((colName: string) => (
                      <TableRow key={ colName }>
                        <TableCell>
                          { colName }
                        </TableCell>
                        <TableCell>
                          { row[colName] }
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;