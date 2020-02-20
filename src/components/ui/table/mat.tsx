import React, { Component } from 'react'
import { TableCell, Table as RTable } from '@material-ui/core'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'

export type Cell = {
  content: any
  align?: 'left' | 'right' | 'center' | 'justify'
}

export type Row = {
  cells: Cell[]
}

export type TableProps = {
  header: Cell[]
  rows: Row[]
}

export class Table extends Component<TableProps> {
  render() {
    const { header, rows } = this.props

    return (
      <TableContainer>
        <RTable aria-label="simple table">
          <TableHead>
            <TableRow key="header">{this.renderCells(header)}</TableRow>
          </TableHead>
          <TableBody>{rows.map((row, idx) => this.renderRow(row, idx))}</TableBody>
        </RTable>
      </TableContainer>
    )
  }

  renderRow(row: Row, key: number) {
    return (
      <TableRow hover key={key}>
        {this.renderCells(row.cells)}
      </TableRow>
    )
  }

  renderCells(cells: Cell[]) {
    return cells.map((c, idx) => this.renderCell(c, idx))
  }

  renderCell(cell: Cell, idx: number) {
    return <TableCell {...cell} key={idx}>{cell.content}</TableCell>
  }
}

export default Table
