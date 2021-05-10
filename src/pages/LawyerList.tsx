import { IonContent, IonPage, IonList, IonItem, IonAvatar, IonLabel, IonImg } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import LawyerListing from './LawyerDB';

const LawyerList: React.FC = () => {
    const [list] = useState<Array<any>>(LawyerListing);
    const currentListing = list.map(lawyers =>
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
    );

    return(
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonList>
                    {currentListing}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default LawyerList;