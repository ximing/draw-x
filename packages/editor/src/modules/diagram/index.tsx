import { useService, view } from '@rabjs/core';
import { GraphService } from './graph.service';
import { useEffect } from 'react';

export const Diagram = view(() => {
  const graphService = useService(GraphService);
  useEffect(() => {
    graphService.init();
  }, []);
  return <div id="draw-x-diagram" style={{ flex: 1 }}></div>;
});
