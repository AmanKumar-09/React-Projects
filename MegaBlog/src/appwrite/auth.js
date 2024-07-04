// Future based code 

import config from "../config/config.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // sign in - new account creation

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(), email, password, name);

      if (userAccount) {
        return this.login.apply({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  /// if account is created already then just login - sign in

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // check the current location

  async getCurrentUser() {
    try {
      return await this.account.get(); // agar account mekuch mila  hi  na
    } catch (error) {
      console.log("Appwrite serive :: getCurrrentUser :: error", error); //when u could'nt reach out to hmne
    }

    return null;
  }

   // logout session 

  async logout() {

    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite serive :: logout :: error", error);
    }

  }

}

const authService = new AuthService();

export default authService;
