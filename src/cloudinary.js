import {v2 as cloudinary} from 'cloudinary';
import { response } from 'express';
import fs from "fs"

    cloudinary.config({ 
        cloud_name: process.env.Cloudinary_cloud_name, 
        api_key: process.env.Cloudinary_api_key, 
        api_secret: process.env.Cloudinary_api_secret, // Click 'View Credentials' below to copy your API secret
    });
    
   const uploadOnCloudinary= async(localFilePath)=>{
    try{
        if(!localFilePath)
            return null
        cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded on cloudinary", response.url);
        return response;
    } catch(error){
        fs.unlinkSync(localFilePath) //to remove the locally saved temp file as the upload operation gets failed
        return null
    }
   }

   export {uploadOnCloudinary}