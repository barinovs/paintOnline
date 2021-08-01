import React from 'react';
import '../styles/toolbar.scss';

import toolState from '../store/toolState';
import Brush from '../tools/Brush';
import canvasState from '../store/canvasState';
import Eraser from '../tools/Eraser';

const Toolbar = () => {
    return (
        <div className="toolbar">
            <button className="toolbar__btn brush" onclick = {() => toolState.setTool(new Brush(canvasState.canvas))} />
            <button className="toolbar__btn rect" />
            <button className="toolbar__btn circle" />
            <button className="toolbar__btn eraser" onclick = {() => toolState.setTool(new Eraser(canvasState.canvas))}/>
            <button className="toolbar__btn line" />
            <input type="color" style={{marginLeft:10}} />
            <button className="toolbar__btn undo" />
            <button className="toolbar__btn redo" />
            <button className="toolbar__btn save" />
        </div>
    );
}

export default Toolbar