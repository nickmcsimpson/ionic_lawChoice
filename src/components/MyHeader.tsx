import { IonHeader, IonTitle, IonImg, IonToolbar, IonButtons, IonMenuButton, IonRow } from '@ionic/react';
import React from 'react';
import './MyHeader.css';

const MyHeader: React.FC = () => {
    return(
        <IonRow>
            <IonHeader class="ion-no-border">
                <IonToolbar class="toolbarStyle">
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} menu="first" />
                    </IonButtons>
                    <IonImg class="logoImg" src="assets/images/scales.svg" />
                    <IonTitle class="ion-text-center">LawChoice</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonRow>
        
    );
};

export default MyHeader;