
import projectsData from "@/data/projects";

import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("projectId");
    try {
        const imageData = await fetch(new URL('./images/hero.jpg', import.meta.url).toString()).then(
            (res) => res.arrayBuffer()
        );
        if (!projectId){
          return new ImageResponse(
            (    
             
                    <img 
         
                        src={imageData} 
                        style={{
                          borderRadius: '50%'
                      }} 
                                       />
   
                    
            ),
            {
                width: 1200,
                height: 1023,
            }
        );
        }
        if(projectId){
          const project = projectsData.filter((project) => project.id === projectId);
         
          const imageData = await fetch(
            new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}${project[0].imgs[0].img}`, import.meta.url)
          ).then((res) => res.arrayBuffer());
      
          return new ImageResponse(
           
            (
            
              <img 
         
                        src={imageData} 
                        alt={project[0].Title}

                        
                                       />
           
            ),
         
                                      
            
            
                                       

      
            
          );
         
        }
         
        

    } catch (e) {
        return new Response(`Failed to generate the OG image. Error ${e.message}`, {
            status: 500,
        })
    }
}