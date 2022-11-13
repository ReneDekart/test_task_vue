<template>
  <div class="document-list-item--root" :class="{ selected: selected }">
    <div class="document-list-item--img">
      <my-loader v-if="isLoading" />
      <img v-else-if="imgSrc" :src="imgSrc" alt="img" />
      <blank-image v-if="isError" />
    </div>
    <div class="document-list-item--about">
      <div>
        <h3>{{ title }}</h3>
      </div>
      <div>Size: {{ docSize }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  name: "document-list-item",
  props: {
    title: {
      type: String,
      default: "Доумент",
    },
    docSrc: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const imgSrc = ref("");
    const docSize = ref("No data");
    const isError = ref(false);
    const isLoading = ref(true);
    const url = props.docSrc ?? null;
    onMounted(async () => {
      if (url) {
        await axios.get(url, { responseType: "blob" }).then((res, err) => {
          const blob = new Blob([res.data], {
            type: res.data?.type ?? undefined,
          });
          imgSrc.value = URL.createObjectURL(blob);
          isError.value = err;
          docSize.value = `${Math.round(res.data.size / 1024)} KB`;
        });
      } else isError.value = true;
      isLoading.value = false;
    });
    return { imgSrc, docSize, isError, isLoading };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";
.document-list-item--root {
  background: $c_background_light;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  border: solid 1px $c_border;
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: $c_blue;
  }
  &.selected {
    background-color: $c_blue;
  }

  .document-list-item--img {
    width: 70px;
    height: 70px;
    border-radius: 10px 0 0 10px;
    > img {
      border-radius: 10px 0 0 10px;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .document-list-item--about {
    border-radius: 0 10px 10px 0;
    border-left: 1px solid $c_border;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    padding: 0 15px;
  }
}
</style>
