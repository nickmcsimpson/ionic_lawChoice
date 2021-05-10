import { IonPage, IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonGrid, IonCol } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import FaqListing from './FaqDB';
import {arrowBackOutline} from 'ionicons/icons';

const FaqDetail: React.FC<any> = ({match}) => {
  const [faqs] = useState<Array<any>>(FaqListing);
    const selectedFaq = faqs.find((issue) =>{ 
      return issue.id === match.params.id;
    });
  return (
    <IonPage>
     
      <IonContent>
        <IonGrid fixed={true}>
          <IonCol size="3">
            <IonButton color="light" routerLink="/faq">
                <IonIcon slot="start" icon={arrowBackOutline} />
                    Back
            </IonButton>
          </IonCol>

          <IonCol size="9">
            <MyHeader />
          </IonCol>
          
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{selectedFaq.title}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {selectedFaq.answer}
            </IonCardContent>
          </IonCard>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default FaqDetail;
