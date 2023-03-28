import React from 'react';

const RESOURCE_TAGS = ['IMG'];

function useResourceLoad() {
  const [loading, setLoading] = React.useState(true);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const allResources = Array.from(document.getElementsByTagName('*')).filter(
      (resource) => RESOURCE_TAGS.includes(resource.tagName),
    );
    console.log(allResources);
    let loadedResources = 0;

    const onLoaded = () => {
      loadedResources++;
      setProgress((loadedResources / allResources.length) * 100);
      if (loadedResources === allResources.length) {
        setTimeout(() => {
          setLoading(false);
        });
      }
    };

    for (const resource of allResources) {
      resource.addEventListener('load', onLoaded);
      resource.addEventListener('error', onLoaded);
    }

    return () => {
      for (const resource of allResources) {
        resource.removeEventListener('load', onLoaded);
        resource.removeEventListener('error', onLoaded);
      }
    };
  }, []);

  return {
    loading,
    progress,
  };
}

export default useResourceLoad;
