export interface BackendGetContactsType {
    number: number;
    name: string;
}

export interface BackendGetMessagesOfContactType {
    from: 'me' | 'others';
    message: string;
}

export function getContactsWithMessage(){
    return(
        [
            {contactName:'Artin' ,messages:[] },
            {contactName:'Hamed' ,messages:[] },
            {contactName:'Hamed1' ,messages:[] },
            {contactName:'Hamed2' ,messages:[] },
            {contactName:'Hamed3' ,messages:[] },
            {contactName:'Hamed4' ,messages:[] },
            {contactName:'Hamed5' ,messages:[] },
            {contactName:'Hamed6' ,messages:[] },
            {contactName:'Hamed7' ,messages:[] },
            {contactName:'Hamed8' ,messages:[] },
            {contactName:'Hamed9' ,messages:[] },
            {contactName:'Hamed10' ,messages:[] },
            {contactName:'Hamed11' ,messages:[] },
            {contactName:'Hamed12' ,messages:[] },
            {contactName:'Hamed13' ,messages:[] },
            {contactName:'Hamed14' ,messages:[] },
            {contactName:'Hamed15' ,messages:[] },
            {contactName:'Hamed16' ,messages:[] },
          ]
    )
}

export function getContacts(): BackendGetContactsType[]{
    return(
        
            [
            {number: 1, name: 'Artin'},
            {number: 2, name: 'Hamed'},
            {number: 3, name: 'Amir'},
            {number: 4, name: 'Mahsa'},
            {number: 5, name: 'Adel'},
            {number: 6, name: 'Ramtin'},
            {number: 7, name: 'Behrad'},
            {number: 8, name: 'Amirhossein'},
            {number: 9, name: 'Saeed'},
            {number: 10, name: 'Parsa'},
            {number: 11, name: 'Sina'},
            {number: 12, name: 'Ashkan'},
        ]
        
    )
}

export function getMessagesOfContact(contactName: string): Promise<BackendGetMessagesOfContactType[]>{

    return(
    new Promise((resolve)=>{
        
      setTimeout (()=>{
        resolve(
                [
                    {from: 'me', message: `Salam! ${contactName}`},
                    {from:'me', message: 'chetori?:)))'},
                    {from: 'others', message: 'bah bah!!'},
                    {from: 'others', message: 'chakerim! to khubi?'},
                    {from: 'others', message: 'che khabara?!!'},
                ]
                )
      },5000) 

    })
)
        
}