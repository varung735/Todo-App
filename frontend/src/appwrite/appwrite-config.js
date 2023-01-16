import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('http://localhost/v1')
    .setProject('63a5f0776de18d127dcb');

export const account = new Account(client);

// To sign-up the user
export const createAccount = async (name, email, password) => {
    await account.create(
        ID.unique(),
        email,
        password,
        name
    ).then(response => {
        console.log(response);
    }, error => {
        console.log(error);
    })
}