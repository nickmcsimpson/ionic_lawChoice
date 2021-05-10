import { IonContent, IonPage, IonIcon, IonItem, IonLabel,
    IonGrid, IonRow } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import FaqListing from './FaqDB';
import {informationCircleOutline} from 'ionicons/icons';

const Faq: React.FC = () => {
    const [faqs] = useState<Array<any>>(FaqListing);
    const faqlist = faqs.map((issue) =>
        <IonRow>
            <IonItem key={issue.id} button routerLink={issue.path} lines="none">
                <IonIcon slot="start" icon={informationCircleOutline}></IonIcon>
                <IonLabel>{issue.title}</IonLabel>
            </IonItem>  
        </IonRow>
          
    );

    return(
        <IonPage>
            
            <IonContent>
                <IonGrid fixed={true}>
                    <MyHeader />
                    <IonRow>
                        <IonLabel>
                            <h1>FAQ</h1>
                        </IonLabel>
                    </IonRow>
                    {faqlist}
                    
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Faq;