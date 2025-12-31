// PageRenderer.js
import React from 'react';
import componentRegistry from './componentRegistry';

export default function PageRenderer({ components, passData }) {
  return (
    <>
      {components.map((block) => {
        const Component = componentRegistry[block.type];
        if (!Component) return null;
        return <Component key={block.id} {...block.content} onChange={(data) => passData(block.type, data) }/>;
      })}
    </>
  );
}