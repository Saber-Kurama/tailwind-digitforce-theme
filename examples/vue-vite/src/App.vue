<!--
 * @Author: saber
 * @Date: 2021-11-17 21:06:31
 * @LastEditTime: 2021-11-23 18:37:23
 * @LastEditors: saber
 * @Description: 
-->
<template>
<div>
  <!-- default theme (dark) -->
  <div class="p-10 bg-base-100 text-base-content">
    <button class="btn saber">button</button>
    <button class="btn btn-primary">button</button>
    <button class="btn btn-secondary">button</button>
    <button class="btn btn-accent">button</button>
  </div>

  <!-- garden theme -->
  <div class="p-10 bg-base-100 text-base-content" data-theme=garden>
    <button class="btn">button</button>
    <button class="btn btn-primary">button</button>
    <button class="btn btn-secondary">button</button>
    <button class="btn btn-accent">button</button>
  </div>

  <!-- forest theme -->
  <div class="p-10 bg-base-100 text-base-content" data-theme=forest>
    <button class="text-red-900">button</button>
    <button class="btn btn-primary">button</button>
    <button class="btn btn-secondary">button</button>
    <button class="btn btn-accent">button</button>
  </div>
</div>
</template>
