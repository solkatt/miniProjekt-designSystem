
import ExpandMoreIcon from "material-ui/svg-icons/navigation/arrow-drop-down";

import CreditCardIcon from "material-ui/svg-icons/action/credit-card";
import SwishIcon from "../../icons/Pay/swish_secondary.svg"

import React, { CSSProperties } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
// import { mdiCreditCard } from '@mdi/js';

import SwishPay from "./PayOptions/SwishPay";
import CreditCardPay from "./PayOptions/CreditCardPay";
import KlarnaPay from "./PayOptions/KlarnaPay"



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

interface Props {
  
}

export default function CheckoutPay(props: Props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);

  };

  return (
    <div className={classes.root}>

      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><CreditCardIcon></CreditCardIcon></Typography>
          <Typography className={classes.secondaryHeading}>


          </Typography>


        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <CreditCardPay />

        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>{<img alt="" style={{ maxWidth: '70px' }} src={SwishIcon} />}</Typography>
          <Typography className={classes.secondaryHeading}>

          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={swishStyle}>

            <SwishPay />

          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}> <img alt="" style={{ maxWidth: '70px' }} src="https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg
          "/></Typography>
          <Typography className={classes.secondaryHeading}>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <KlarnaPay />
        </ExpansionPanelDetails>
      </ExpansionPanel>


    </div>
  );
}

const swishStyle: CSSProperties = {

  display: 'flex',
  flexDirection: 'row'
}