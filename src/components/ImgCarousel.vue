<template>
  <div class="carousel">
    <div class="carousel-img">
      <div class="slideshow" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img v-for="(img, index) in images" :key="index" :src="img">
      </div>
    </div>

    <div class="controls" @click.prevent.stop>
      <i @click.prevent.stop="prevImage" class="pi pi-chevron-left"></i>
      <i @click.prevent.stop="nextImage" class="pi pi-chevron-right"></i>
    </div>

    <div class="dots" @click.prevent.stop>
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="{ active: currentIndex === index }"
        @click.prevent.stop="goToImage(index)"
      ></span>
    </div>
    <div class="control-overlay" @click.prevent.stop></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

function prevImage() {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length
}

function goToImage(index) {
  currentIndex.value = index
}
</script>

<style scoped>
/* * {
  border: 1px solid blue;
} */

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 30px;
}

.carousel-img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slideshow {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
}

.slideshow img {
  height: auto;
  object-fit: contain;
  /* border-radius: 20px; */
  width: 100%;
  flex-shrink: 0; /* check */
  transition: ease 0.5s;
}

.slideshow img:hover {
  transition: ease 0.5s;
  transform: scale(1.01);
  border-radius: 50px;
}

.controls {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
}

.controls i {
  cursor: pointer;
  color: rgb(130, 130, 130);
  pointer-events: all;
  /* background-color: rgba(0,0,0,0.4); */
  padding: 0 15px;
  font-size: 1.25rem;
}

.dots {
  position: absolute;
  bottom: 0px;
  left: 50%;
  text-align: center;
  transform: translateX(-50%);
  gap: 8px;
}

.dots span {
  border-radius: 50%;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  cursor: pointer;
  background-color: rgb(189, 189, 189);
  transition: background-color 0.3s ease;
}

.dots span.active {
  background-color: rgb(143, 143, 143);
}

.control-overlay {
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 30px; /* Same as padding-bottom of .carousel */
  width: 100%;
  z-index: 1; /* Behind other controls */
  cursor: default;
}

.controls,
.dots {
  z-index: 2; /* Above the overlay */
}
</style>c 