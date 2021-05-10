import { IonContent, IonPage, IonItem, IonAvatar, IonLabel, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import LawyerListing from './LawyerDB';

const LawyerList: React.FC = () => {
    const [list] = useState<Array<any>>(LawyerListing);
    const currentListing = list.map(lawyers =>
        <IonCol size="4">
            <IonItem key={lawyers.id} button routerLink={lawyers.path}>
                <IonAvatar slot="start">
                    <IonImg src={lawyers.pic} />
                </IonAvatar>
                <IonLabel>
                    <h2>{lawyers.name}</h2>
                    <h3>{lawyers.focus}</h3>
                    <p>{lawyers.phone}</p>
                </IonLabel>
            </IonItem> 
        </IonCol>
           
    );

    return(
        <IonPage>
            
            <IonContent>
                <IonGrid>
                    <MyHeader />
                    <IonRow>
                        {currentListing}
                    </IonRow>
                </IonGrid>
                
            </IonContent>
        </IonPage>
    );
};

export default LawyerList;