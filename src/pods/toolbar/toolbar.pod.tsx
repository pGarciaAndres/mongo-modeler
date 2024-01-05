import React from 'react';
import { useCanvasViewSettingsContext } from '@/core/providers';
import classes from './toolbar.pod.module.css';
import { EditRelation } from '@/pods/edit-realtion';
import { EditTable } from '@/pods/edit-table';
import { useModalDialogContext } from '@/core/providers/modal-dialog-provider';
import { CanvasSettingsComponent } from '../canvas-settings';
import { Size } from '@/core/model';

export const ToolbarPod: React.FC = () => {
  const { zoomIn, zoomOut, canvasViewSettings, setCanvasSize } =
    useCanvasViewSettingsContext();
  const { openModal, closeModal } = useModalDialogContext();
  const handleRelationClick = () => {
    openModal(<EditRelation />);
  };
  const handleEditTableClick = () => {
    openModal(<EditTable />);
  };

  const handleChangeSettings = (size: Size) => {
    setCanvasSize(size);
    closeModal();
  };

  const handleCanvasSettings = () => {
    openModal(
      <CanvasSettingsComponent
        size={canvasViewSettings.canvasSize}
        onChangeSize={handleChangeSettings}
      />
    );
  };

  return (
    <div className={classes.container}>
      <button onClick={zoomIn}>Zoom in</button>
      <button onClick={zoomOut}>Zoom out</button>
      <button onClick={handleRelationClick}>Relation</button>
      <button onClick={handleEditTableClick}>Edit Table</button>
      <button onClick={handleCanvasSettings}>Canvas Settings</button>
    </div>
  );
};