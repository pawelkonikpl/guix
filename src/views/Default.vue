<template>
  <v-stage ref="stage" :config="stageSize">
    <v-layer ref="layer">
      <v-circle
        :config="configCircle"
        @dragstart="handleDragStart"
        @dragend="handleDragEnd"
      ></v-circle>
      <v-text
        @dragstart="handleDragStart"
        @dragend="handleDragEnd"
        :config="{
          text: 'Draggable Text',
          x: 50,
          y: 50,
          draggable: true,
          fill: isDragging ? 'green' : 'black',
        }"
      />
    </v-layer>
  </v-stage>
</template>

<script>
const width = window.innerWidth
const height = window.innerHeight

export default {
  data() {
    return {
      stageSize: {
        width: width,
        height: height,
      },
      configKonva: {
        width: 200,
        height: 200,
      },
      configCircle: {
        draggable: true,
        x: 100,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
      },
      isDragging: false,
    }
  },
  methods: {
    handleDragStart() {
      this.isDragging = true
    },
    handleDragEnd() {
      this.isDragging = false
    },
  },
}
</script>
