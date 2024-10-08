import React, { useEffect } from 'react';
import Message from './Message';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

const Messages = () => {
    useEffect(() => {
      const q = query(collection(db,"emails") , orderBy('createdAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(allEmails);
        });

        // Cleanup the subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
}

export default Messages;
