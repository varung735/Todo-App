import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('http://localhost/v1')
    .setProject('63a5f0776de18d127dcb');

export const account = new Account(client);