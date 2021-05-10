import { IonContent, IonPage, IonIcon, IonList, IonItem, IonListHeader, IonLabel } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import FaqListing from './FaqDB';
import {informationCircleOutline} from 'ionicons/icons';

const Faq: React.FC = () => {
    const [faqs] = useState<Array<any>>(FaqListing);
    const faqlist = faqs.map((issue) =>
        <IonItem key={issue.id} button routerLink={issue.path}>
            <IonIcon slot="start" icon={informationCircleOutline}></IonIcon>
            <IonLabel>{issue.title}</IonLabel>
        </IonItem>    
    );

    return(
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonList>
                    <IonListHeader>
                        <h1>FAQ</h1>
                    </IonListHeader>
                    {faqlist}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Faq;