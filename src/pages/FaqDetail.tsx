import { IonPage, IonContent, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
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
      <MyHeader />
      <IonContent>
        <IonButton color="light" routerLink="/faq">
            <IonIcon slot="start" icon={arrowBackOutline} />
                Back
        </IonButton>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{selectedFaq.title}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {selectedFaq.answer}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default FaqDetail;
