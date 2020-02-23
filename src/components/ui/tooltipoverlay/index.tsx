import React, { Component } from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export type TooltipOverlayProps = {
  tooltip: string | JSX.Element
  id: string
}
export class TooltipOverlay extends Component<TooltipOverlayProps> {
  render() {
    const { id, tooltip, children } = this.props
    return (
      <OverlayTrigger placement="right" overlay={<Tooltip id={`tooltip-${id}`}>{tooltip}.</Tooltip>}>
        {children}
      </OverlayTrigger>
    )
  }
}

export default TooltipOverlay
