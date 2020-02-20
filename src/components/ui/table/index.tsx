import React, { Component } from 'react'

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
      <table className="table table-hover">
        <thead>
          <tr>
            {header.map((c, idx) => (
              <th key={idx}>{c.content}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows.map((row, idx) => this.renderRow(row, idx))}</tbody>
      </table>
    )
  }

  renderRow(row: Row, key: number) {
    return <tr key={key}>{row.cells.map((c, idx) => this.renderCell(c, idx))}</tr>
  }

  renderCell(cell: Cell, key: number) {
    return (
      <td {...cell} key={key}>
        {cell.content}
      </td>
    )
  }
}

export default Table
