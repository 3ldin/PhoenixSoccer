import React, { useEffect } from 'react'; 
function SawyerTool() 
{ useEffect(() => { 
   const script = document.createElement('script');
   script.src = 'https://hisawyer.com/embed/MFVY8T3cLsvXEtBKduxmsWO6CUU6xqEY.js'; 
   script.async = true; 
   script.id = 'SA_MFVY8T3cLsvXEtBKduxmsWO6CUU6xqEY'; 
   script.setAttribute('data-sawyertools', 'sawyertools'); 
   script.type = 'application/javascript'; 
   document.body.appendChild(script); 
   
   return () => { document.body.removeChild(script); }; }, []);

   return ( <div> </div> ); }


export default SawyerTool;