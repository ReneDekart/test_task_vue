<template>
  <div class="document-list--root">
    <div class="document-list--search">
      <div>
        <h3>Поиск документа</h3>
      </div>
      <div>
        <my-input
          placeholder="Введите ID документа"
          :model-value="searchString"
          @update:model-value="onStringChange($event)"
        />
      </div>
    </div>
    <div class="document-list--list">
      <div>
        <h3>Результаты</h3>
      </div>
      <my-loader v-if="isLoading" color="#0d6efd" class="spinner" />
      <div v-else-if="requestErrorMessage" class="error-message">
        {{ requestErrorMessage }}
      </div>
      <div v-else-if="documents.length > 0">
        <DocumentListItem
          v-for="document in documents"
          :key="document.id"
          :title="document.name"
          :docSrc="document.image"
          @click="onDocumentClick(document.id)"
          :selected="currentDocument?.id === document.id"
        />
      </div>
      <div v-else>Документы не найдены</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useDocumentStore } from "@/store/documentStore";

export default {
  name: "document-list",
  props: {},
  setup(props) {
    const isLoading = ref(true);
    const documentStore = useDocumentStore();
    const { documents, currentDocument, requestErrorMessage } =
      storeToRefs(documentStore);
    const searchString = ref("");
    onMounted(async () => {
      isLoading.value = true;
      await documentStore.loadDocuments();
      isLoading.value = false;
    });
    const onDocumentClick = (id) => {
      if (currentDocument.value?.id === id) {
        currentDocument.value = null;
      } else
        currentDocument.value = documents.value.find((doc) => doc.id === id);
    };
    const onStringChange = async (value) => {
      searchString.value = value;
      isLoading.value = true;
      await documentStore.searchDocuments(searchString.value);
      isLoading.value = false;
    };
    return {
      documents,
      isLoading,
      onDocumentClick,
      onStringChange,
      currentDocument,
      searchString,
      requestErrorMessage,
    };
  },
};
</script>

<style lang="scss" scoped>
.document-list--root {
  min-width: 290px;
  > div {
    margin-bottom: 30px;
  }
  h3 {
    margin-bottom: 18px;
  }
  .document-list--list {
    display: flex;
    flex-direction: column;
    > div:nth-child(2) > div {
      margin-bottom: 18px;
    }
  }
  .error-message {
    color: red;
    font-weight: 600;
  }
  .spinner {
    margin-top: 50px;
    align-self: center;
  }
}
</style>
