import React from 'react'
import { RaisedButton, FlatButton } from 'material-ui';

export interface Props {
    stepIndex: number
    onNext: () => void
    onPrevious: () => void
}

export default function ActionButtons(props: Props) {
    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={props.stepIndex === 3 ? "Slutför Köp" : "Nästa"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={props.onNext}
          style={{ marginRight: 12 }}
        />
        {props.stepIndex > 0 && (
          <FlatButton
            label="Bakåt"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={props.onPrevious}
          />
        )}
      </div>
    );
}