import config from "../config/config";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Bucket(this.client);
  }

   // to create a post 

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      )
    } catch (error) {
      console.log("Appwrite service:: create post :: error", error);
    }
  }

  // update post

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      )
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  // deleting the post

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug
      )
      return true
    } catch (error) {
      console.log("Appwrite serive :: delete post :: error", error);
      return false
    }
  }

  // to get a post 

  async getPost(slug) {
    try {
        return await this.databases.getDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug

            )
    } catch (error) {
        console.log("Appwrite serive :: get post :: error", error);
        return false 
    }
  }

    // get all posts 

  async getPosts(queries = [Query.equal("status", "active")]){

    try {
        return await this.databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            queries,
           // 100,  pagination ? 
           // 0,  results ? 

        )
    } catch (error){
        console.log("Appwrite serive :: getPosts :: error", error)
        return false 
    }
  }

  // file upload services 

  async uploadFile(file){
    try {
        return await this.bucket.createFile(
            config.appwriteBucketId,
            ID.unique(),  // we will get id in return 
            file
        )
    } catch (error) {
        console.log("Appwrite serive :: uploadFile :: error", error)
        return false
    }
  }

  // delete file  service

  async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            config.appwriteBucketId,
            fileId
        )
        return true

    } catch (error){
        console.log("Appwrite serive :: deleteFile :: error", error);
        return false 
    }
  }

  // Get file preview 

  getFilePreview(fileId){
    return this.bucket.getFilePreview(
        config.appwriteBucketId,
        fileId
    )
  }

 
}

const service = new Service();

export default service;
