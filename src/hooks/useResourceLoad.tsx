import React, { PropsWithChildren } from 'react';

const RESOURCE_TAGS = ['IMG'];

export const ResourceLoadContext = React.createContext({
  loaded: false,
  progress: 0,
});

export function useResourceLoad() {
  const [loaded, setLoaded] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const allResources = Array.from(document.getElementsByTagName('*')).filter(
      (resource) => RESOURCE_TAGS.includes(resource.tagName),
    ) as HTMLImageElement[] ;
    console.log(allResources);
    let loadedResources = 0;

    const onLoaded = () => {
      loadedResources++;
      setProgress((loadedResources / allResources.length) * 100);
      if (loadedResources === allResources.length) {
        setTimeout(() => {
          setLoaded(true);
        });
      }
    };

    for (const resource of allResources) {
      if (resource.complete) {
        onLoaded();
      } else {
        resource.addEventListener('load', onLoaded);
        resource.addEventListener('error', onLoaded);
      }
    }

    return () => {
      for (const resource of allResources) {
        if (resource.complete) {
          resource.removeEventListener('load', onLoaded);
          resource.removeEventListener('error', onLoaded);
        }
      }
    };
  }, []);

  return {
    loaded,
    progress,
  };
}

export function ResourceProvider(props: PropsWithChildren) {
  const { loaded, progress } = useResourceLoad();

  return (
    <ResourceLoadContext.Provider value={{ loaded, progress }}>
      {props.children}
    </ResourceLoadContext.Provider>
  );
}
