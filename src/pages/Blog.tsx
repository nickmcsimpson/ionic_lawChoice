import { IonContent, IonPage, IonButton, IonIcon, IonList, IonItem, IonAvatar, IonLabel, IonImg, IonListHeader } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import BlogListing from './BlogDB';
import {arrowBackOutline, informationCircleOutline} from 'ionicons/icons';

const Blog: React.FC = () => {
    const [posts] = useState<Array<any>>(BlogListing);
    const blogposts = posts.map((post) =>
        <IonItem key={post.id} button routerLink={post.path}>
            <IonAvatar slot="start">
                <IonImg src={post.pic} />
            </IonAvatar>
            <IonLabel>
                <h2>{post.title}</h2>
            </IonLabel>
        </IonItem>    
    );

    return(
        <IonPage>
            <MyHeader />
            <IonContent>
                <IonButton color="light" routerLink="/home">
                    <IonIcon slot="start" icon={arrowBackOutline} />
                        Back
                </IonButton>
                <IonList>
                    <IonListHeader>
                        <h1>Blog</h1>
                    </IonListHeader>
                    {blogposts}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Blog;