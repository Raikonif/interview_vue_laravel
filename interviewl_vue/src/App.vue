<script setup>
import HelloWorld from './components/HelloWorld.vue'
const array1 = [5, 8, 7, 9]
const array2 = [2, 7, 9, 6, 75]
const array3 = [2, 7, 57, 6, 5]
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

function showResult() {
  result = []
  result.push(updatedArray(array1))
  result.push(updatedArray(array1))
  result.push(updatedArray(array1))
  return result
}

</script>

<template>
  <div>
    <h3>Form</h3>
    <form onsubmit={}>
      <h4>Click en el Boton para ejecutar</h4>
      <div>{{ array1 }}</div>
      <div>{{ array2 }}</div>
      <div>{{ array3 }}</div>
      <div v-for="(item, index) in showResult" :key="index">{{ item }}</div>
      <button type="submit" id="btn">Generar lista de Arrays</button>
    </form>
  </div>
</template>

<style scoped></style>
