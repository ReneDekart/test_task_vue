<template>
  <div class="document-view--root">
    <div v-if="currentDocument?.id">
      <div class="document-view--image">
        <img
          v-if="currentDocument?.image"
          :src="currentDocument?.image"
          alt="img"
        />
        <blank-image v-else />
      </div>
      <div class="document-view--content">
        <div class="document-view--title">
          <h3>{{ currentDocument?.name || "Без заголовка" }}</h3>
          <div class="document-view--buttons">
            <my-button color="blue">
              <a :href="`${currentDocument?.image || undefined}`" download
                >Скачать</a
              >
            </my-button>
            <my-button color="red" @click="deleteDocument(currentDocument.id)"
              >Удалить</my-button
            >
          </div>
        </div>
        <div class="document-view--description">
          <h3>Описание</h3>
          <p>
            {{ currentDocument?.description || "Нет описания" }}
          </p>
        </div>
      </div>
    </div>
    <div v-else class="welcome-text">
      <div>Выберите документ, чтобы посмотреть его содержиое</div>
    </div>
  </div>
</template>

<script>
import { useDocumentStore } from "@/store/documentStore";
import { storeToRefs } from "pinia";

export default {
  name: "document-view",
  setup() {
    const documentStore = useDocumentStore();
    const { currentDocument } = storeToRefs(documentStore);
    return { currentDocument, deleteDocument: documentStore.deleteDocument };
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/colors.scss";

.document-view--root {
  margin: 0 auto;
  flex-grow: 1;

  > div {
    background: $c_background_light;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 10px;
  }
  .document-view--image {
    flex-basis: 50%;
    flex-grow: 1;
    padding: 30px;
    text-align: center;

    > img {
      box-shadow: 0px 0px 7px 4px rgb(0 0 0 / 10%);
      width: 100%;
    }
  }
  .document-view--content {
    flex-basis: 50%;
    padding: 30px;
    flex-grow: 1;
    p {
      color: $c_text_secondary;
    }
  }
  .document-view--title {
    margin-bottom: 45px;
    width: 100%;
    > h3 {
      margin-bottom: 15px;
    }
  }
  .document-view--buttons {
    display: flex;
    align-items: flex-start;
    > button {
      width: 100px;
    }
    > button:nth-child(1) {
      margin-right: 20px;
    }
  }
  .welcome-text {
    display: flex;
    flex-direction: column;
    min-height: 500px;
    vertical-align: middle;
    > div {
      margin: 0 15px;
      text-align: center;
    }
  }
}
</style>
