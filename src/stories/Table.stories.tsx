import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  Collapse,
  IconButton,
} from "@mui/material";
import { Meta, StoryFn } from "@storybook/react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import withThemeProvider from "./withThemeProvider";

(Table as React.ForwardRefExoticComponent<any>).displayName = "Table";
(TableBody as React.ForwardRefExoticComponent<any>).displayName = "TableBody";
(TableCell as React.ForwardRefExoticComponent<any>).displayName = "TableCell";
(TableContainer as React.ForwardRefExoticComponent<any>).displayName =
  "TableContainer";
(TableHead as React.FC).displayName = "TableHead";
(TableHead as React.ForwardRefExoticComponent<any>).displayName = "TableHead";
(TableRow as React.ForwardRefExoticComponent<any>).displayName = "TableRow";
(Paper as React.ForwardRefExoticComponent<any>).displayName = "Paper";
(TablePagination as React.ForwardRefExoticComponent<any>).displayName =
  "TablePagination";
(TableSortLabel as React.ForwardRefExoticComponent<any>).displayName =
  "TableSortLabel";
(Collapse as React.ForwardRefExoticComponent<any>).displayName = "Collapse";
(IconButton as React.ForwardRefExoticComponent<any>).displayName = "IconButton";
(Paper as React.ForwardRefExoticComponent<any>).displayName = "Paper";

export default {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
  argTypes: {
    collapsible: {
      control: "boolean",
      description:
        "If true, the table rows can collapse to show additional information",
    },
    dense: {
      control: "boolean",
      description: "If true, table cells have reduced padding",
    },
    stickyHeader: {
      control: "boolean",
      description:
        "If true, the header will stick to the top of the table when scrolling",
    },
    pagination: {
      control: "boolean",
      description: "Enable pagination in the table",
    },
    sortable: {
      control: "boolean",
      description: "Enable sorting for table columns",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the table rows",
    },
    padding: {
      control: "select",
      options: ["normal", "checkbox"],
      description: "Padding of the table cells",
    },
    ariaLabel: {
      control: "text",
      description: "ARIA label for the table",
    },
  },
} as Meta<typeof Table>;

const rows = [
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    details: "Chocolate cupcake with sprinkles",
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    details: "Glazed donut with frosting",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 24,
    protein: 6.0,
    details: "Cream-filled pastry",
  },
  {
    name: "Frozen yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    details: "Yogurt dessert served cold",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    details: "Spiced ginger cookie",
  },
];

const TableTemplate: StoryFn<any> = ({
  collapsible,
  dense,
  stickyHeader,
  pagination,
  sortable,
  size,
  padding,
  ariaLabel,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [open, setOpen] = useState<number | null>(null);

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedRows = sortable
    ? [...rows].sort((a, b) =>
        order === "asc" ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]
      )
    : rows;

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table
          stickyHeader={stickyHeader}
          size={size}
          aria-label={ariaLabel || "table"}
          padding={padding}
        >
          <TableHead>
            <TableRow>
              {collapsible && <TableCell />}
              <TableCell>
                {sortable ? (
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleRequestSort("name")}
                  >
                    Dessert (100g serving)
                  </TableSortLabel>
                ) : (
                  "Dessert (100g serving)"
                )}
              </TableCell>
              <TableCell align="right">
                {sortable ? (
                  <TableSortLabel
                    active={orderBy === "calories"}
                    direction={orderBy === "calories" ? order : "asc"}
                    onClick={() => handleRequestSort("calories")}
                  >
                    Calories
                  </TableSortLabel>
                ) : (
                  "Calories"
                )}
              </TableCell>
              <TableCell align="right">Fat (g)</TableCell>
              <TableCell align="right">Carbs (g)</TableCell>
              <TableCell align="right">Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(pagination
              ? sortedRows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : sortedRows
            ).map((row, index) => (
              <TableRow key={index}> {/* Replaced React.Fragment with TableRow */}
                {collapsible && (
                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(open === index ? null : index)}
                    >
                      {open === index ? (
                        <KeyboardArrowUp />
                      ) : (
                        <KeyboardArrowDown />
                      )}
                    </IconButton>
                  </TableCell>
                )}
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {pagination && (
        <TablePagination
          component="div"
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};

export const Default = TableTemplate.bind({});
Default.args = {
  collapsible: false,
  dense: false,
  stickyHeader: false,
  pagination: true,
  sortable: true,
  size: "medium",
  padding: "normal",
  ariaLabel: "Dessert table",
};
