import { IonContent, IonPage, IonItem, IonLabel, IonImg,
    IonGrid, IonRow, IonCol } from '@ionic/react';
import React, {useState} from 'react';
import MyHeader from '../components/MyHeader';
import BlogListing from './BlogDB';
import './Blog.css';

const Blog: React.FC = () => {
    const [posts] = useState<Array<any>>(BlogListing);
    const blogposts = posts.map((post) =>
        <IonCol size="6">
            <IonItem key={post.id} button routerLink={post.path} lines="none">
                    <IonImg class="blogImage" src={post.pic} />
            </IonItem>  
            <IonItem lines="none">
                <IonLabel>
                    <h2>{post.title}</h2>
                </IonLabel>
            </IonItem>  
           
        </IonCol>
          
    );

    return(
        <IonPage>
            
            <IonContent>
                <IonGrid fixed={true}>
                    <MyHeader />
                    <IonRow class="ion-padding-top">
                        {blogposts}
                    </IonRow>
                </IonGrid>
                
            </IonContent>
        </IonPage>
    );
};

export default Blog;