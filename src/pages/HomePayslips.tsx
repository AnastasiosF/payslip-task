import PayslipItem from '../components/PayslipItem';
import { useState } from 'react';
import { data} from '../data/MockData';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './HomePayslips.css';
import {Payslip} from "../data/Models";

const HomePayslips: React.FC = () => {

  const [payslips, setPayslips] = useState<Payslip[]>([]);

  useIonViewWillEnter(() => {
    const payslips1 = data;
    setPayslips([...payslips1]);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Deel Payslips</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Deel Payslips
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {payslips.map(m => <PayslipItem key={m.id} payslip={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePayslips;
