import {useCallback, useEffect, useState} from 'react';
import {
  IonAlert,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage, IonProgressBar, IonToast,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import {document, personCircle} from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewPayslip.css';
import {getPayslip} from "../data/MockData";
import {MyFile, Payslip, ResponseStatus} from "../data/Models";
import {downloadFile} from "../services/downloadService";
import {Filesystem} from "@capacitor/filesystem";

function ViewPayslip() {

  const [showAlert, setShowAlert] = useState(false);

  const [payslip, setPayslip] = useState<Payslip>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const payslip1 = getPayslip(params.id)
    setPayslip(payslip1);
  });

  const [showLoadbar, setShowloadbar] = useState<boolean>(false);



  const handleDownloadFile = useCallback(async (file: MyFile) => {
    // Download file here
    try{
      setShowloadbar(true)
      const response = await downloadFile(file);
      console.log(response);
        if(response.status === ResponseStatus.Success){
            setShowAlert(true);
        }else {
            console.error(response.error);
        }
    }catch (e){
      console.error(e);
    }finally {
      setShowloadbar(false);
    }
  },[payslip])


  return (
    <IonPage id="view-payslip-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Payslip Info" defaultHref="/home"></IonBackButton>
          </IonButtons>
          {showLoadbar && <IonProgressBar type="indeterminate"></IonProgressBar>}

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {payslip ? (
          <>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {payslip.id}
                  <span className="date">
                    <IonNote>{payslip.fromDate} </IonNote>
                    <IonNote>-</IonNote>
                    <IonNote>{payslip.toDate}</IonNote>
                  </span>
                </h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <IonItem lines="none" button={true} onClick={() =>{
                handleDownloadFile(payslip.file);
              }}>
                <IonIcon icon={document} size={'large'}></IonIcon>
                <IonLabel>
                  <h2>{payslip.file.name}</h2>
                </IonLabel>
              </IonItem>

            </div>
          </>
        ) : (
          <div>Payslip not found</div>
        )}
        <IonToast
            isOpen={showAlert}
            onDidDismiss={() => {}}
            message="Downloaded successfully"
            position="bottom"
            duration={2000}
        />
      </IonContent>
    </IonPage>
  );
}

export default ViewPayslip;
