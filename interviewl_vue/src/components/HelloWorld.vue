<script setup>
import { ref } from 'vue'

const array1 = [5, 8, 7, 9]
const array2 = [2, 7, 9, 6, 75]
const array3 = [2, 7, 57, 6, 5]

let clicking = false
const is_clicked = (clicking) => {
  clicking = true
}
const textArray = ["EMI", "LIANO"];

const updatedArray = (arr) => {
  new_array = [];
  for (let num of arr) {
    if (num.toString().length === 1 && num.toString() === "5") {
      new_array.push(textArray[1]);
    } else if (num.toString().length === 1 && num.toString() === "7") {
      new_array.push(textArray[0]);
    } else if (num.toString().length > 1) {
      let new_num = "";
      for (let i of num.toString()) {
        if (i === "5") {
          new_num += textArray[1];
        } else if (i === "7") {
          new_num += textArray[0];
        } else {
          new_num += i;
        }
      }
      new_array.push(new_num);
    } else {
      new_array.push(num);
    }
  }
  return new_array;
};
</script>

<template>
  <h2>HOLA</h2>
  <form onsubmit={updatedArray}>
    <div v-if={}>
      <ul>
        <li v-for="arr in updatedArray(array1)">{{ arr }}</li>
      </ul>
    </div>
    <button onclick={{is_clicked(clicking)}}>Click Para Generar</button>
  </form>
</template>

<style scoped></style>
