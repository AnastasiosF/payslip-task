import {
  IonItem,
  IonLabel,
  IonNote, useIonToast
} from '@ionic/react';
import './PayslipItem.css';
import {MyFile, Payslip} from "../data/Models";
import {useCallback} from "react";
import {downloadFile} from "../services/downloadService";

interface MessageListItemProps {
  payslip: Payslip;
}

const PayslipItem: React.FC<MessageListItemProps> = ({ payslip }) => {




  return (
    <IonItem routerLink={`/message/${payslip.id}`} detail={false}

    >
      <div slot="start" className="dot dot-unread"></div>
      <IonLabel className="ion-text-wrap">
        <h2>
          {payslip.id}
          <span className="date">
            <IonNote>{payslip.fromDate} - </IonNote>
            <IonNote>{payslip.toDate}</IonNote>
          </span>
        </h2>
      </IonLabel>
    </IonItem>
  );
};

export default PayslipItem;
