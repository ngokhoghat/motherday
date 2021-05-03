import React from "react";
import Moveable, { OnDrag, OnResize, OnRotate, OnScale } from "react-moveable";

export default function Sticker({ target }: any) {
  return (
    <Moveable
      target={target}
      container={null}
      origin={true}
      edge={false}
      draggable={true}
      throttleDrag={0}
      onDragStart={({ target, clientX, clientY }) => {}}
      onDrag={({ target, transform }: OnDrag) => {
        target!.style.transform = transform;
      }}
      onDragEnd={({ target, isDrag, clientX, clientY }) => {}}
      keepRatio={true}
      resizable={true}
      throttleResize={0}
      onResizeStart={({ target, clientX, clientY }) => {}}
      onResize={({ target, width, height, delta }: OnResize) => {
        delta[0] && (target!.style.width = `${width}px`);
        delta[1] && (target!.style.height = `${height}px`);
      }}
      onResizeEnd={({ target, isDrag, clientX, clientY }) => {}}
      scalable={true}
      throttleScale={0}
      onScaleStart={({ target, clientX, clientY }) => {}}
      onScale={({ target, scale, transform }: OnScale) => {
        target!.style.transform = transform;
      }}
      onScaleEnd={({ target, isDrag, clientX, clientY }) => {}}
      rotatable={true}
      throttleRotate={0}
      onRotateStart={({ target, clientX, clientY }) => {}}
      onRotate={({ target, dist, transform }: OnRotate) => {
        target!.style.transform = transform;
      }}
      onRotateEnd={({ target, isDrag, clientX, clientY }) => {}}
      warpable={true}
      onWarpStart={({ target, clientX, clientY }) => {}}
      onWarp={({ target }) => {}}
      onWarpEnd={({ target, isDrag, clientX, clientY }) => {}}
      pinchable={true}
      onPinchStart={({ target, clientX, clientY, datas }) => {}}
      onPinch={({ target, clientX, clientY, datas }) => {}}
      onPinchEnd={({ isDrag, target, clientX, clientY, datas }) => {}}
    />
  );
}
