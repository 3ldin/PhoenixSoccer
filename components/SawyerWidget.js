import { useEffect } from 'react';

const SawyerWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/javascript';
    script.setAttribute('data-sawyertools', 'sawyertools');
    script.async = true;
    script.id = 'SA_MFVY8T3cLsvXEtBKduxmsWO6CUU6xqEY';
    script.src = 'https://hisawyer.com/embed/MFVY8T3cLsvXEtBKduxmsWO6CUU6xqEY.js';
    document.body.insertBefore(script, document.body.firstChild);

    // Cleanup function
    return () => {
      const scriptElement = document.getElementById('SA_MFVY8T3cLsvXEtBKduxmsWO6CUU6xqEY');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return null;
};

export default SawyerWidget;
