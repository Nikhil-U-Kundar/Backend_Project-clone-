import {v2}from "cloudinary"
import fs from "fs"
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadONCloudinary = async (localfilepath)=>{
    try {
        if(!localfilepath) return null
        //upload the file
 const response = await uploadONCloudinary.uploader.upload(localfilepath,{
            resource_type: "auto"
        })
        //file has been uploaded sucessfully
        console.log("file has been uploaded on cloudinary",response.url);//response.url would be the URL of the uploaded file
        //  on Cloudinary, allowing you to access and display the file in your application or share it with others via the web.
        //  This URL can be used to directly embed or link to the uploaded file in HTML pages, emails, or other web-based content.
        return response;
    } catch (error) {  ///if errror comes we should unlink should de done  and remove the locally stored temp file as the uploaded 
                       //    operation got failed
      return null;              
        
    }
}


export {uploadONCloudinary}







