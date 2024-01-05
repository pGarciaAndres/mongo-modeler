import React from 'react';
import { produce } from 'immer';
import { useCanvasViewSettingsContext } from '@/core/providers';
import { Coords, GUID, Size } from '@/core/model';
import { mockSchema } from './canvas.mock.data';
import { DatabaseTable } from './components/table/database-table.component';
import classes from './canvas.pod.module.css';
import { DatabaseRelationCollectionComponent } from './components/relation';
import { moveTableToTop, findField } from './canvas.business';

export const CanvasPod: React.FC = () => {
  const [schema, setSchema] = React.useState(() => mockSchema);
  const { canvasViewSettings } = useCanvasViewSettingsContext();
  const { canvasSize, zoomFactor } = canvasViewSettings;

  const viewBoxSize: Size = React.useMemo<Size>(
    () => ({
      width: canvasSize.width * zoomFactor,
      height: canvasSize.height * zoomFactor,
    }),
    [zoomFactor, canvasSize]
  );

  const updateTablePosition = (
    id: string,
    position: Coords,
    totalHeight: number,
    canvasSize: Size
  ) => {
    setSchema(prevSchema =>
      moveTableToTop(prevSchema, { id, position, totalHeight }, canvasSize)
    );
  };

  const handleToggleCollapse = (tableId: string, fieldId: GUID) => {
    setSchema(currentSchema =>
      produce(currentSchema, draft => {
        const table = draft.tables.find(t => t.id === tableId);
        if (table) {
          const field = findField(table.fields, fieldId);
          if (field) {
            field.isCollapsed = !field.isCollapsed;
          }
        }
      })
    );
  };

  return (
    <div>
      <div className={classes.container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={classes.containerSvg}
          viewBox={`0 0 ${viewBoxSize.width} ${viewBoxSize.height}`}
          width={canvasSize.width}
          height={canvasSize.height}
        >
          {schema.tables.map(table => (
            <DatabaseTable
              key={table.id}
              tableInfo={table}
              updatePosition={updateTablePosition}
              onToggleCollapse={handleToggleCollapse}
            />
          ))}
          <DatabaseRelationCollectionComponent schema={schema} />
        </svg>
      </div>
    </div>
  );
};